import React, { createContext, useCallback, useState, useContext } from 'react'

import { api } from '../services/api'

interface AuthState {
  token: string
  user: object
}

interface Credentials {
  email: string
  password: string
}

interface AuthContextData {
  user: object
  token: string
  signIn(credentials: Credentials): Promise<void>
  signOut(): void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@Desapegaai:token')
    const user = localStorage.getItem('@Desapegaai:user')

    if (token && user) {
      return { token, user: JSON.parse(user) }
    }
    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sign-in', {
      email,
      password
    })

    const { token, user } = response.data

    localStorage.setItem('@Desapegaai:token', token)
    localStorage.setItem('@Desapegaai:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@Desapegaai:token')
    localStorage.removeItem('@Desapegaai:user')

    setData({} as AuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, token: data.token, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}

export { AuthProvider, useAuth }
