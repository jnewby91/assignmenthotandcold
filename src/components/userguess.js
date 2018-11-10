import React from 'react'; 

import './userguess.css'

export default function UserGuess (props) {
    const count = 0; 

    return (
        <form>
            <label htmlFor={props.id}>{props.label}</label>
            <input type='number' id= {props.id}>Enter your Guess</input>
            <label htmlFor={props.id}>{props.label}</label>
            <input type='button' id= {props.id}>Guess</input>
        </form>
        
    )
}