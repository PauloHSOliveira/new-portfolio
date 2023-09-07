import { functions } from './firebase';
import { httpsCallable, HttpsCallableResult } from 'firebase/functions';

export const sendContactEmail = async (data: any) => {
  try {
    const sendEmailFunction = httpsCallable<any, HttpsCallableResult<any>>(
      functions,
      'sendContact'
    );

    // Call the function and await its response
    const result = await sendEmailFunction(data);

    // Handle the result as needed (e.g., check result.data, status, etc.)
    console.log('Function Response:', result);

    return result; // You can return the result or use it as needed
  } catch (error) {
    throw new Error(error as any);
  }
};
