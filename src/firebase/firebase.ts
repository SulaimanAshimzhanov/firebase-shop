import { initializeApp } from "firebase/app";
import { IFirebaseConfig } from "../types/types";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig: IFirebaseConfig = {
  apiKey: "AIzaSyB63gAEn_b-mTurx4eFNq_jefzAUgZXZzg",
  authDomain: "fir-shop-bd92e.firebaseapp.com",
  projectId: "fir-shop-bd92e",
  storageBucket: "fir-shop-bd92e.appspot.com",
  messagingSenderId: "162676361875",
  appId: "1:162676361875:web:3424f050f8ae1c43511b66"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const JoinWithGoogleProvider = new GoogleAuthProvider();

export {
    auth,
    JoinWithGoogleProvider
};

