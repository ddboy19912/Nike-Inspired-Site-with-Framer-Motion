import React, { useState} from 'react'
import styled from 'styled-components'
import { InfoOutlined, LocalShippingOutlined, StarOutlineOutlined, Star } from "@material-ui/icons";
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// COMPONENT IMPORTS
import Apparel from '../components/Apparel'
import Shoes from '../components/Shoes/Shoes'
import Athletes from '../components/Athletes'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


import { featured } from '../data/featuredData'

import { Autoplay, Pagination, Navigation } from "swiper";

const Container = styled.div`
display: flex;
${'' /* background-color: red; */}
height: 100vh;
font-family: 'Poppins', sans-serif;
`
const TextContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
flex-direction: column;
`

const Title = styled.h1`
font-size: 2.7rem;
font-style: italic;
`
const Description = styled.p`
font-size: 1.7 rem;
text-align: left;
display: flex;
left: 0;
${'' /* background-color: red; */}
width: 40%;
`

const Icons = styled.div`
display: flex;
margin-top: 12rem;
gap: 1.5rem;
width: 40%;
left: 0;    
`

const StarContainer = styled.div`
display: flex;
color: grey;
gap: 0.2rem;
align-items: center;
`


const ImageContainer = styled.div`
width: 100%;
${'' /* background-color: green; */}
display: flex;
align-items: center;
justify-content: center;
flex: 1;
flex-direction: column
`
const Image = styled.div`
${'' /* background-image: url(${nikeKd}); */}
width: 31rem;
height: 31rem;
background-position: center;
background-repeat: no-repeat;
background-size: contain;
margin-right: 12rem;
`
const ButtonCont = styled.div`
display: flex;
align-items: center;
font-weight: normal;
font-size: 1.5rem;
gap: 3rem;
margin-bottom: 4rem;
margin-top: 1.5rem;
margin-left: 14rem;
`

const Button = styled.button`
background-color: white;
border-radius: 2rem;
outline: none;
padding: 1rem 2rem;
border: none;
font-size: 1rem;
font-weight: bold;
font-family: 'Poppins', sans-serif;
box-shadow: -1px 13px 13px 1px rgba(0,0,0,0.3);
-webkit-box-shadow: -1px 13px 13px 1px rgba(0,0,0,0.3);
-moz-box-shadow: -1px 13px 13px 1px rgba(0,0,0,0.3);
cursor: pointer;
`


const Home = () => {
    
  

const [currentLike, setCurrentLike] = useState(true)

const handleSubmit = () => {
    setCurrentLike(!currentLike)
}


    return (
<>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      > 
      {featured.map((item) => {
        const {id, image, title, desc, price} = item;
        return (
 <SwiperSlide key={id}>
        <Container>
        <TextContainer>
           <Title>{title}</Title>
           <Description>{desc}</Description>
           <Icons >
            <InfoOutlined  style={{color: 'grey', cursor: 'pointer'}}   />
            <LocalShippingOutlined style={{color: 'grey', cursor: 'pointer'}} />
            <StarContainer>
            4.3
            {currentLike ? <Star style={{color: 'yellow', cursor: 'pointer'}} onClick={handleSubmit} /> : <StarOutlineOutlined style={{color: 'grey', cursor: 'pointer'}} onClick={handleSubmit}/>}
            </StarContainer>
           </Icons>
           </TextContainer>
           <ImageContainer>
            <Image as={motion.div} animate={{scale: 1.1}} whileHover={{y
            :[30,0]}} drag >
              <img src={image} alt={title} style={{width: '100%', height: '100%'}} />
            </Image>
            <ButtonCont>
                <Button as={motion.div} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} >Add to Cart</Button>
                {price}
            </ButtonCont>
           </ImageContainer>
        </Container>
        </SwiperSlide>
        )
      })} 
        </Swiper>
        <Apparel />
        <Shoes />
        <Athletes />
        <NewsLetter />
        <Footer />
        </>
    )
}

export default Home
