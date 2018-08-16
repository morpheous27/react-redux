import React from 'react';
import {render} from 'react-dom';


const Welcome=(props)=>{
    //props.title ='hello'
    return(
        <h1>{props.title}</h1>
    )
}
render(<Welcome title="hello"/>,root);