import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Visit my portfolio at <a href="https://francesco.work/">https://francesco.work</a>
        </p>
      </div>

      <div className={styles.center}>
        <div className={styles.thirteen}>
          <h1>Francesco Stella</h1>
          <p>Senior Web Engineer</p>
        </div>
      </div>
    </main>
  )
}
