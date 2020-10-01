import React from 'react'
import { Link } from 'react-router-dom'

import { FiPower } from 'react-icons/fi'

import { Container, Header, Content } from './styles'

const Register: React.FC = () => {
  return (
    <Container>
      <Header>
        <h1>Desapega aí</h1>
        <button type='button'>
          <FiPower size={40} />
        </button>
      </Header>

      <Content>
        <header>
          <Link to='dasf'>Todos Itens</Link>
          <Link to='/user-items'>Meus Itens</Link>
          <Link id='selected' to='/register'>
            Novo Item
          </Link>
        </header>
        <section />
      </Content>
    </Container>
  )
}

export default Register
