import React from 'react'; 

import './game.css'; 
import Feedback from './feedback';
import UserGuess from './userguess';


export default function Game () {
    return (
        <div className='Game'>
            <h1>HOT or COLD</h1>
            <section className='gamesection'>
                <Feedback /> 
                <UserGuess />
            </section>
        </div>
    )
}