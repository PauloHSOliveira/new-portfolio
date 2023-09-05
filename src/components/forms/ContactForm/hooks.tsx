import { useCallback, useState } from 'react'
import resolver from './resolver'
import { useForm } from 'react-hook-form'
import { useAlert } from '@/providers/AlertProvider'
import { sendContactEmail } from '@/services/sendContactEmail'

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

  const { showAlert } = useAlert()

  const {
    register,
    handleSubmit,
    formState: { errors },
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
      showAlert.success('Message sent successfully')
    } catch (error) {
      showAlert.error('Error when send email contact')
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { isLoading, onSubmit, handleSubmit, register, errors }
}

export default useContactForm
