import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import collectionsOverview from '../../components/collections-overview/collections-overview.component';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';
const CollectionOverviewWithSpinner = withSpinner(collectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)
class ShopPage extends React.Component {
    state= {
        loading:true
    }
    
    unsubscribeSnapshot = null;
    componentDidMount(){
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        collectionRef.onSnapshot(async snapshot => {
            const collectionMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionMap);
            this.setState({loading:false})
        })
    }
    render(){
        const {match} = this.props;
        const {loading} = this.state;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`}  render={(props)=><CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
        </div>
        )
    }
}
const mapDispatchToProps = dispatch =>({
    updateCollections:collectionsMap =>dispatch(updateCollections(collectionsMap))
})
export default connect(null,mapDispatchToProps)(ShopPage);