

import Link from 'next/link'
import Image from 'next/image'

export default function Header(){
  return (
    <header>
      <div >
        <Link href={`/`}>
          <a>
            <Image src="/adaltas.svg" alt="Adaltas Logo" width={25} height={25} />
            <span>
              Web technologies
            </span>
          </a>
        </Link>
      </div>
      <ul>
        <li>
          <Link href="/articles">
            Articles
          </Link>
        </li>
        <li>
          <Link href="/about">
            About us
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            Contact us
          </Link>
        </li>
      </ul>
    </header>
  )
}
