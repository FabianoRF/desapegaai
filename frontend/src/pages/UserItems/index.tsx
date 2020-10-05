import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMaximize2, FiXCircle } from 'react-icons/fi'
import { Container, Content, Button } from './styles'

import Item from '../../components/Item'
import Header from '../../components/Header'
import ItemModal from '../../components/ItemModal'

import { useAuth } from '../../hooks/authHook'
import { api, baseUrl } from '../../services/api'

interface IItem {
  id: string
  image: string
  title: string
  description: string
  price: number
}

const UserItems: React.FC = () => {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [items, setItems] = useState<IItem[]>([])
  const [modalItemId, setModalItemId] = useState('')
  const { token, user } = useAuth()

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

  const handleExcludeItem = useCallback(
    async (id: string) => {
      await api.delete(`/item/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const newItems = items.filter((item) => item.id !== id)
      setItems(newItems)
    },
    [items, token]
  )

  useEffect(() => {
    async function loadData() {
      const response = await api.get('/item', {
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          user_id: user.id
        }
      })

      const responseItems: IItem[] = response.data.map((item: IItem) => ({
        ...item,
        image: `${baseUrl}/files/${item.image}`
      }))

      setItems(responseItems)
    }

    loadData()
  }, [token, user])

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
                <Button
                  type='button'
                  onClick={() => handleExcludeItem(item.id)}
                >
                  <FiXCircle size={16} />
                  Excluir
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

export default UserItems
