/**
 * Author:Roshin
 */
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
/**
 * Key to access firebase
 */
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
/**
 * Authentication setup
 */
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
/**
 * Add shop data to firestore
 * @param {*} collectionKey 
 * @param {*} objectsToAdd 
 */
export const addCollectionAndDocuments = async (
    collectionKey,
    objectsToAdd
)=>{
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch();
    objectsToAdd.forEach(obj=>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef , obj)
    });
    return await batch.commit()
}
/**
 * Get collection data from firestore
 * @param {*} collections 
 */
export const convertCollectionsSnapshotToMap = (collections)=>{
    const transformedCollection = collections.docs.map(doc=>{
        const {title,items} = doc.data();
        return {
            routName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })
    return transformedCollection.reduce((acc,collection)=>{
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    },{})
}

firebase.initializeApp(config);
export const getCurrentUser = ()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe =auth.onAuthStateChanged(userAuth =>{
            unsubscribe();
            resolve(userAuth);
        },reject)
    })
}
export const auth = firebase.auth();
export const firestore = firebase.firestore();
/**
 * Authentication setup
 */
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(googleProvider);
export default firebase;
