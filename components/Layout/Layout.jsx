import Head from 'next/head'
import CustomLink from '../common/CustomLink/CustomLink'
import style from './Layout.module.css'

function BackToHome() {
  const name = 'danglm'
  return (
    <CustomLink href="/" className={style.container}>
      <img src="/images/profile.jpg" className={style.image} alt={name} />
    </CustomLink>
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
    </>
  )
}
