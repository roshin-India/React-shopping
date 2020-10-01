import { convertCollectionsSnapshotToMap,firestore } from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';
export const fetchCollectionsStart = (collectionsMap)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_START,
    payload:collectionsMap
})
export const fetchCollectionsSuccess = (collectionsMap)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload:collectionsMap
})
export const fetchCollectionsFailure = (errorMessage)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
})
export const fetchCollectionsStartAsync = (collectionsMap)=>{
    return dispatch =>{
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart());
        collectionRef.get().then(snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            dispatch(fetchCollectionsSuccess(collectionMap));
        }).catch(error=>dispatch(fetchCollectionsFailure(error.message)))
    }
}