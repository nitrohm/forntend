import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
  <div>
    <head>
      <title>Nitrohm_Shop</title>
    </head>
    <div> 
      <h1><center>เกี่ยวกับเรา</center></h1>
      <br/>
      <center>
      <Link href="/"><a>Home</a></Link> |
      <Link href="/about"><a>   About</a></Link> |
      <Link href="/service"><a>   Service</a></Link> |
      <Link href="/products/A001"><a>   Products</a></Link> 
      </center>
    </div>
  </div>
  )
}
