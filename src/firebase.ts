import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';

const config = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
export const firebaseReady = Object.values(config).every(Boolean);
// Placeholder config permits the website to show setup guidance before credentials are added.
const app = initializeApp(firebaseReady ? config : { apiKey: 'missing', authDomain: 'missing.invalid', projectId: 'missing', appId: 'missing' });
export const auth = getAuth(app);
// Long polling can help when a browser or network interrupts Firestore streaming.
export const db = initializeFirestore(app, { experimentalForceLongPolling: true });
