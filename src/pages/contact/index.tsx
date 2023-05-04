import { useForm } from 'react-hook-form'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
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
          {/* {errors.name && (
            <Tooltip position="right-end" title="Name is required">
              <span className="text-red-500 mt-2 text-sm">
                Name is required
              </span>
            </Tooltip>
          )} */}
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
          {/* {errors.email && (
            <Tooltip
              title="Email is required"
              position="right"
              arrow={true}
              distance={10}
            >
              <span className="text-red-500 mt-2 text-sm">
                Email is required
              </span>
            </Tooltip>
          )} */}
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
          {/* {errors.message && (
            <Tooltip
              title="Message is required"
              position="right"
              arrow={true}
              distance={10}
            >
              <span className="text-red-500 mt-2 text-sm">
                Message is required
              </span>
            </Tooltip>
          )} */}
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
