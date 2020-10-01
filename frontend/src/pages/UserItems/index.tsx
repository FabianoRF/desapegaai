import React from 'react'

import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import { Container, Header, Content } from './styles'
import Item from '../../components/Item'

const UserItems: React.FC = () => {
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
          <Link to='/dashboard'>Todos Itens</Link>
          <Link id='selected' to='/user-items'>
            Meus Itens
          </Link>
          <Link to='/register'>Novo Item</Link>
        </header>
        <section>
          <Item title='Bicicleta' value={32424.3} isUserItem />
          <Item title='Bicicleta' value={32424.0} isUserItem />
          <Item title='Bicicleta' value={32424.0} isUserItem />
          <Item title='Bicicleta' value={32424.0} isUserItem />
          <Item title='Bicicleta' value={32424.0} isUserItem />
          <Item title='Bicicleta' value={32424.0} isUserItem />
        </section>
      </Content>
    </Container>
  )
}

export default UserItems
