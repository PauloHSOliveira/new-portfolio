import { functions } from './firebase'
import { httpsCallable, HttpsCallableResult } from 'firebase/functions'

export const sendContactEmail = async (data: any) => {
  try {
    const sendEmailFunction = httpsCallable<any, HttpsCallableResult<any>>(
      functions,
      'sendContact'
    )
    await sendEmailFunction(data)
  } catch (error) {
    throw new Error(error as any)
  }
}
