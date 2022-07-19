import React from 'react'
import styled from 'styled-components'
import apparel from '../image/apparel.jpg'
import ShopButton from './ShopButton'

const Container = styled.div`
display: flex;
background-color: rgba(0, 0, 0, 0.03);
${'' /* height: 100vh; */}
flex-direction: column;
padding: 2rem 0;
`
const Header = styled.h1`
font-size: 4rem;
display: flex;
justify-content: center;
text-align: center;
margin: 0 auto;
letter-spacing: -4.1px;
`
const Description = styled.p`
display: flex;
justify-content: center;
text-align: center;
margin: 0 auto;
`

const Image = styled.div`
background-image: url(${apparel});
width: 95vw;
margin-top: 3rem !important;
margin: 0 auto;
background-color: red;
height: 100vh;
max-height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`

const Apparel = () => {
    return (
        <Container>
            <Header>BASKETBALL APPAREL</Header>
            <Description>Get buckets this summer in gear that's comfortable in the heat of the game</Description>
            <ShopButton />
            <Image />
        </Container>
    )
}

export default Apparel
