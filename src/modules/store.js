// @flow

import { createStore, compose } from 'redux';
import enhancer from 'veronalive/src/modules/rootEnhancer';
import reducers from 'veronalive/src/modules/rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ || compose;
export default () => createStore(reducers, composeEnhancers(enhancer));
