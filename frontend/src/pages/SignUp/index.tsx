import React, { useCallback, useRef, useState } from 'react'
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { Link } from 'react-router-dom'

import * as Yup from 'yup'

import signUpIlustration from '../../assets/signUpIlustration.svg'

import { Container, Content, IlustrationContainer } from './styles'
import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'

import Button from '../../components/Button'
import Input from '../../components/Input'
import MessageModal from '../../components/MessageModal'

interface IFormData {
  name: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [isMessageModal, setIsMessageModal] = useState(false)

  const handleSubmit = useCallback(async (data: IFormData) => {
    try {
      formRef.current?.setErrors({})

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(8, 'Senha deve conter pelo menos 8 caracteres.')
      })

      await schema.validate(data, {
        abortEarly: false
      })

      // exibir alguma mensagem e redirecionar

      await api.post('/sign-up', data)
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)

        formRef.current?.setErrors(errors)
      }
      setIsMessageModal(true)
    }
  }, [])

  return (
    <>
      <Container>
        <Content>
          <h1>Desapega aí</h1>
          <h2>Login</h2>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input icon={FiUser} name='name' placeholder='Nome' />
            <Input icon={FiMail} name='email' placeholder='E-mail' />
            <Input
              icon={FiLock}
              name='password'
              type='password'
              placeholder='Senha'
            />

            <Button type='submit'>
              <FiLogIn size={25} />
              Entrar
            </Button>
          </Form>

          <Link to='/'>
            <FiArrowLeft size={20} /> Voltar para o Login
          </Link>
        </Content>

        <IlustrationContainer>
          <img src={signUpIlustration} alt='Sign-in' />
        </IlustrationContainer>
      </Container>
      {isMessageModal && (
        <MessageModal
          title='Erro'
          isVisible
          description='Erro no cadastro por favor confira sua credenciais.'
        />
      )}
    </>
  )
}

export default SignUp
