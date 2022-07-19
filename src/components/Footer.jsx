import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
display: flex;
width: 100%;
background-color: black;
color: white;
`
const Wrapper2 = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
`
const Wrapper1 = styled.div`
display: flex;
width: 100%;
flex-direction: column;
padding: 2rem 3rem;
`

const Left = styled.div`
display: flex;
`
const List = styled.ul`
list-style: none;
`

const ListItem = styled.li`
color: gray;
font-size: 1rem;
margin-top: 6px;
cursor: pointer;
`
const ListItemBold = styled(ListItem)`
color: white;
font-weight: 600;

`

const Right = styled.div`
display: flex;
`
const ParaText = styled.p`
`

const Footer = () => {
  return (
    <Container>
<Wrapper1>
<Wrapper2>
  <Left>
    <List>
      <ListItemBold>FIND A STORE</ListItemBold>
       <ListItemBold>BECOME A MEMBER</ListItemBold>
        <ListItemBold>SIGN UP FOR EMAIL</ListItemBold>
         <ListItemBold>STUDENT DISCOUNTS</ListItemBold>
          <ListItemBold>SEND US FEEDBACK</ListItemBold>
    </List>

     <List>
      <ListItemBold>GET HELP</ListItemBold>
       <ListItem>Order Status</ListItem>
        <ListItem>Delivery</ListItem>
         <ListItem>Returns</ListItem>
          <ListItem>Payment Options</ListItem>
           <ListItem>Contact Us On Nike.com Inquiries</ListItem>
          <ListItem>Contact Us on All Other Inquiries</ListItem>
    </List>
    

    <List>
      <ListItemBold>ABOUT NIKE</ListItemBold>
       <ListItem>News</ListItem>
        <ListItem>Careers</ListItem>
         <ListItem>Investors</ListItem>
          <ListItem>Sustainability</ListItem>
    </List>
  </Left>
  <Right>
    <List>
      <ListItem>ABC</ListItem>
       <ListItem>DEF</ListItem>
        <ListItem>GHI</ListItem>
    </List>
  </Right>
  </Wrapper2>
 <ParaText> © 2022 Nike, Inc. All Rights Reserved</ParaText>
</Wrapper1>
    </Container>
  )
}

export default Footer