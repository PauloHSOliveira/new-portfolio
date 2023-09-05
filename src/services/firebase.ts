import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)

// Check if window is defined
const isWindowDefined = typeof window !== 'undefined'
const isDevlopment = process.env.NODE_ENV === 'development'
const USE_EMULATOR = process.env.NEXT_PUBLIC_EMULATOR === 'true'
const EMULATOR_HOST = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST

const EMULATOR_FUNCTIONS_PORT = Number(
  process.env.NEXT_PUBLIC_FIREBASE_FUNCTIONS_EMULATOR_PORT
)

// Initialize analytics only if window is defined
const analytics = isWindowDefined ? getAnalytics(app) : undefined
const functions = getFunctions(app)

if (isDevlopment && USE_EMULATOR) {
  connectFunctionsEmulator(
    functions,
    EMULATOR_HOST as string,
    EMULATOR_FUNCTIONS_PORT
  )
}

export { app, analytics, functions }
