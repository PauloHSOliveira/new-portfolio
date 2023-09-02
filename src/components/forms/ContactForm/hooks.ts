import { useCallback, useState } from 'react'
import resolver from './resolver'
import { useForm } from 'react-hook-form'

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState(false)

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
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const { message } = await response.json()

      alert(message)
    } catch (error) {
      alert(error)
    } finally {
      setIsLoading(false)
    }
  }, [])
  return { isLoading, onSubmit, handleSubmit, register, errors }
}

export default useContactForm
