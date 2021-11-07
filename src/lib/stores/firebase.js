// Svelte stores
import { writable, readable } from 'svelte/store';

// Firebase
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, getDocs, getDoc } from 'firebase/firestore';

const firebaseApp = initializeApp({
	// Add your own
});

// You can pass in the firebaseApp optionally as a parameter
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// Info
export let user = writable(null);

// Detect auth state
onAuthStateChanged(auth, (user) => {
	if (user !== null) {
		console.log('logged in!');
	} else {
		console.log('No user');
	}
});

// Sign up with email and pasword
export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user
        return user
    } catch (error) {
        const errorCode = error.code;
		const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage);
    }
}

// Sign in with email and password
export const signIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        console.log('User: ' + userCredential.user)
        user.set(userCredential.user)
        return user
    } catch (error) {
        const errorCode = error.code;
		const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage);
    }
}

// Sign out
export const signOutUser = async () => {
    try {
        await signOut(auth)
    } catch (error) {
        const errorCode = error.code;
		const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage);
    }
}