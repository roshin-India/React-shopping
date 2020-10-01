import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose } from 'redux';
import { selectCollectionsFetching } from '../../redux/shop/shop.selectors';
import withSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';
const mapStateToProps = createStructuredSelector({
    isLoading:selectCollectionsFetching
})

const CollectionsOverviewContainer =  compose(
    connect(mapStateToProps),
    withSpinner
)(CollectionsOverview);
export default CollectionsOverviewContainer;