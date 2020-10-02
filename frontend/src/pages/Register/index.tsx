import React, { useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { FiArrowUpCircle } from 'react-icons/fi'
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'

import { Container, Content } from './styles'
import Header from '../../components/Header'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Dropzone from '../../components/Dropzone'

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const [selectedFile, setSelectedFile] = useState<File>()

  const handleSubmit = useCallback(async (data) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        title: Yup.string().required('Titulo obrigatorio'),
        description: Yup.string().required('Descrição obrigatoria'),
        price: Yup.number().required('Preco é obrigatório')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      // fazer a chamada a api aqui
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
    }
  }, [])

  return (
    <Container>
      <Header />

      <Content>
        <header>
          <Link to='/dashboard'>Todos Itens</Link>
          <Link to='/user-items'>Meus Itens</Link>
          <Link id='selected' to='/register'>
            Novo Item
          </Link>
        </header>

        <section>
          <h3>Por favor, informe os dados do item que deseja desapegar!</h3>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input name='title' placeholder='Digite o Titulo.' />
            <Input name='description' placeholder='Digite a descrição.' />
            <Input name='price' placeholder='Digite o preço.' type='number' />
            <Dropzone onFileUploaded={setSelectedFile} />

            <Button type='submit'>
              <FiArrowUpCircle size={25} />
              Cadastrar
            </Button>
          </Form>
        </section>
      </Content>
    </Container>
  )
}

export default Register
