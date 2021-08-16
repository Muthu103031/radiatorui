import React, { Component } from 'react';


const Button = (props) => {
    return ( 

        <button 
        type={props.type}
        //className={props.classname}
        className="btn btn-block log-btn"
        onClick={props.onClick}
        
        >
            {props.title}
        
        </button>
     )
}
 
export default Button;
