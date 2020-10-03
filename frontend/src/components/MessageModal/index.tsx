import React, { useCallback } from 'react'

import { FiX } from 'react-icons/fi'

import { Container } from './styles'

export interface IModalProps {
  title: string
  description: string
  color: 'red' | 'green'
  onClose(): void
}

const MessageModal: React.FC<IModalProps> = ({
  title,
  description,
  color,
  onClose
}) => {
  const handleClickX = useCallback(() => {
    onClose()
  }, [onClose])

  return (
    <Container color={color}>
      <div>
        <header>
          <span>{title}</span>
          <button type='button' onClick={handleClickX}>
            <FiX size={25} />
          </button>
        </header>

        <p>{description}</p>
      </div>
    </Container>
  )
}

export default MessageModal
