import React from 'react'
import styled from 'styled-components'

const Foot = styled.div`
background: #000;
color:#fff;
height:60px;
display:flex;
justify-content: center;
align-items: center;
bottom: 10px;
`;

const Footer = () => {
    return (
        <Foot>
            <p>PhotoCrypt 2021 All Rights Reserved</p>
        </Foot>
    )
}

export default Footer
