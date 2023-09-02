import { RingLoader } from 'react-spinners'
import useContactForm from './hooks'
import { memo } from 'react'
import InputText from '@/components/inputs/InputText/InputText'

const ContactForm = memo(() => {
  const { handleSubmit, onSubmit, errors, register, isLoading } =
    useContactForm()

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8 text-black"
    >
      <InputText
        label="Name"
        register={register}
        name="name"
        containError={!!errors.name}
        isRequired
        errorMessage={errors.name?.message}
      />

      <InputText
        label="Email"
        register={register}
        name="email"
        containError={!!errors.email}
        isRequired
        errorMessage={errors.email?.message}
      />

      <InputText
        label="Message"
        register={register}
        name="message"
        containError={!!errors.message}
        isRequired
        errorMessage={errors.message?.message}
      />
      <button
        type="submit"
        className="btn-gray-900 btn border-none p-0 px-4 rounded-lg bg-gray-100 shadow-lg mt-6"
        disabled={isLoading}
      >
        {isLoading ? <RingLoader size={24} color="#000000" /> : 'Send Message'}
      </button>
    </form>
  )
})

export { ContactForm }
