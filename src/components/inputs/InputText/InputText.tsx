import { UseFormRegister } from 'react-hook-form'

interface InputTextProps {
  label?: string
  containError: boolean
  register: UseFormRegister<any>
  name: string
  isRequired?: boolean
  errorMessage?: string
}

// million-ignore
const InputText = ({
  label,
  containError,
  register,
  name,
  isRequired,
  errorMessage,
}: InputTextProps) => {
  return (
    <div className="flex flex-col">
      {label ? (
        <label
          htmlFor={name}
          className={`font-semibold text-sm mb-2 ${
            containError ? 'text-red-500' : ''
          }`}
        >
          {label}
        </label>
      ) : null}
      <input
        id={name}
        type="text"
        className={`w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 ${
          containError ? 'border-red-500' : ''
        }`}
        {...register(name, { required: isRequired })}
      />

      {containError && errorMessage ? (
        <span className="text-red-500">{errorMessage}</span>
      ) : null}
    </div>
  )
}

export default InputText
