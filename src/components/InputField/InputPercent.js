import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {ACTION_INITIAL} from '../../actions/inputActions';

import './inputField.sass';


const InputPercent = ({id, title, initPay, disabled}) => {
    const dispatch = useDispatch();
    const {initial} = useSelector(state => state.inputReducer);

    const [value, setValue] = useState(initial);
    const [range, setRange] = useState(initial);
    const [right, setRight] = useState(initial);

    let minValue = 10;
    let maxValue = 60;
    
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
        dispatch(ACTION_INITIAL(value));
    }, [value]);
  

    return (
        <div className='input' id={id}>
            <div className='input__title'>{title}</div>
            <input
                type="number"
                className="input__text input__text_value"
                placeholder={initPay}
                readOnly
                disabled={disabled}
            />
            <input 
                type="number"
                className="input__text input__text_percent"                
                value={value}
                onChange={e => {
                    (+e.target.value > minValue) ? 
                        (+e.target.value > maxValue) ? setValue(maxValue) : setValue(+e.target.value)
                    : setValue(minValue)
                }} 
                disabled={disabled}
            /><span className="input__text input__text_percent input__text_unit">%</span>

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
                    step={1} 
                    onChange={e => setRange(+e.target.value)} 
                />
            </div>
        </div>
    );
};

export default InputPercent;