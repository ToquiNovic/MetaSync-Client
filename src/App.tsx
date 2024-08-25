// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '@/layouts/Layout'
import HomePage from '@/pages/HomePage'
import Dashboard from '@/pages/Dashboard'
import LoginPage from '@/pages/LoginPage'
import RegisterPage from '@/pages/RegisterPage'
import ErrorPage from '@/pages/ErrorPage'
import { ThemeProvider } from '@/components/theme-provider'
import { TailwindIndicator } from '@/components/tailwind-indicator'
// import AuthContext from '@/utils/AuthContext'
import DashboardLayout from '@/layouts/DashboardLayout'

const homeRoutes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      }
    ]
  }
]

const dashboardRoutes = [
  {
    path: '/dashboard',
    element: (
    // <AuthContext>
    // <DashboardLayout />
    // </AuthContext>
      <DashboardLayout />

    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Dashboard />
      }
    ]
  }
]

const combinedRoutes = [...homeRoutes, ...dashboardRoutes]

const router = createBrowserRouter(combinedRoutes)

function App () {
  return (
    <div className='min-h-screen bg-background font-sans antialiased'>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
        <div className='relative flex min-h-screen flex-col'>
          <RouterProvider router={router} />
        </div>
        <TailwindIndicator />
      </ThemeProvider>
    </div>
  )
}

export default App
