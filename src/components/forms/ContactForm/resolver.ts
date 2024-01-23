import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Please enter a valid email').required('Email is required'),
  message: Yup.string().required('Message is required'),
})

const resolver = yupResolver(schema)

export default resolver
