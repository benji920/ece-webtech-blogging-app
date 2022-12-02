import Header from '../components/Header.js'
import Footer from '../components/Footer.js'


export default function Layout({children}){
  return (
    <div>
      <Header />
      <main class="body">
        {children}
      </main>
      <Footer />
    </div>
  )
}
