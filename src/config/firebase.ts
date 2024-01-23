import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions'

import { getEnvs } from './getEnvs'

const firebaseConfig = {
  apiKey: getEnvs('FIREBASE_API_KEY'),
  authDomain: getEnvs('FIREBASE_AUTH_DOMAIN'),
  projectId: getEnvs('FIREBASE_PROJECT_ID'),
  storageBucket: getEnvs('FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: getEnvs('FIREBASE_MESSAGING_SENDER_ID'),
  appId: getEnvs('FIREBASE_APP_ID'),
  measurementId: getEnvs('FIREBASE_MEASUREMENT_ID'),
}

const app = initializeApp(firebaseConfig)

// Check if window is defined
const isWindowDefined = typeof window !== 'undefined'
const isDevlopment = process.env.NODE_ENV === 'development'
const USE_EMULATOR = process.env.NEXT_PUBLIC_EMULATOR === 'true'
const EMULATOR_HOST = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST

const EMULATOR_FUNCTIONS_PORT = Number(process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_EMULATOR_PORT)

// Initialize analytics only if window is defined
const analytics = isWindowDefined ? getAnalytics(app) : undefined
const functions = getFunctions(app)
const firestore = getFirestore(app)

if (isDevlopment && USE_EMULATOR) {
  connectFunctionsEmulator(functions, EMULATOR_HOST as string, EMULATOR_FUNCTIONS_PORT)
}

export { app, analytics, functions, firestore }
