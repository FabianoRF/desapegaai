import React, { useRef, useCallback, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { FiArrowUpCircle } from 'react-icons/fi'
import * as Yup from 'yup'

import { Container, Content } from './styles'
import Header from '../../components/Header'

import Input from '../../components/Input'
import Button from '../../components/Button'
import Dropzone from '../../components/Dropzone'

import getValidationErrors from '../../utils/getValidationErrors'
import { api } from '../../services/api'
import { useAuth } from '../../hooks/authHook'
import MessageModal from '../../components/MessageModal'

interface IData {
  user_id: string
  title: string
  description: string
  price: number
}

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const history = useHistory()
  const { token, user } = useAuth()
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File>()

  const handleSubmit = useCallback(
    async (data: IData) => {
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

        const formData = new FormData()
        formData.append('user_id', user.id)
        formData.append('title', data.title)
        formData.append('description', data.description)
        formData.append('price', String(data.price))

        if (selectedFile) {
          formData.append('image', selectedFile, selectedFile.name)
        }

        await api.post('/item', formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setIsVisibleModal(true)

        setTimeout(() => {
          history.push('/user-items')
        }, 3000)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
        }
      }
    },
    [history, selectedFile, token, user]
  )

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
            <Input
              name='price'
              placeholder='Digite o preço.'
              type='number'
              step='0.01'
            />
            <Dropzone onFileUploaded={setSelectedFile} />

            <Button type='submit'>
              <FiArrowUpCircle size={25} />
              Cadastrar
            </Button>
          </Form>
        </section>
      </Content>

      {isVisibleModal && (
        <MessageModal
          title='Sucesso'
          description='O cadastro do item foi concluido. Voce será redirecionado para seus itens.'
          color='green'
          onClose={() => {
            setIsVisibleModal(false)
          }}
        />
      )}
    </Container>
  )
}

export default Register
