import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"


const Button = styled.button`
background: #16181a;
  background-image: -webkit-linear-gradient(top, #16181a, #424445);
  background-image: -moz-linear-gradient(top, #16181a, #424445);
  background-image: -ms-linear-gradient(top, #16181a, #424445);
  background-image: -o-linear-gradient(top, #16181a, #424445);
  background-image: linear-gradient(to bottom, #16181a, #424445);
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  color: #ffffff;
  font-size: 21px;
  font-weight: 600;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  align-text: center;
  justify-content: center;
  width: 12%;
  height: 40px;
  margin-top: 2rem !important;
  margin: 0 auto;
  cursor: pointer;
 -webkit-box-shadow: 5px 2px 4px -1px rgba(0,0,0,0.5);
-moz-box-shadow: 5px 2px 4px -1px rgba(0,0,0,0.5);
box-shadow: 5px 5px 4px -1px rgba(0,0,0,0.51);
transition: all 0.5s ease-out;
font-family: 'Poppins', sans-serif;

  &:hover{
color: black;
background: rgba(226,226,226,1);
background: -moz-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%);
background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(226,226,226,1)), color-stop(50%, rgba(219,219,219,1)), color-stop(51%, rgba(209,209,209,1)), color-stop(100%, rgba(254,254,254,1)));
background: -webkit-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%);
background: -o-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%);
background: -ms-linear-gradient(top, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%);
background: linear-gradient(to bottom, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe', GradientType=0 );
    border: none;
  }
`

const ShopButton = () => {
  return (
    <Button as={motion.div} whileHover={{scale: 1.1}} whileTap={{scale: 0.9}}>SHOP NOW</Button>
  )
}

export default ShopButton