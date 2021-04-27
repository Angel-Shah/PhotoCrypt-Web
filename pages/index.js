import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head >
        <title>PhotoCrypt</title>
        <link rel="icon" href="/PhotoCrypt-Favicon.png" />
        
      </Head>
      <body className="content">
        

       <div style={{display:"flex",marginLeft:"2vw"}}>
      <div className="p-0">

       <h1 className="slogan p-0 " style={{fontSize:"3.7rem"}}>
        Secure accounts with
        <div style={{fontWeight:"bold",color:"orange",fontFamily:"Arial",fontSize:"4.5rem"}}>
        IMAGES
        </div>
        <i>not</i><br/>passwords.
        </h1>
        {/* <a href="https://chrome.google.com/webstore/detail/photocrypt/kmoamkcocigmimdndlpakeboolcbiddg?hl=en" 
        target="_blank" rel="noopener noreferrer" style={{display:"inline-block", marginTop:"6vh"}}>
        <button  type="button" className="btn btn-outline-light  p-3 py-2.5 " style={{display:"flex", flexDirection:"row"}}>
          <i className="fa fa-chrome text-align-center" style={{color:"#e2c7fd",fontSize:"3rem"}}/>
        <h2 className="mx-3 my-auto align-text-center" style={{color:"#e2c7fd",fontSize:"1.8rem",verticalAlign:"center"}}>Get PhotoCrypt For Chrome</h2>
         </button>
        </a> */}

        <a href="https://chrome.google.com/webstore/detail/photocrypt/kmoamkcocigmimdndlpakeboolcbiddg?hl=en" target="_blank" rel="noopener noreferrer">
        <img id="chrome-store-button" className="chromeStoreBtn zoom" src="chrome-web-store.png" 
        style={{width:"70%",borderRadius:"20px",backgroundColor:"white",marginTop:"6vh"}} alt="chrome store button"/>
        </a>

        </div>

        <img id="laptop-img" className="" style={{height:"59vh",marginTop:"10vh",display:"inline-block"}} src="/tester2.png" alt=""/>
        
        </div> 
        {/* <a href="https://chrome.google.com/webstore/detail/photocrypt/kmoamkcocigmimdndlpakeboolcbiddg?hl=en" target="_blank" rel="noopener noreferrer" >
          <div className="mx-5 my-5" style={{display:"flex", flexDirection:"row",border:"1px solid orange",width:"35vw", padding:"10px",justifyContent:"center",borderRadius:"10px"}}>
          <i className="fa fa-chrome " style={{color:"#e2c7fd",fontSize:"3rem"}}/>
          <h2 className="mx-3 my-auto align-text-center" style={{color:"#e2c7fd",fontSize:"1.8rem",verticalAlign:"center"}}>Get PhotoCrypt For Chrome</h2>
          </div>
        </a> */}
        

          <div className="frosted-panel-big mx-auto">
            <div>

            <h1 className="my-5 mx-auto" >How it works</h1>
            </div>
          </div>

      </body>
      
    </div>
  )
}
