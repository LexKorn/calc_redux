import {INPUT_INITIAL, INPUT_MONTHS, INPUT_PRICE} from '../utils/consts';

const initialState = {
    price: 3300000,
    initial: 13,
    months: 60
};

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case INPUT_PRICE: {
            return {
                ...state,
                price: action.payload
            } 
        }
        case INPUT_INITIAL: {
            return {
                ...state,
                initial: action.payload
            } 
        }
        case INPUT_MONTHS: {
            return {
                ...state,
                months: action.payload
            } 
        }
        default: return state;
    }
};

export default inputReducer;