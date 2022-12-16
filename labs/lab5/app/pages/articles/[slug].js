import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../../components/Layout.js'


export default function Article({
  article
}) {
  return (
    <Layout>
      <Head>
        <title>WebTech - articles</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        {article.title}
      </h1>
      <p style={{fontStyle: 'italic'}}>This page fetch data at build time, excellent for SEO.</p>
      <p>
        {article.message}
      </p>
    </Layout>
  )
}

export async function getStaticProps(ctx) {
  const response = await fetch(`http://localhost:3000/api/articles/${ctx.params.slug}`)
  const article = await response.json()
  return {
    props: {
      article: article
    }
  };
}

export async function getStaticPaths(ctx) {
  const response = await fetch(`http://localhost:3000/api/articles`)
  const articles = await response.json()
  return {
    paths: articles.map( article => `/articles/${article.slug}`),
    fallback: false
  };
}