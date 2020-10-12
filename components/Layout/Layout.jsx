import Head from 'next/head'
import Link from 'next/link'
import style from './Layout.module.css'

function BackToHome() {
  const name = 'danglm'
  return (
    <Link href="/">
      <a>
        <img src="/images/profile.jpg" className={style.image} alt={name} />
      </a>
    </Link>
  );
}

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        {!home && <BackToHome />}
      </header>
      <main>{children}</main>
      {!home && <Link href="/">← Back to home</Link>}
    </>
  )
}
