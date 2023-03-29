import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../../../Firebase/Firebase.config';


export const AuthContext = createContext();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
      const [user,setUser]=useState(null)

      const createUser = (email,password) =>{
         return createUserWithEmailAndPassword(auth,email,password)
      }
 const singIn = (email,password) => {
     return  signInWithEmailAndPassword (auth,email,password)
 }
 
 
 const updateUser = (userInfo) =>{
     return updateProfile(user, userInfo)
 }
 
 const googleSingIn=()=>{
     return signInWithPopup(auth, provider)
 }
 
 
 const singOut = () => {
     return signOut(auth)
 }
 useEffect(() =>{
     const unsubcribe = onAuthStateChanged(auth,currentUser => {
         console.log('user observeing')
         setUser(currentUser)
        
     })
     return() => unsubcribe()
 },[])
 
     const authInfo ={
         createUser,
         singIn,
         singOut,
         updateUser,
         googleSingIn,
         user
 
     }
     return (
         <AuthContext.Provider value={authInfo}>
             {children}
         </AuthContext.Provider>
     );
 };


export default AuthProvider;