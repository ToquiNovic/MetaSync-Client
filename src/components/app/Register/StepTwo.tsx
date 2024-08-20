// StepTwo.tsx
import { FC, useState, useEffect } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

interface StepTwoProps {
  onPrevious: () => void;
  onNext: () => void;
}

const StepTwo: FC<StepTwoProps> = ({ onPrevious, onNext }) => {
  const [isLoading, setIsLoading] = useState(true)

  const loadData = () => {
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='space-y-4'>
      {isLoading
        ? (
          <>
            <Skeleton className='h-4 w-full my-2' />
            <Skeleton className='h-4 w-full my-2' />
            <Skeleton className='h-8 w-32 my-2' />
          </>
          )
        : (
          <CardContent className='space-y-4'>
            <div>
              <Label htmlFor='user_charia'>Usuario Charia</Label>
              <Input id='user_charia' type='text' placeholder='Usuario Charia' required />
            </div>
            <div>
              <Label htmlFor='dni'>Número de Documento</Label>
              <Input id='dni' type='text' placeholder='Número de Documento' required />
            </div>
            <div className='flex justify-between'>
              <Button variant='outline' onClick={onPrevious}>Anterior</Button>
              <Button onClick={onNext}>Siguiente</Button>
            </div>
          </CardContent>
          )}
    </div>
  )
}

export default StepTwo
