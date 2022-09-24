import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; 


const firebaseConfig = {
  apiKey: "AIzaSyBGUBeBz7u5eOwikCq2ZLnaRjLXa02VTm0",
  authDomain: "unigig-6b644.firebaseapp.com",
  projectId: "unigig-6b644",
  storageBucket: "unigig-6b644.appspot.com",
  messagingSenderId: "424600528892",
  appId: "1:424600528892:web:7f8603b68358ab5cf43479"  
}; 

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);  

export const database = getDatabase(app);  

  
