import { FC } from 'react'
import { Progress } from '@/components/ui/progress'
import { Label } from '@/components/ui/label'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import StepOne from '@/components/app/Register/StepOne'
import StepTwo from '@/components/app/Register/StepTwo'
import StepThree from '@/components/app/Register/StepThree'
import StepFour from '@/components/app/Register/StepFour'
import useFormStore from '@/store/useFormStore'

const steps = [
  { component: StepOne },
  { component: StepTwo },
  { component: StepThree },
  { component: StepFour, hasFinish: true }
]

const FormRegister: FC = () => {
  const { currentStep, nextStep, prevStep, resetForm } = useFormStore()
  const StepComponent = steps[currentStep].component
  const stepProps = steps[currentStep].hasFinish
    ? { onPrevious: prevStep, onNext: nextStep, onFinish: resetForm }
    : { onPrevious: prevStep, onNext: nextStep }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='w-full max-w-md mx-auto'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl font-bold'>Registrarse</CardTitle>
            <CardDescription>Ingresa tus credenciales para crear una cuenta</CardDescription>
            <Separator className='my-8' />
            <Progress value={((currentStep + 1) / steps.length) * 100} className='mb-6' />
            <div className='flex justify-center mb-6 py-3'>
              <Label className='px-4 py-2 bg-primary text-primary-foreground rounded-full'>Paso {currentStep + 1} de {steps.length}</Label>
            </div>
          </CardHeader>
          <CardContent>
            <StepComponent {...stepProps} />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default FormRegister
