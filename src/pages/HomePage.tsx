import { buttonVariants } from '@/components/ui/button'
import useDocumentTitle from '@/utils/useDocumentTitle'
import { Link } from 'react-router-dom'

export default function HomePage () {
  useDocumentTitle('Inicio')
  return (
    <section className='container grid items-center gap-6 pb-8 pt-6 md:py-10'>
      <div className='flex max-w-[980px] flex-col items-start gap-2'>
        <h1 className='text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl'>
          Gestiona las conexiones <br className='hidden sm:inline' />
          de tus sensores en el UDLAVerso.
        </h1>
        <p className='max-w-[700px] text-lg text-muted-foreground'>
          En esta web podrás ver las conexiones de tus sensores y gestionarlas.
        </p>
      </div>
      <div className='flex gap-4'>
        <Link
          to='/login'
          className={buttonVariants()}
        >
          Iniciar Sesión
        </Link>
        <Link
          to='/register'
          className={buttonVariants({ variant: 'secondary' })}
        >
          Registrarse
        </Link>
      </div>
    </section>
  )
}
