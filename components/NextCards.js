import Link from 'next/link'
import styles from '@/styles/Home.module.css'

export default function Example() {
    return (
        <div className={styles.grid}>
        <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.incard}>
            Docs <span>&rarr;</span>
          </h2>
          <p className={styles.incard}>
            Find in-depth information about Next.js features and&nbsp;API.
          </p>
        </Link>

        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.incard}>
            Learn <span>&rarr;</span>
          </h2>
          <p className={styles.incard}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </Link>

        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.incard}>
            Templates <span>&rarr;</span>
          </h2>
          <p className={styles.incard}>
            Discover and deploy boilerplate example Next.js&nbsp;projects.
          </p>
        </Link>

        <Link
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={styles.incard}>
            Deploy <span>&rarr;</span>
          </h2>
          <p className={styles.incard}>
            Instantly deploy your Next.js site to a shareable URL
            with&nbsp;Vercel.
          </p>
        </Link>
      </div>
    )
  }