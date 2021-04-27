import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
background:#160d23;
color:#e2c7fd;
height:13vh;
display:flex;
justify-content: center;
align-items: center;

`;

const Footer = () => {
    return (
        <Foot>
            <p style={{alignItems:"center",justifyContent:"center",padding:"35px"}}>PhotoCrypt 2021 All Rights Reserved</p>
        </Foot>
    )
}

export default Footer
