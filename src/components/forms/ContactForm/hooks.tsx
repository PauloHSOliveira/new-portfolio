import { useCallback, useState } from 'react'

import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { sendContactEmail } from '@/services/sendContactEmail'

import resolver from './resolver'

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver,
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  const onSubmit = useCallback(async (data: any) => {
    setIsLoading(true)
    try {
      await sendContactEmail(data)
      toast.success('Contact message sent successfully')
      reset()
    } catch (error) {
      toast.error('Error on send contact message')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { isLoading, onSubmit, handleSubmit, register, errors }
}

export default useContactForm
