// formRegister.tsx
import { useState, FC } from 'react'
import { Progress } from '@/components/ui/progress'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import StepOne from '@/components/app/Register/StepOne'
import StepTwo from '@/components/app/Register/StepTwo'
import StepThree from '@/components/app/Register/StepThree'
import StepFour from '@/components/app/Register/StepFour'

const Component: FC = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => setCurrentStep(currentStep + 1)
  const handlePrevious = () => setCurrentStep(currentStep - 1)

  return (
    <div className='w-full max-w-2xl mx-auto'>
      <Card className='w-full max-w-md'>
        <CardHeader>
          <CardTitle className='text-2xl font-bold'>Registrarse</CardTitle>
          <CardDescription>Ingresa tus credenciales para crear una cuenta</CardDescription>
          <Separator className='my-8' />
          <Progress value={(currentStep / 4) * 100} className='mb-6' />
          <div className='flex justify-center mb-6'>
            <Label className='px-4 py-2 bg-primary text-primary-foreground rounded-full'>Paso {currentStep} de 4</Label>
          </div>
        </CardHeader>
        <CardContent className='space-y-4'>
          {currentStep === 1 && <StepOne onNext={handleNext} />}
          {currentStep === 2 && <StepTwo onPrevious={handlePrevious} onNext={handleNext} />}
          {currentStep === 3 && <StepThree onPrevious={handlePrevious} onNext={handleNext} />}
          {currentStep === 4 && <StepFour onPrevious={handlePrevious} />}
        </CardContent>
      </Card>
    </div>

  )
}

export default Component
