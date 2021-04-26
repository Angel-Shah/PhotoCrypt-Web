import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head >
        <title>PhotoCrypt</title>
        <link rel="icon" href="/PhotoCrypt-Favicon.png" />
        
      </Head>
      <body className="content">
        
      <h1 className="slogan mx-5 " style={{fontSize:"3.7rem"}}>
        Secure accounts with 
        <div style={{fontWeight:"bold",color:"orange",fontFamily:"Arial",fontSize:"4.5rem"}}>
        IMAGES
        </div>
        <i>not</i> <br/>passwords.</h1>

        {/* <a href="https://chrome.google.com/webstore/detail/photocrypt/kmoamkcocigmimdndlpakeboolcbiddg?hl=en" target="_blank" rel="noopener noreferrer" >
          <div className="mx-5 my-5" style={{display:"flex", flexDirection:"row",border:"1px solid orange",width:"35vw", padding:"10px",justifyContent:"center",borderRadius:"10px"}}>
          <i className="fa fa-chrome " style={{color:"#e2c7fd",fontSize:"3rem"}}/>
          <h2 className="mx-3 my-auto align-text-center" style={{color:"#e2c7fd",fontSize:"1.8rem",verticalAlign:"center"}}>Get PhotoCrypt For Chrome</h2>
          </div>
        </a> */}

        <a href="https://chrome.google.com/webstore/detail/photocrypt/kmoamkcocigmimdndlpakeboolcbiddg?hl=en" target="_blank" rel="noopener noreferrer">
        <button  type="button" class="btn btn-outline-light mx-5 p-3 py-2.5 my-5" style={{display:"flex", flexDirection:"row"}}>
          <i className="fa fa-chrome text-align-center" style={{color:"#e2c7fd",fontSize:"3rem"}}/>
        <h2 className="mx-3 my-auto align-text-center" style={{color:"#e2c7fd",fontSize:"1.8rem",verticalAlign:"center"}}>Get PhotoCrypt For Chrome</h2>
         </button>
        </a>
        


      </body>
      
    </div>
  )
}
