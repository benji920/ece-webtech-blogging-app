
import React from 'react'


export default function Articles({allAlbums}) {

  return (
    
    <div >
      list of albums
      <ul>
        {allAlbums.map(album => <li>
          {album.title}
        </li>)}
        </ul>     
            
    </div>
    
  
  )
}





export const getStaticProps = async () => {
 
  // Fetching data from jsonplaceholder.
  const res = await fetch(
      'https://jsonplaceholder.typicode.com/albums');
  let allAlbums = await res.json();

  // Sending fetched data to the page component via props.
  return {
      props: {
          allAlbums
      }
  }
}
