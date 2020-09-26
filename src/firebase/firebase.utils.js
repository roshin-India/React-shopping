import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
        apiKey: "AIzaSyA5TeeyP3lamuYwIJbRq_ttrVRr_w1Kx_Q",
        authDomain: "react-shopping-e5285.firebaseapp.com",
        databaseURL: "https://react-shopping-e5285.firebaseio.com",
        projectId: "react-shopping-e5285",
        storageBucket: "react-shopping-e5285.appspot.com",
        messagingSenderId: "437917820063",
        appId: "1:437917820063:web:147df6fb2cbafcf8f16eaa",
        measurementId: "G-9ZQXT2B05W"
      };

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        }catch(err){
            console.log("errrr",err)
        }
    }
    return userRef;
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
export default firebase;
