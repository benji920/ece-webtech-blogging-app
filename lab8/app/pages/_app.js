import '../styles/globals.css'
import {useContext} from 'react';
import {ContextProvider} from '../components/UserContext'


function MyApp({ Component, pageProps }) {
  return (<ContextProvider>
    <Component {...pageProps} />
  </ContextProvider>)
}

export default MyApp
