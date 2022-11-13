import {INPUT_INITIAL, INPUT_MONTHS, INPUT_PRICE} from '../utils/consts';

export const ACTION_PRICE = (price) => {
    return {
        type: INPUT_PRICE,
        payload: price
    }
};

export const ACTION_INITIAL = (initial) => {
    return {
        type: INPUT_INITIAL,
        payload: initial
    }
};

export const ACTION_MONTHS = (months) => {
    return {
        type: INPUT_MONTHS,
        payload: months
    }
};