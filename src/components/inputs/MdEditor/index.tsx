import { MdEditor } from 'md-editor-rt'
import { Control, useController } from 'react-hook-form'

interface EditorProps {
  label?: string
  containError: boolean
  control: Control<any>
  name: string
  isRequired?: boolean
  errorMessage?: string
}

const Editor = ({ label, containError, control, name, errorMessage }: EditorProps) => {
  const {
    field: { value, onChange },
  } = useController({
    control,
    name,
  })

  return (
    <div className='flex flex-col'>
      {label ? (
        <label
          htmlFor={name}
          className={`font-semibold text-sm mb-2 ${containError ? 'text-red-500' : 'text-gray-600'}`}
        >
          {label}
        </label>
      ) : null}
      <MdEditor
        modelValue={value}
        autoDetectCode
        language='en-US'
        onChange={onChange}
        className={`w-full py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 ${
          containError ? 'border-red-500' : ''
        }`}
      />

      {containError && errorMessage ? <span className='text-red-500'>{errorMessage}</span> : null}
    </div>
  )
}

export default Editor
