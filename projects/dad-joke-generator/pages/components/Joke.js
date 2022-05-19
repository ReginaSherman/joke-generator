import React, { useState, useEffect } from 'react';
import styles from '../styles/Joke.module.css'

export const Joke = () => {
    let [joke, setJoke] = useState(null)
    let [clicked, setClicked] = useState(false)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOST,
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY
        }
    }
    
    const fetchData = () => {
        fetch(`https://dad-jokes.p.rapidapi.com/random/joke`, options)
            .then(response => response.json())
            .then(data => setJoke(data.body[0]))
            .catch(err => console.error(err));
            setClicked(false)

    }

    return (
        <div>
            <h1 className={styles.text}>{joke?.setup}</h1>
            {clicked === false ? null : <h2 className={styles.text}>{joke?.punchline}</h2>}
            <button className={styles.button} onClick={() => setClicked(true)}>Punchline</button>
            <button className={styles.button} onClick={fetchData}>New Joke</button>
        </div>
    );
}

