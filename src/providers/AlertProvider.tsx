import React, {
  createContext,
  useContext,
  useCallback,
  ReactNode,
  useState,
  useMemo,
} from 'react'

type Alert = {
  message: string
}

enum AlertTypes {
  DEFAULT = 'default',
  INFO = 'info',
  WARN = 'warn',
  SUCCESS = 'success',
  ERROR = 'error',
}

type UseAlertType = Alert & {
  type?: AlertTypes
  show?: boolean
}

const classes = {
  default: 'alert',
  info: 'alert alert-info',
  warn: 'alert alert-warning',
  success: 'alert alert-success',
  error: 'alert alert-error',
}

const icons = {
  default: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="stroke-info shrink-0 w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  ),

  info: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className="stroke-current shrink-0 w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  ),

  warn: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  ),

  success: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),

  error: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
}

const Alert = ({ message, type = AlertTypes.DEFAULT, show }: UseAlertType) => {
  const slideClass = show ? 'animate-slide-in' : 'animate-slide-out'

  return (
    <div
      className={`${classes[type]} fixed top-10 lg:max-w-xs z-50 transform ${slideClass}`}
    >
      {icons[type]()}
      <span>{message}</span>
    </div>
  )
}

type AlertContextType = {
  showAlert: {
    default: (message: string) => void
    info: (message: string) => void
    warn: (message: string) => void
    success: (message: string) => void
    error: (message: string) => void
  }
}

const AlertContext = createContext<AlertContextType | undefined>(undefined)

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState('')
  const [type, setType] = useState(AlertTypes.DEFAULT)

  const renderAlert = useCallback(
    (
      message: string,
      alertType: AlertTypes = AlertTypes.DEFAULT,
      time = 2000
    ) => {
      setMessage(message)
      setType(alertType)

      setShow(true)

      setTimeout(() => {
        setShow(false)
      }, time)
    },
    []
  )

  const showAlert = useMemo(
    () => ({
      default: (message: string) => renderAlert(message),
      info: (message: string) => renderAlert(message, AlertTypes.INFO),
      warn: (message: string) => renderAlert(message, AlertTypes.WARN),
      success: (message: string) => renderAlert(message, AlertTypes.SUCCESS),
      error: (message: string) => renderAlert(message, AlertTypes.ERROR),
    }),
    []
  )

  return (
    <AlertContext.Provider value={{ showAlert }}>
      <div>
        {children}
        <Alert type={type} message={message} show={show} />
      </div>
    </AlertContext.Provider>
  )
}

export const useAlert = () => {
  const context = useContext(AlertContext)
  if (!context) {
    throw new Error('useAlert must be used within an AlertProvider')
  }
  return context
}
