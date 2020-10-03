import React, { useCallback, useRef, useState } from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import { useAuth } from '../../hooks/authHook'

import signInIlustration from '../../assets/signInIlustration.svg'

import { Container, Content, IlustrationContainer } from './styles'
import getValidationErrors from '../../utils/getValidationErrors'

import Button from '../../components/Button'
import Input from '../../components/Input'
import MessageModal from '../../components/MessageModal'

interface IFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { signIn } = useAuth()
  const history = useHistory()
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleSubmit = useCallback(
    async (data: IFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
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

        await signIn({
          email: data.email,
          password: data.password
        })

        history.push('/dashboard')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
          return
        }
        setIsVisibleModal(true)
      }
    },
    [history, signIn]
  )

  return (
    <>
      <Container>
        <Content>
          <h1>Desapega aí</h1>
          <h2>Login</h2>
          <Form ref={formRef} onSubmit={handleSubmit}>
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

          <Link to='/signup'>
            Não Possui Cadastro? <strong>Cadastre-se</strong>
          </Link>
        </Content>

        <IlustrationContainer>
          <img src={signInIlustration} alt='Sign-in' />
        </IlustrationContainer>
      </Container>
      {isVisibleModal && (
        <MessageModal
          title='Erro'
          description='Erro na autenticação, por favor confira sua credenciais.'
          color='red'
          onClose={() => {
            setIsVisibleModal(false)
          }}
        />
      )}
    </>
  )
}

export default SignIn
