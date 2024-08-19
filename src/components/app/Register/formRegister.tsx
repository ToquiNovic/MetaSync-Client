import { SVGProps, useState } from 'react'
import { Progress } from '@/components/ui/progress'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { JSX } from 'react/jsx-runtime'

export default function Component () {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const handleNext = () => {
    setCurrentStep(currentStep + 1)
  }
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1)
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
  }
  const handleInputChange = (e: { target: { id: any; value: any } }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }
  return (
    <div className='w-full max-w-2xl mx-auto'>
      <Progress value={(currentStep / 4) * 100} className='mb-6' />
      <div className='flex justify-center mb-6'>
        <div className='px-4 py-2 bg-primary text-primary-foreground rounded-full'>Step {currentStep} of 4</div>
      </div>
      <form onSubmit={handleSubmit}>
        {currentStep === 1 && (
          <div className='space-y-4'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input id='name' value={formData.name} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className='flex justify-end'>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        {currentStep === 2 && (
          <div className='space-y-4'>
            <div>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' value={formData.password} onChange={handleInputChange} required />
            </div>
            <div>
              <Label htmlFor='confirmPassword'>Confirm Password</Label>
              <Input
                id='confirmPassword'
                type='password'
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className='flex justify-between'>
              <Button variant='outline' onClick={handlePrevious}>
                Previous
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        {currentStep === 3 && (
          <div className='space-y-4'>
            <div className='flex justify-between'>
              <Button variant='outline' onClick={handlePrevious}>
                Previous
              </Button>
              <Button onClick={handleNext}>Next</Button>
            </div>
          </div>
        )}
        {currentStep === 4 && (
          <div className='space-y-4'>
            <div className='text-center'>
              <CheckIcon className='mx-auto h-8 w-8 text-green-500' />
              <h2 className='text-2xl font-bold'>Registration Complete!</h2>
              <p className='text-muted-foreground'>Thank you for registering with us.</p>
            </div>
            <div className='flex justify-end'>
              <Button type='submit'>Complete Registration</Button>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

function CheckIcon (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M20 6 9 17l-5-5' />
    </svg>
  )
}
