import React, { useCallback, useRef, useState } from 'react'
import { FiLogIn, FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'
import { Form } from '@unform/web'
import { FormHandles } from '@unform/core'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'

import signUpIlustration from '../../assets/signUpIlustration.svg'

import { Container, Content, IlustrationContainer } from './styles'
import getValidationErrors from '../../utils/getValidationErrors'
import { api } from '../../services/api'

import Button from '../../components/Button'
import Input from '../../components/Input'
import MessageModal, { IModalProps } from '../../components/MessageModal'

interface IFormData {
  name: string
  email: string
  password: string
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [modalProps, setModalProps] = useState({} as IModalProps)
  const history = useHistory()

  const handleSubmit = useCallback(
    async (data: IFormData) => {
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

        setIsVisibleModal(true)
        setModalProps({
          color: 'green',
          title: 'Sucesso',
          description:
            'Seu cadastro foi concluido, voce será redirecionado à pagina de login em 3 segundos.',
          onClose: () => {
            setIsVisibleModal(false)
          }
        })
        setTimeout(() => {
          history.push('/')
        }, 3000)
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)
        }

        setIsVisibleModal(true)
        setModalProps({
          color: 'red',
          title: 'Erro',
          description:
            'Seu cadastro não foi concluido, por favor verifique suas credenciais.',
          onClose: () => {
            setIsVisibleModal(false)
          }
        })
      }
    },
    [history]
  )

  return (
    <>
      <Container>
        <Content>
          <h1>Desapega aí</h1>
          <h2>Cadastre-se</h2>
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
              Cadastrar
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
      {isVisibleModal && <MessageModal {...modalProps} />}
    </>
  )
}

export default SignUp
