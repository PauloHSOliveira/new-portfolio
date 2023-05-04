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

function Contact() {
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
    <div className="max-w-4xl mx-auto my-8 px-4">
      <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
      <p className="text-gray-600 mb-8">
        Do you fancy saying hi to me or you want to get started with your
        project and you need my help? Feel free to contact me.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-semibold mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className={`py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 ${
              errors.name ? 'border-red-500' : ''
            }`}
            {...register('name', { required: true })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className={`py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 ${
              errors.email ? 'border-red-500' : ''
            }`}
            {...register('email', { required: true })}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className={`py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 ${
              errors.message ? 'border-red-500' : ''
            }`}
            {...register('message', { required: true })}
          />
        </div>
        <button
          type="submit"
          className={`btn ${
            isLoading ? 'btn-disabled' : 'btn-gray-900'
          } float-right w-52 h-14`}
          disabled={isLoading}
        >
          {isLoading ? (
            <RingLoader size={24} color="#000000" />
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  )
}

export default Contact
