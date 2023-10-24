import { auth } from "../../firebase/dataBase";
import { signInWithEmailAndPassword } from 'firebase/auth';

const LoginWithEmail = async (username, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, username, password);
        console.log("autenticacion correcta", username);
        return {success: true, uid: userCredential.user.uid};
    } catch (error){
        console.error("Error de autenticación", error);
        return {success: false, error: error.message};
    }
}

export {LoginWithEmail};