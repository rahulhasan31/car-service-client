import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../FireBase/FireBase.Confing';

export const AuthContext= createContext()
const auth= getAuth(app)



const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null)
    const [loading, setLoading]= useState(true)

    const createUser=(email, password)=>{
        setLoading(true)
      return createUserWithEmailAndPassword(auth, email,password)
    }
          
    const loginUser= (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        localStorage.removeItem('token')
        setLoading(true)
     return   signOut(auth)
     .then(()=>{

     })
     .catch(e=>{console.log(e);})
    }
   
    useEffect(()=>{
    const unsubscribe= onAuthStateChanged( auth, currentUser=>{
            console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>unsubscribe()
    },[])
    const authInfo={user, loading, createUser, loginUser, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;