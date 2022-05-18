import React, {useState, useEffect} from 'react';


export const Joke = () => {
  let [joke, setJoke] = useState(null)
  console.log(joke)
//   const options = {
//             method: 'GET',
//             headers: {
//                 'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
//                 'X-RapidAPI-Key': '4be5d4b5f2msh52d37fdd3183f48p1bf118jsn5fba80a6a439'
//             }
//         }
  useEffect(() => {
      const fetchData = async () => {
          const response = await fetch('https://api.chucknorris.io/jokes/random')
          const json = await response.json()
          setJoke(json)
      }
    // fetch('https://api.chucknorris.io/jokes/random')
    // .then(response => response.json())
    // .then(data => setJoke(data))
    fetchData()
    .catch(err => console.error(err))
  },[joke])

  return (
    <div>
        {/* {joke.value} */}
    </div>
  );
}



// export const Joke = () => {
//     const [joke, setJoke] = useState({})
//    console.log(joke)
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
//             'X-RapidAPI-Key': '4be5d4b5f2msh52d37fdd3183f48p1bf118jsn5fba80a6a439'
//         }
//     }
//     useEffect(() => {
//         fetch(`https://dad-jokes.p.rapidapi.com/random/joke`, options)
//             .then(response => response.json())
//             .then(data => setJoke(data.body))
//             .catch(err => console.error(err));

//     }, [])

//     return (
//         <>
//             <div>
//                 {/* <h1>{joke}</h1> */}
//             </div>
//         </>

//     )
// }

// export const getServerSideProps = async () => {
//     // const options = {
//     //     method: 'GET',
//     //     headers: {
//     //         'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com',
//     //         'X-RapidAPI-Key': '4be5d4b5f2msh52d37fdd3183f48p1bf118jsn5fba80a6a439'
//     //     }
//     // }
//     const res = await fetch(`https://uselessfacts.jsph.pl/random.json`)
//     const data = await res.json()

//     return { props: { data }}
// }
