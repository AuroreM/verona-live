// @flow

import { connect } from 'react-redux';
import Camera from './Camera.component';
import { storePicture } from '../../modules/App';

const mapDispatchToProps = dispatch => ({
  storePicture: picture => dispatch(storePicture(picture)),
});

const CameraContainer = connect(null, mapDispatchToProps)(Camera);

export default CameraContainer;
