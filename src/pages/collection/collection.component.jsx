import React from 'react';
import {connect} from 'react-redux';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selectors';
const CollectionPage = ({collection})=>{
    /**
     * example . not need this component.Irts for study 
     * useEffect for unsubscribe demo like in componentWillUnmount() in class
     */
    // useEffect(()=>{
    //     const unsubscribeCollection  = firestore
    //     .collection('collection')
    //     .onSnapshot(snapshot => console.log("subscribe",snapshot))
    //     return ()=>{
    //         console.log("Unsubscribe")
    //         unsubscribeCollection()
    //     }
    // },[])
    //async demo
    // useEffect(()=>{
        // const ferchUser = async ()=>{
        //     const res = await fetch(`https://jsonplaceholder.typecode.com/users>id=15`);
        //     const users = await res.json();
        //     setUser(users[0])//useState
        // }
        // fetchUser();
    // },[url])
    const {title,items}=collection;
    return (
    <div className="collection-page">
        <h2 className="title">{title}</h2>
        <div className="items">
        {
            items.map(item=>(
                <CollectionItem key={item.id} item={item} />
            ))
        }
        </div>

    </div>
)}
const mapStateToProps = (state,ownProps)=>({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);