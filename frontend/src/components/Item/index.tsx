import React from 'react'

import { FiMaximize2, FiXCircle } from 'react-icons/fi'
import { Container, Button } from './styles'

import bikeImg from '../../assets/bike.png'

interface IItemProps {
  title: string
  value: number
  isUserItem: boolean
}

const Item: React.FC<IItemProps> = ({ title, isUserItem, value }) => (
  <Container>
    <img src={bikeImg} alt='bicicleta' />
    <h3>{title}</h3>
    <span>R$ {value}</span>

    <div>
      <Button type='button'>
        <FiMaximize2 size={16} />
        Ver
      </Button>

      {isUserItem && (
        <Button isRed type='button'>
          <FiXCircle size={16} />
          Excluir
        </Button>
      )}
    </div>
  </Container>
)

export default Item
