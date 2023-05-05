export const isDev = process.env.NODE_ENV === 'development'

export const getCanonical = () => {
  const canonical =
    typeof window === 'undefined'
      ? ''
      : isDev
      ? window.location.origin
      : 'https://www.pholiveira.dev/'
  return canonical
}
