import { FC, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Loader } from 'lucide-react'
import LoadingButton from '@/components/app/Register/LoadingButton'
import { useNavigate } from 'react-router-dom'
import useFormStore from '@/store/useFormStore'

interface StepFourProps {
  onPrevious: () => void;
}

const StepFour: FC<StepFourProps> = ({ onPrevious }) => {
  const [showCheck, setShowCheck] = useState(false)
  const [showText, setShowText] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const resetForm = useFormStore((state) => state.resetForm)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCheck(true)
      setTimeout(() => setShowText(true), 300)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      resetForm()
      navigate('/login')
    }, 2000)
  }

  return (
    <div className='space-y-4'>
      <div className='flex flex-col items-center text-center'>
        {showCheck
          ? (
            <>
              <Check className='h-12 w-12 text-green-500 transition-transform duration-500 transform scale-100' />
              <h2 className={`text-2xl font-bold mt-4 transition-opacity transform duration-700 ${showText ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                ¡Registro Completado!
              </h2>
              <p className={`transition-opacity transform duration-700 ${showText ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                Gracias por registrarte con nosotros.
              </p>
            </>
            )
          : (
            <Loader className='h-12 w-12 text-blue-500 animate-spin' />
            )}
      </div>
      <div className='flex justify-between w-full mt-6'>
        <Button variant='outline' onClick={onPrevious} disabled={isSubmitting}>
          Anterior
        </Button>
        <LoadingButton
          onClick={handleSubmit}
          label='Finalizar'
          disabled={!showCheck || isSubmitting}
        />
      </div>
    </div>
  )
}

export default StepFour
