import React from 'react'
import styled from 'styled-components'
// import apparel from '../image/apparel.jpg'
import ShopButton from '../ShopButton'


import { Swiper, SwiperSlide } from "swiper/react";


// SHOE DATA
import {shoeData} from '../../data/featuredData'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

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

const Name = styled.h2`
font-size: 25px;
display: flex;
text-align: center;
align-items: center;
justify-content: center;
`

// const Image = styled.div`
// background-image: url(${apparel});
// width: 95vw;
// margin-top: 3rem !important;
// margin: 0 auto;
// background-color: red;
// height: 100vh;
// max-height: 100vh;
// background-repeat: no-repeat;
// background-size: cover;
// background-position: center;
// `

const Apparel = () => {
    return (
        <Container>
            <Header>THE LEBRON XIX</Header>
            <Description>Step into Lebron's world where there is always space to dominate</Description>
            <ShopButton />
             <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

      {shoeData.map((item) => {
        return(

 <SwiperSlide>
        <img src={item.image} alt={item.name} style={{borderBottom: '1px solid gray'}} />
        <Name>{item.name}</Name>
        </SwiperSlide>

        )
      })}
         
      </Swiper>
        </Container>
    )
}

export default Apparel
