import React from 'react';
import Child from './child';

const parent = (props) => {
    return (
        <div>
            <Child {...props}/>
            <Child doWhatever={props.leaveTheWorldTheSame} title={props.title}/>
        </div>
    )
};

export default parent;