import React, {useState, useEffect} from 'react';


export const Joke = () => {
  let [joke, setJoke] = useState(null)
  const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': process.env.NEXT_PUBLIC_HOST,
                'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY            }
        }
        useEffect(() => {
                    fetch(`https://dad-jokes.p.rapidapi.com/random/joke`, options)
                        .then(response => response.json())
                        .then(data => setJoke(data.body[0]))
                        .catch(err => console.error(err));
            
                }, [])

  return (
    <div>
        <h1>{joke?.setup}</h1>
        <h2>{joke?.punchline}</h2>

    </div>
  );
}

