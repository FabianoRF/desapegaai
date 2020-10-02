import React, { useCallback } from 'react'
import { FiPower } from 'react-icons/fi'

import { Container } from './styles'
import { useAuth } from '../../hooks/authHook'

const Header: React.FC = () => {
  const { signOut } = useAuth()

  const handleClickSignOut = useCallback(() => {
    signOut()
  }, [signOut])

  return (
    <Container>
      <h1>Desapega aí</h1>
      <button type='button' onClick={handleClickSignOut}>
        <FiPower size={40} />
      </button>
    </Container>
  )
}

export default Header
