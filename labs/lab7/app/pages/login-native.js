import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout.js'
import React, { useState } from 'react';

const MyForm = function() {
    const onSubmit = function(e) {
      e.preventDefault()
      const data = new FormData(e.target)
      console.log(data)
    }
    return (
      <form onSubmit={onSubmit}>
        <h2>My form</h2>
        <div>
          <input
            type="text"
            name="my_input"
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }

  export default MyForm;