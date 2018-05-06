// @flow

const initialState = {
  pictures: [],
  currentLocation: {
    latitude: '',
    longitude: '',
  },
};

// REDUCER
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_PICTURE':
      return {
        ...state,
        pictures: [
          ...state.pictures,
          {
            coordinate: { latitude: state.currentLocation.latitude, longitude: state.currentLocation.longitude },
            picture: action.payload.picture,
            title: new Date().toLocaleDateString(),
          },
        ],
      };
    case 'SET_CURRENT_LOCATION':
      return {
        ...state,
        currentLocation: action.payload.location,
      };
    default:
      return state;
  }
}

// ACTION CREATORS
export const storePicture = picture => ({ type: 'STORE_PICTURE', payload: { picture } });
export const setCurrentLocation = location => ({ type: 'SET_CURRENT_LOCATION', payload: { location } });
