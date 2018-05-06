// @flow

const initialState = {
  pictures: [],
};

// REDUCER
export function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'STORE_PICTURE':
      return {
        ...state,
        pictures: [...state.pictures, action.payload.picture],
      };
    default:
      return state;
  }
}

// ACTION CREATORS
export const storePicture = picture => ({ type: 'STORE_PICTURE', payload: { picture } });
