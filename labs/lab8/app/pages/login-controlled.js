import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import React, { useState } from 'react';

const MyForm = function() {
  const [data, setData] = useState({})
  const onSubmit = function(e) {
    e.preventDefault()
    console.log(data)
  }
  return (
   
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




      <div class=" max-w-xs m-20">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Username
      </label>
      <input  type="text"
          name="login"
          value={data.my_value}
          onChange={e => setData({...data, ...{login: e.target.value}})} 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input type="text"
          name="password"
          value={data.my_value}
          onChange={e => setData({...data, ...{password: e.target.value}})} 
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
      
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Submit
      </button>
    </div>
  </form>
</div>

    

    
    </Layout>
  )
}

export default MyForm;