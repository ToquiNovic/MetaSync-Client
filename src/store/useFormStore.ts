import { create } from 'zustand'
import { StepOneData, StepTwoData, StepThreeData, StepFourData } from '@/types/formdata'

interface FormState {
  stepOneData: StepOneData
  stepTwoData: StepTwoData
  stepThreeData: StepThreeData
  stepFourData: StepFourData
  setStepOneData: (data: StepOneData) => void
  setStepTwoData: (data: StepTwoData) => void
  setStepThreeData: (data: StepThreeData) => void
  setStepFourData: (data: StepFourData) => void
}

const useFormStore = create<FormState>((set) => ({
  stepOneData: { name: '', email: '' },
  stepTwoData: { address: '', city: '' },
  stepThreeData: { cardNumber: '', expirationDate: '' },
  stepFourData: { termsAccepted: false },
  setStepOneData: (data) => set({ stepOneData: data }),
  setStepTwoData: (data) => set({ stepTwoData: data }),
  setStepThreeData: (data) => set({ stepThreeData: data }),
  setStepFourData: (data) => set({ stepFourData: data })
}))

export default useFormStore
