import React from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import collectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import { selectCollectionsFetching,selectCollectionsLoaded } from '../../redux/shop/shop.selectors';
const CollectionOverviewWithSpinner = withSpinner(collectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)
class ShopPage extends React.Component {

    componentDidMount(){
        const {fetchCollectionsStartAsync} = this.props;
        fetchCollectionsStartAsync();
    }
    render(){
        const {match,isCollectionFetching,isCollectionLoaded} = this.props;
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=><CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
                <Route path={`${match.path}/:collectionId`}  render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
        </div>
        )
    }
}
const mapStateToProps = createStructuredSelector({
    isCollectionFetching:selectCollectionsFetching,
    isCollectionLoaded:selectCollectionsLoaded
});
const mapDispatchToProps = dispatch =>({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})
export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);