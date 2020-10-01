import React from 'react'
import { Link } from 'react-router-dom'

import { FiPower } from 'react-icons/fi'

import Item from '../../components/Item'

import { Container, Header, Content } from './styles'

const Dashboard: React.FC = () => {
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
          <Link id='selected' to='/dashboard'>
            Todos Itens
          </Link>
          <Link to='/user-items'>Meus Itens</Link>
          <Link to='/register'>Novo Item</Link>
        </header>
        <section>
          <Item title='Bicicleta' value={32424.0} isUserItem={false} />
          <Item title='Bicicleta' value={32424.0} isUserItem={false} />
          <Item title='Bicicleta' value={32424.0} isUserItem={false} />
          <Item title='Bicicleta' value={32424.3} isUserItem={false} />
          <Item title='Bicicleta' value={32424.0} isUserItem={false} />
          <Item title='Bicicleta' value={32424.0} isUserItem={false} />
        </section>
      </Content>
    </Container>
  )
}

export default Dashboard
