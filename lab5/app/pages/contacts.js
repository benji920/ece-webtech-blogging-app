import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Contacts.module.css'
import Layout from '../components/Layout.js'


export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>WebTech - contact us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>
        Contact
      </h1>
      <form className={styles.form}>
        <div>
          <label>
            <span>First name</span>
            <input type="text" name="firstname" />
          </label>
        </div>
        <div>
          <label>
            <span>Last name</span>
            <input type="text" name="lastname" />
          </label>
        </div>
        <div>
          <label>
            <span>Email</span>
            <input type="text" name="email" />
          </label>
        <div>
        </div>
          <label>
            <span>Message</span>
            <textarea name="message" />
          </label>
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
    </Layout>
  )
}
