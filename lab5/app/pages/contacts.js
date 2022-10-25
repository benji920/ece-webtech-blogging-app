import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout.js'


export default function Contacts() {
  return (
    <Layout>
      <Head>
        <title>WebTech - contact us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div class="grid place-items-center">
        <br/>
      <h1 class="wt-title">
        Contact
      </h1>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2">
            <span>First name</span>
            <input type="text" name="firstname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </label>
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">
            <span>Last name</span>
            <input type="text" name="lastname" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </label>
        </div>
        <div>
          <label class="block text-gray-700 text-sm font-bold mb-2">
            <span>Email</span>
            <input type="text" name="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </label>
        <div>
        </div>
          <label class="block text-gray-700 text-sm font-bold mb-2">
            <span>Message</span>
            <textarea name="message" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
          </label>
        </div>
        <div>
          <input type="submit" value="Send" />
        </div>
      </form>
      </div>
    </Layout>
  )
}
