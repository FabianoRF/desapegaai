import React from 'react'

import { Container } from './styles'

import bikeImg from '../../assets/bike.png'

interface IItemProps {
  title: string
  value: number
}

const Item: React.FC<IItemProps> = ({ title, value, children }) => (
  <Container>
    <img src={bikeImg} alt='bicicleta' />
    <h3>{title}</h3>
    <span>R$ {value}</span>

    <div>{children}</div>
  </Container>
)

export default Item
