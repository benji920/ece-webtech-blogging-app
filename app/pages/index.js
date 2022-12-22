import Head from 'next/head'
import Link from 'next/link'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>WebTech</title>
        <meta name="description" content="Web technologies blogging application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title text-color900'>
        Welcome to <a href="https://www.adaltas.com">web technologies!</a>
      </h1>
      <ul>
        <li className='wt-title text-color800'>
          <Link href="/articles">
            View our articles
          </Link>
        </li>
        <li className='wt-title text-color700'>
          <Link href="/about">
            About us
          </Link>
        </li>
        <li className='wt-title text-color600'>
          <Link href="/contact">
            Contact us
          </Link>
        </li>
      </ul>
      <ThemeSwitcher className="mt-12" />
    </Layout>
  )
}
