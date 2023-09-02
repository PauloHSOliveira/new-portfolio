import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { RingLoader } from 'react-spinners'
import { useState } from 'react'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Please enter a valid email')
    .required('Email is required'),
  message: Yup.string().required('Message is required'),
})

const resolver = yupResolver(schema)

// million-ignore
const ContactForm = () => {
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

  const onSubmit = async (data: any) => {
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
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 text-black"
    >
      <div className="flex flex-col">
        <label htmlFor="name" className="font-semibold text-sm mb-2">
          Name
        </label>
        <input
          id="name"
          type="text"
          className={`w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 ${
            errors.name ? 'border-red-500' : ''
          }`}
          {...register('name', { required: true })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-semibold text-sm mb-2">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={`w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 ${
            errors.email ? 'border-red-500' : ''
          }`}
          {...register('email', { required: true })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="font-semibold text-sm mb-2">
          Message
        </label>
        <textarea
          id="message"
          className={`w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 ${
            errors.message ? 'border-red-500' : ''
          }`}
          {...register('message', { required: true })}
        />
      </div>
      <button
        type="submit"
        className="btn-gray-900 btn border-none p-0 px-4 rounded-lg bg-gray-100 shadow-lg mt-6"
        disabled={isLoading}
      >
        {isLoading ? <RingLoader size={24} color="#000000" /> : 'Send Message'}
      </button>
    </form>
  )
}

export { ContactForm }
