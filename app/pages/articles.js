import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'

export default function Articles({
  articles
}) {
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="WebTech articles page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className='wt-title'>
        Web technologies articles
      </h1>
      <p className="italic my-5">This page fetches data at build time, excellent for SEO.</p>
      <ul>
        {articles.map( article => (
          <li key={article.slug} className="my-5">
            <h2 className="font-bold mb-1"><Link href={`/articles/${article.slug}`}>{article.title}</Link></h2>
            <p>{article.message}</p>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  // const response = await fetch(`http://localhost:3000/api/articles`)
  // const articles = await response.json()
  const articles = []
  return {
    props: {
      articles: articles
    }
  };
}
