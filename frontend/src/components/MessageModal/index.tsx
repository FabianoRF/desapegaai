import React, { useState, useCallback, useEffect } from 'react'

import { FiX } from 'react-icons/fi'

import { Container } from './styles'

interface IModalProps {
  isVisible: boolean
  title: string
  description: string
}

const MessageModal: React.FC<IModalProps> = ({
  title,
  description,
  isVisible
}) => {
  const [errorState, setErrorState] = useState(true)

  const handleClickXButton = useCallback(() => {
    setErrorState(!errorState)
  }, [errorState])

  useEffect(() => {
    setErrorState(!errorState)
  }, [isVisible])

  return (
    <>
      {errorState && (
        <Container>
          <div>
            <header>
              <span>{title}</span>
              <button type='button' onClick={handleClickXButton}>
                <FiX size={25} />
              </button>
            </header>

            <p>{description}</p>
          </div>
        </Container>
      )}
    </>
  )
}

export default MessageModal
