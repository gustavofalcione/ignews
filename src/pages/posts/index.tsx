import  Head  from 'next/head'
import styles from './styles.module.scss'

export default function Posts() { 
  return(
    <>
      <Head>
        <title>Posts | ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Creating a monorepo with lerna & yarn workspaces</strong>
            <p>In this guide, you'll learn how to create a monorepo to manage multiple packages with shared build, test, and release process</p>
          </a>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Creating a monorepo with lerna & yarn workspaces</strong>
            <p>In this guide, you'll learn how to create a monorepo to manage multiple packages with shared build, test, and release process</p>
          </a>
          <a href='#'>
            <time>12 de março de 2022</time>
            <strong>Creating a monorepo with lerna & yarn workspaces</strong>
            <p>In this guide, you'll learn how to create a monorepo to manage multiple packages with shared build, test, and release process</p>
          </a>
        </div>
      </main>
    </>
  )
}