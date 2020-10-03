import React, { useCallback, useState } from 'react'

import { Link } from 'react-router-dom'

import { FiMaximize2, FiXCircle } from 'react-icons/fi'
import { Container, Content, Button } from './styles'
import Item from '../../components/Item'
import Header from '../../components/Header'
import ItemModal from '../../components/ItemModal'

const UserItems: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const handleVisibleModal = useCallback(() => {
    setIsVisibleModal(true)
  }, [])

  return (
    <>
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
            <Item title='Bicicleta' value={32424.3} image='adsf'>
              <Button type='button' onClick={handleVisibleModal}>
                <FiMaximize2 size={16} />
                Ver
              </Button>
              <Button type='button'>
                <FiXCircle size={16} />
                Excluir
              </Button>
            </Item>
          </section>
        </Content>
      </Container>
      {isVisibleModal && (
        <ItemModal
          image='https://images.unsplash.com/photo-1507035895480-2b3156c31fc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'
          title='titulo'
          seller='Jonh Doe'
          description='Uma bike bacana em excelente estado meu amigão'
          price={123}
          onClose={() => {
            setIsVisibleModal(false)
          }}
        />
      )}
    </>
  )
}

export default UserItems
