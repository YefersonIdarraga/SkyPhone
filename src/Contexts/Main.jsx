import React, { createContext, useState, useContext, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [userState, setUserState] = useState({
        currentUser: null,
        userProfile: null
    });
    const [loading, setLoading] = useState(true);
    const dataBase = getFirestore();
    const initialState = {
        currentUser: null,
        userProfile: null
    };

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, async user => {            
            if (user) {
                try {
                    const userDocRef = doc(dataBase, 'users', user.uid);
                    const userDoc = await getDoc(userDocRef);
                    
                    if (userDoc.exists()) {
                        setUserState({
                            currentUser: user,
                            userProfile: userDoc.data()
                        });
                    } else {
                        setUserState({
                            currentUser: user,
                            userProfile: null
                        });
                    }
                } catch(error) {
                    console.error("Error al obtener el documento del usuario:", error);
                }
            } else {
                setUserState(initialState);
            }

            setLoading(false);
        });

        
        return () => {
            unsubscribe();
            setUserState(initialState);
        };

    }, []);

    const value = {
        currentUser: userState.currentUser,
        userProfile: userState.userProfile,
        setUserProfile: profile => setUserState(prev => ({ ...prev, userProfile: profile }))
    };

    return (
        <AuthContext.Provider value={value}>
            {loading ? <div>Loading...</div> : children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
