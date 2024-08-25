// stepThree.tsx
import { FC } from 'react'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Users, Key, ArrowRight } from 'lucide-react'
import LoadingButton from '@/components/app/Register/LoadingButton'
import useFormStore from '@/store/useFormStore'
import { Button } from '@/components/ui/button'

interface StepThreeProps {
  onPrevious: () => void;
  onNext: () => void;
}

const StepThree: FC<StepThreeProps> = ({ onPrevious, onNext }) => {
  const { stepThreeData, setStepThreeData } = useFormStore()

  const handleNextClick = () => {
    onNext()
  }

  return (
    <div className='w-full max-w-md mx-auto space-y-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <Card className='flex flex-col items-center justify-between p-6 h-64'>
          <Users className='h-12 w-12 text-red-500' />
          <h3 className='text-lg font-semibold text-center'>Crear un equipo</h3>
          <LoadingButton onClick={() => console.log('Crear equipo')} label='Crear un equipo' variant='destructive' />
        </Card>
        <Card className='flex flex-col items-center justify-between p-6 h-64'>
          <Key className='h-12 w-12 text-red-500' />
          <div className='space-y-2 text-center w-full'>
            <h3 className='text-lg font-semibold'>Unirse a un equipo con un código</h3>
            <div className='relative w-full'>
              <Input
                placeholder='Enter code'
                className='w-full pr-12'
                value={stepThreeData.inviteCode}
                onChange={(e) => setStepThreeData({
                  inviteCode: e.target.value
                })}
              />
              <Button
                className='absolute inset-y-0 right-0 px-3'
                variant='ghost'
              >
                <ArrowRight className='h-5 w-5 text-red-500' />
              </Button>
            </div>
          </div>
        </Card>
      </div>
      <div className='flex justify-between w-full max-w-lg mt-6'>
        <LoadingButton onClick={onPrevious} label='Anterior' variant='outline' />
        <LoadingButton onClick={handleNextClick} label='Siguiente' />
      </div>
    </div>
  )
}

export default StepThree
