import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Products = () => {
 const router = useRouter()
 const pathData = router.query
 return (
 <div>
     <head>
      <title>Nitrohm_Shop</title>
    </head>
     <h1>
     <center>product id: {pathData.id}</center>
     </h1>
     <br/>
     <center>
      <Link href="/"><a>Home</a></Link> |
      <Link href="/about"><a>   About</a></Link> |
      <Link href="/service"><a>   Service</a></Link> |
      <Link href="/products/A001"><a>   Products</a></Link> 
      </center>
 </div>
 )
}
export default Products