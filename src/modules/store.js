// @flow

import { createStore } from 'redux';
import enhancer from 'veronalive/src/modules/rootEnhancer';
import reducers from 'veronalive/src/modules/rootReducer';

export default () => createStore(reducers, enhancer);
