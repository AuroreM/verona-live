// @flow

import { connect } from 'react-redux';
import Home from './Home.component';
import { setCurrentLocation, hydrate } from '../../modules/App';

const mapStateToProps = state => ({
  markers: state.app.pictures,
});

const mapDispatchToProps = dispatch => ({
  hydrate: () => dispatch(hydrate()),
  setCurrentLocation: location => dispatch(setCurrentLocation(location)),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
