import React, { useCallback } from 'react'

import { FiX } from 'react-icons/fi'

import { Container, Content } from './styles'

interface IModalProps {
  image: string
  title: string
  description: string
  price: number
  onClose(): void
}

const MessageModal: React.FC<IModalProps> = ({
  image,
  title,
  description,
  price,
  onClose
}: IModalProps) => {
  const handleClickX = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <Container onClick={handleClickX}>
      <div>
        <section>
          <img src={image} alt='bicicleta' />
          <button type='button' onClick={handleClickX}>
            <FiX size={25} />
          </button>
        </section>

        <h2>{title}</h2>

        <Content>
          <p>
            <strong>Descrição:</strong> {description}
          </p>
          <p>
            <strong>Preço:</strong> <span>R$ {price}</span>
          </p>
        </Content>
      </div>
    </Container>
  )
}

export default MessageModal
