import React from 'react'
import { Link } from 'react-router-dom'

import Item from '../../components/Item'
import Header from '../../components/Header'

import { Container, Content } from './styles'

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />

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
