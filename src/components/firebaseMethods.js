import {createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut} from "firebase/auth";
import {auth} from './firebaseConfig'

export const register = async(email, password)=>{
    try {
        await createUserWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
    }
}

export const login = async(email, password)=>{
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
    }
}
export const reset = async(email)=>{
    try {
        await sendPasswordResetEmail(auth,email)
    } catch (error) {
        console.log(error);
    }
}
export const logout = async()=>{
    try {
        await signOut(auth)
    } catch (error) {
        console.log(error);
    }
}

