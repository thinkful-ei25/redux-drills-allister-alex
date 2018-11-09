import {SET_LANGUAGE} from '../actions/index';

const initialState = {
    lang: 'en'
}

// Add your code for the languageReducer
export default function languageReducer(state=initialState, action) {
    if (action.type === SET_LANGUAGE) {
        return Object.assign({}, state, {lang : action.lang});
    }
    return state;
}
