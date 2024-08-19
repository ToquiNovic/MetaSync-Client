import { useState } from 'react'

interface User {
  id: string;
  email: string;
  username: string;
}

const useAuth = (): {
  isAuthenticated: boolean;
  user?: User;
  login: (email: string, password: string) => void;
  logout: () => void;
} => {
  const [user, setUser] = useState<User | undefined>(undefined)

  const isAuthenticated = !!user

  const login = (email: string, password: string) => {
    if (email === 'user@example.com' && password === 'password123') { // Simulación de credenciales válidas
      const fetchedUser = { id: '1', email, username: 'exampleUser' }
      setUser(fetchedUser)
    } else {
      console.error('Autenticación fallida: Email o contraseña incorrectos')
    }
  }

  const logout = () => {
    setUser(undefined)
  }

  return { isAuthenticated, user, login, logout }
}

export default useAuth
