import React, { useContext, useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, FacebookAuthProvider } from "firebase/auth";
import { app } from '../firebase';

const AuthContext = React.createContext()  

export function useAuth() {
    return useContext(AuthContext)
}


export default function AuthProvider({children}) {
    const [currentUser,setCurrentUser] = useState("")

    const auth = getAuth(app);

    const googleSignin = async() => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          setCurrentUser(user);
        }).catch((error) => {
          console.log(error)
        });
    
      }
    
      const signout = async() => {
        await signOut(auth).then(() => {
          setCurrentUser()
          console.log("Signout success");
        }).catch((error) => {
            console.log(error);
        });
      }

    const fbSignin = async() => {
        const provider = new FacebookAuthProvider();
        await signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;

            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;

            setCurrentUser(user)
        })
        .catch((error) => {
            console.log(error);
        });
    }


    const value = {
        currentUser,
        googleSignin,
        signout,
        fbSignin
    }

    

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}