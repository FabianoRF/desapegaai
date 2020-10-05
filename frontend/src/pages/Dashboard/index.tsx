import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FiMaximize2 } from 'react-icons/fi'
import Item from '../../components/Item'
import Header from '../../components/Header'
import ItemModal from '../../components/ItemModal'

import { Container, Content, Button } from './styles'

import { api, baseUrl } from '../../services/api'
import { useAuth } from '../../hooks/authHook'

interface IItem {
  id: string
  image: string
  title: string
  description: string
  price: number
}

const Dashboard: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [items, setItems] = useState<IItem[]>([])
  const [modalItemId, setModalItemId] = useState('')
  const { token } = useAuth()

  const handleVisibleModal = useCallback((id) => {
    setIsVisibleModal(true)
    setModalItemId(id)
  }, [])

  const handleDisplayModal = useCallback(() => {
    const findedItem = items.find((item) => item.id === modalItemId)

    if (findedItem) {
      return (
        <ItemModal
          image={findedItem.image}
          title={findedItem.title}
          description={findedItem.description}
          price={findedItem.price}
          onClose={() => {
            setIsVisibleModal(false)
          }}
        />
      )
    }

    return <h1>Erro</h1>
  }, [items, modalItemId])

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/item', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const responseItems: IItem[] = response.data.map((item: IItem) => ({
        ...item,
        image: `${baseUrl}/files/${item.image}`
      }))

      setItems(responseItems)
    }

    loadData()
  }, [token])

  return (
    <>
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
            {items.map((item) => (
              <Item
                key={item.id}
                title={item.title}
                value={item.price}
                image={item.image}
              >
                <Button
                  type='button'
                  onClick={() => handleVisibleModal(item.id)}
                >
                  <FiMaximize2 size={16} />
                  Ver
                </Button>
              </Item>
            ))}
          </section>
        </Content>
      </Container>

      {isVisibleModal && handleDisplayModal()}
    </>
  )
}

export default Dashboard
