import { ReactNode, FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import useAuth from '@/hooks/useAuth'

interface RequireAuthProps {
    children?: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }) => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated
    ? (
      <>
        {children}
        <Outlet />
      </>
      )
    : (
      <Navigate to='/login' replace />
      )
}

export default RequireAuth
