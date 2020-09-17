import {CHANGE_INPUT_VALUE, FETCH_SERIALS_REQUEST, FETCH_SERIES_REQUEST} from "./actionTypes";

export const initialState = {
    inputValue: '',
    serials: null,
    series: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            return {
                ...state,
                inputValue: action.value
            };
        case FETCH_SERIALS_REQUEST:
            return {
                ...state,
                serials: action.value
            };
        case FETCH_SERIES_REQUEST:
            return {
                ...state,
                series: action.value
            };
        default:
            return state;
    }
};

export default reducer;