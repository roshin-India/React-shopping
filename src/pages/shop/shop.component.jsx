import React ,{useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
const  ShopPage =({match,fetchCollectionsStart}) => {
    //It re render when paren prop or state changes also.So need to passs [fetchCollectionsStart] in useEffect at last
    useEffect(()=>{
        fetchCollectionsStart()
    },[fetchCollectionsStart])
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>
            <Route path={`${match.path}/:collectionId`}  component={CollectionContainer}/>
    </div>
    )
}

const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null,mapDispatchToProps)(ShopPage);