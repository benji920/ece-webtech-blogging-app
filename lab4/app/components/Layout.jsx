import Link from 'next/link'
import React from "react";

  
const Header = () => {
  return (
    <div class="header">
  <ul><li><Link href="/"><a>Home</a></Link></li>
  <li>  <Link href="/about"><a>About</a></Link></li>
  <li>  <Link href="/articles"><a>Articles</a></Link></li>
  <li>  <Link href="/contacts"><a>Contacts</a></Link></li>
  </ul>
  </div>
  

  )
};
  
const Footer = () => {
  return (
  <div class="footer">
   <p>Here is your footer</p>
   </div>
);
};
  
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
  
export default Layout;