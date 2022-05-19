import { Joke } from '../components/Joke'
import { Header } from '../components/Header'
import styles from '../styles/App.module.css'


export default function Home() {
  return (
    <div className={styles.body}>
      {/* <Header /> */}
      <Joke />
    </div>
  )
}
