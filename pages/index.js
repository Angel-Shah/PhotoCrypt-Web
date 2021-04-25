import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head >
        <title>PhotoCrypt</title>
        <link rel="icon" href="/PhotoCrypt-Favicon.png" />
        
      </Head>
      <body className="content">
        
      <h1 className="slogan mx-auto ">Secure accounts with <div style={{fontWeight:"bold",color:"orange",fontFamily:"Arial", display:"inline"
    }}>IMAGES</div>, not passwords.</h1>
      <div style={{display:"flexbox", flexDirection:"row"}}>

      <div className="frosted-panel mx-3">

      </div>
      <div className="frosted-panel mx-3">

      </div>
      </div>
      </body>
      
    </div>
  )
}
