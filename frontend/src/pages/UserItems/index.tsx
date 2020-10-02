import React from 'react'

import { Link } from 'react-router-dom'

import { Container, Content } from './styles'
import Item from '../../components/Item'
import Header from '../../components/Header'

const UserItems: React.FC = () => {
  return (
    <Container>
      <Header />

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
