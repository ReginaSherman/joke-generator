import Head from 'next/head'
import Image from 'next/image'
import { Joke } from './components/Joke'

export default function Home() {
  return (
    <div>
      <p1>Dad Joke Generator</p1>
      <button>New Joke</button>
      <Joke />
    </div>
  )
}
