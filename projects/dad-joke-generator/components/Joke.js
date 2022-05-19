import React, { useState } from 'react';
import styles from '../styles/App.module.css'

const Joke = () => {
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
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.jokeText}>{joke?.setup}</h1>
                {clicked === false ? null : <h2 className={styles.punchlineText}>{joke?.punchline}</h2>}
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={() => setClicked(true)}>PUNCHLINE</button>
                <button className={styles.button} onClick={fetchData}>NEW JOKE</button>
            </div>
        </div>



    );
}

export default Joke