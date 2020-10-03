import React from 'react'

import { Container } from './styles'

interface IItemProps {
  title: string
  value: number
  image: string
}

const Item: React.FC<IItemProps> = ({ title, value, children, image }) => (
  <Container>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <span>R$ {value}</span>

    <div>{children}</div>
  </Container>
)

export default Item
