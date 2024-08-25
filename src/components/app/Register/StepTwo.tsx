// stepTwo.tsx
import { FC } from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import LoadingButton from '@/components/app/Register/LoadingButton'
import useFormStore from '@/store/useFormStore'

interface StepTwoProps {
  onPrevious: () => void;
  onNext: () => void;
}

const StepTwo: FC<StepTwoProps> = ({ onPrevious, onNext }) => {
  const { stepTwoData, setStepTwoData } = useFormStore()

  const handleNextClick = () => {
    onNext()
  }

  return (
    <div className='space-y-4'>
      <div>
        <Label htmlFor='user_institucional'>Usuario Institucional</Label>
        <Input
          id='user_institucional'
          type='text'
          value={stepTwoData.userInstitucional}
          onChange={(e) => setStepTwoData({
            userInstitucional: e.target.value,
            dni: ''
          })}
          placeholder='Usuario Institucional'
          required
        />
      </div>
      <div>
        <Label htmlFor='dni'>Número de Documento</Label>
        <Input
          id='dni'
          type='text'
          value={stepTwoData.dni}
          onChange={(e) => setStepTwoData({
            dni: e.target.value,
            userInstitucional: ''
          })}
          placeholder='Número de Documento'
          required
        />
      </div>
      <div className='flex justify-between'>
        <LoadingButton onClick={onPrevious} label='Anterior' variant='outline' />
        <LoadingButton onClick={handleNextClick} label='Siguiente' />
      </div>
    </div>
  )
}

export default StepTwo
