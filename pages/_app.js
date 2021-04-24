
import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'
import '../styles/underlineAni.css'



function MyApp({ Component, pageProps }) {
  return (
<>
<Head>
  {/* Next two link and script are for Bootstrap */}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>

{/* This next link is for the fa-icons */}
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

{/* Rubik font link */}
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Antonio:wght@500&family=Rubik&display=swap" rel="stylesheet"/>

</Head>
  <Layout>
    <Component {...pageProps} />
    
  </Layout>
      
  </>
  

  )
}

export default MyApp
