import React from 'react'
import styled from 'styled-components'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styled.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";


// ATHLETES DATA
import {athData} from '../data/featuredData'

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

const Name = styled.h2`

`
const Overlay = styled.div`
 transition: 1s;
  filter: brightness(100%);
  position: relative;
  

  &:hover{
    filter: brightness(50%);
  }
`
const Nicks = styled.h2`
position: absolute;
color: transparent;
bottom: 0;
font-size: 4rem;
z-index: 999999;
display: flex;
align-items: center;
text-align: center;
justify-content: center;
margin: 0 auto;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 750px;
    background-color: rgba(0, 0, 0, 0);
    transition: 1s;
    

    &:hover{
      color: white;
     background-color: rgba(0, 0, 0, 0.7);
    }
`

const Apparel = () => {
    return (
        <Container>
            <Header>SIGNATURE ATHLETES</Header>
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
      {athData.map((item) => {
        return (
  <SwiperSlide key={item.id}>
          <Nicks>{item.nicks}</Nicks>
         <Overlay>
       <img src={item.image} alt={item.nicks}/>
       </Overlay>
       <Name>{item.name}</Name>
        </SwiperSlide>
        )
      })}
       
      </Swiper>
        </Container>
    )
}

export default Apparel
