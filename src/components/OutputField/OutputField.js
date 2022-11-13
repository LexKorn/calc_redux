import React from 'react';
import './outputField.sass';

const OutputField = ({title, result}) => {
    return (
        <div className='output'>
            <div className='output__title'>{title}</div>
            <div className='output__result'>{result} ₽</div>
        </div>
    );
};

export default OutputField;