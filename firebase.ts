import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAL0x2k1s_5EN1_cfDF6NKJio-M7ztm8tc",
  authDomain: "notion-clone-281af.firebaseapp.com",
  projectId: "notion-clone-281af",
  storageBucket: "notion-clone-281af.appspot.com",
  messagingSenderId: "79194755580",
  appId: "1:79194755580:web:4aa2828c398a993810a279",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
