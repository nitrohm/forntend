import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
  <div>
    <head>
      <title>Nitrohm_Shop</title>
    </head>
    <main> 
      <h1><center>หน้าแรก</center></h1>
      <br/>
      <center>
      <Link href="/"><a>Home</a></Link> |
      <Link href="/about"><a>   About</a></Link> |
      <Link href="/service"><a>   Service</a></Link> |
      <Link href="/products/A001"><a>   Products</a></Link> 
      </center>
    </main>
  </div>
  )
}
