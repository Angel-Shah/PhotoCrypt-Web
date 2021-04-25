import React,{useState,useEffect} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image'


// const Nav = styled.nav`
// height: 13vh;
// background: #000;
// color:#fff;
// display:flex;
// flex-direction: row;
// justify-content: space-around;
// align-items:center;
// `;

// const StyledLink = styled.a`
// padding: 0rem 2rem;
// `;

// const Heading = styled.h1`
// color #fff;
// font-size: inherit;
// font-weight: 900;
// margin-left: 0px;
// `;
const customNavBg ={
   backgroundColor:"purple",
   
};



const Navbar = () => {

  

  const [navbar,setNavbar] = useState(false);

  const changeBackground =() =>{
    if(window.scrollY >= 40){
        setNavbar(true);
    }else{
      setNavbar(false);
    }
  }
  if (typeof window !== "undefined") {
    // browser code
    window.addEventListener('scroll',changeBackground);
  }
  
    return ( 
      // navbar navbar-expand-lg navbar-dark bg-purple sticky
      <nav className={navbar ? 'navbar navbar-expand-lg navbar-dark bg-purple sticky active' : 'navbar navbar-expand-lg navbar-dark bg-purple sticky'} >
  <div className="container-fluid" >
    <Link href="/">
    <a className="navbar-brand py-3 " href="#" style={{color:"orange",fontSize:"2rem",fontFamily:"Rubik"}}>
    <img src="/PhotoCrypt-Favicon.png" alt="" height = "60" className="d-inline-block align-text-center px-2 " />
      PhotoCrypt</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto "  >
        <li className="nav-item mx-5 ">
           <Link href="/" >
          <a className="nav-link  " aria-current="page" href="#" >Home</a>
           </Link>
        </li>
        <li className="nav-item mx-5">
           <Link href="/about">
          <a className="nav-link  " href="#">About</a>
           </Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li className="nav-item mx-5">
          <Link href="/contact">
          <a className="nav-link  " href="#" >Contact</a>
          </Link>
        </li>
        <li className="nav-item mx-5">
          <a className="nav-link  " href="https://github.com/NeuralWorksAI/photocrypt-extension" target="_blank" rel="noopener noreferrer" 
          ><i className="fa fa-github"/> GitHub</a>
        </li>
      </ul>
      
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
    </div>
  </div>
</nav>

    )
}

export default Navbar


 //   <Nav>
      //       <>
      //       <Link href ="/" passHref>
                
      //        <Image passHref
      //       src ="/PhotoCrypt-fullLogo.png" 
      //          alt="Logo"
      //          height={90}
      //          width={100}
      //          layout="intrinsic"
               
      //         />
              
      //       </Link>
      //         {/* <Heading href ="/" 
              
      //         passHref>PhotoCrypt</Heading> */}
            
      //       </>
      //       <>
      //       <Link href ="/" passHref>
      //          <StyledLink>Home</StyledLink>
      //       </Link>
      //       <Link href ="/about" passHref>
      //          <StyledLink>About</StyledLink>
      //       </Link>
      //       <Link href ="/contact" passHref>
      //          <StyledLink>Contact Us</StyledLink>
      //       </Link>
      //       </>
      //   </Nav>
