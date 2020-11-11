import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

        // unsubscribedFromSnapshot = null;

        componentDidMount() {
                const { fetchCollectionsStart } = this.props;
                fetchCollectionsStart()
                // const { updateCollections } = this.props;
                // const collectionRef = firestore.collection('collections');
                
                // // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-abf94/databases/(default)/documents/collections')
                // // .then(response => response.json())
                // // .then(collections => console.log(collections));

                // collectionRef.get().then(snapshot => {
                //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                //         updateCollections(collectionsMap);
                //         this.setState({ loading: false });
                // });

                // this.unsubscribedFromSnapshot = collectionRef.onSnapshot(async snapshot => {
                //         const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
                //         updateCollections(collectionsMap);
                //         this.setState({ loading: false });
                // })
        }

        render() {
                const { match } = this.props;
                return (
                        <div className='shop-page'>
                           <Route exact path={`${match.path}`} 
                           component={CollectionsOverviewContainer}
                           />
                           <Route path={`${match.path}/:categoryId`} 
                           component={CollectionPageContainer} 
                           />
                        </div>
                        );
        }
} 


const mapDispatchToProps = dispatch => ({
        fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})



export default connect(null, mapDispatchToProps)(ShopPage);