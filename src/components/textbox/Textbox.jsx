import React, { Component } from 'react';

const Textbox = (props) => {
    return (
        <input 
         onChange={props.onChange}
         placeholder={props.placeholder}
         required={props.required}
         name={props.name}
         id={props.id}
         className={props.name}
         type={props.type}
         style={{... props.style}}
        />
    );
}
 
export default Textbox;