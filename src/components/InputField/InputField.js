import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import { convertNumToStr, convertStrToNum } from '../../utils/calc';
import {ACTION_MONTHS, ACTION_PRICE} from '../../actions/inputActions';

import './inputField.sass';


const InputField = ({id, title, units, disabled}) => {
    const dispatch = useDispatch();
    const {price, months} = useSelector(state => state.inputReducer);

    let minValue = id === "price" ? 1000000 : 1;
    let maxValue = id === "price" ? 6000000 : 60;

    const [value, setValue] = useState(id === "price" ? price : months);
    const [range, setRange] = useState(id === "price" ? price : months);
    const [right, setRight] = useState(id === "price" ? price : months);
    
    const handlerValue = () => {
        setRange(value);
        setRight(100 - ((value - minValue) * 100 )/ (maxValue - minValue));
    };

    const handlerRange = () => {
        setValue(range);
        setRight(100 - ((range - minValue) * 100 )/ (maxValue - minValue));
    };

    useEffect(() => {
        if (value > maxValue) {
        }
        handlerValue();
    }, [value]);

    useEffect(() => {
        handlerRange();
    }, [range]);

    useEffect(() => {
        if (id === "price") {
            dispatch(ACTION_PRICE(range));
        } else {
            dispatch(ACTION_MONTHS(range));
        }              
    }, [range]);


    return (
        <div className='input' id={id}>
            <div className='input__title'>{title}</div>
            <input
                type="text"
                className="input__text input__text_value"
                value={id === "price" ? convertNumToStr(value) : value}
                onChange={e => {
                    (convertStrToNum(e.target.value) > minValue) ? 
                        (convertStrToNum(e.target.value) > maxValue) ? setValue(maxValue) : setValue(convertStrToNum(e.target.value))
                    : setValue(minValue)
                }} 
                disabled={disabled}
            />
            <div className='input__text input__text_units'>{units}</div>
            
            <div className="input__slider">
                <div className="input__progress" style={{left: `0%`, right: `${right}%`}}></div>
            </div>
            <div className="input__range">
                <input 
                    type="range" 
                    className="input__range-max" 
                    min={minValue} 
                    max={maxValue} 
                    value={range} 
                    step={id === "price" ? 100000 : 1} 
                    onChange={e => setRange(+e.target.value)} 
                />
            </div>
        </div>
    );
};

export default InputField;