import FormRegister from '@/components/app/Register/formRegister'

export default function RegisterPage () {
  return (
    <div className='flex items-center justify-center min-h-screen w-full px-4 gap-6 pb-8 pt-200 md:py-8'>
      <div className='w-full max-w-md'>
        <FormRegister />
      </div>
    </div>
  )
}
