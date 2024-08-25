// useFormStore.ts
import { create } from 'zustand'

interface FormState {
  currentStep: number
  stepOneData: { email: string; password: string }
  stepTwoData: { userInstitucional: string; dni: string }
  stepThreeData: { inviteCode: string }
  stepFourData: { termsAccepted: boolean }
  setStepOneData: (data: { email: string; password: string }) => void
  setStepTwoData: (data: { userInstitucional: string; dni: string }) => void
  setStepThreeData: (data: { inviteCode: string }) => void
  setStepFourData: (data: { termsAccepted: boolean }) => void
  nextStep: () => void
  prevStep: () => void
  resetForm: () => void
}

const useFormStore = create<FormState>((set) => ({
  currentStep: parseInt(localStorage.getItem('currentStep') || '0'),
  stepOneData: JSON.parse(localStorage.getItem('stepOneData') || '{"email": "", "password": ""}'),
  stepTwoData: JSON.parse(localStorage.getItem('stepTwoData') || '{"userInstitucional": "", "dni": ""}'),
  stepThreeData: JSON.parse(localStorage.getItem('stepThreeData') || '{"inviteCode": ""}'),
  stepFourData: JSON.parse(localStorage.getItem('stepFourData') || '{"termsAccepted": false}'),

  setStepOneData: (data) => {
    localStorage.setItem('stepOneData', JSON.stringify(data))
    set({ stepOneData: data })
  },

  setStepTwoData: (data) => {
    localStorage.setItem('stepTwoData', JSON.stringify(data))
    set({ stepTwoData: data })
  },

  setStepThreeData: (data) => {
    localStorage.setItem('stepThreeData', JSON.stringify(data))
    set({ stepThreeData: data })
  },

  setStepFourData: (data) => {
    localStorage.setItem('stepFourData', JSON.stringify(data))
    set({ stepFourData: data })
  },

  nextStep: () => {
    set((state) => {
      const nextStep = state.currentStep + 1
      localStorage.setItem('currentStep', nextStep.toString())
      return { currentStep: nextStep }
    })
  },

  prevStep: () => {
    set((state) => {
      const prevStep = state.currentStep - 1
      localStorage.setItem('currentStep', prevStep.toString())
      return { currentStep: prevStep }
    })
  },

  resetForm: () => {
    localStorage.removeItem('currentStep')
    localStorage.removeItem('stepOneData')
    localStorage.removeItem('stepTwoData')
    localStorage.removeItem('stepThreeData')
    localStorage.removeItem('stepFourData')
    set({
      currentStep: 0,
      stepOneData: { email: '', password: '' },
      stepTwoData: { userInstitucional: '', dni: '' },
      stepThreeData: { inviteCode: '' },
      stepFourData: { termsAccepted: false }
    })
  }
}))

export default useFormStore
