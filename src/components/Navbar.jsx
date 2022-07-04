import React, {useState} from 'react'
import styled from 'styled-components'
import nikeLogo from '../image/nike_PNG18.png'
import { Search, ShoppingCartOutlined } from "@material-ui/icons";

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
padding: 0.5rem 2rem 0rem 2rem;
background-color: white;
`
const LogoContainer = styled.div`
display: flex;
align-items: center;
`
const Logo = styled.div`
background-image: url(${nikeLogo});
width: 4rem;
height: 4rem;
background-position: center;
background-repeat: no-repeat;
background-size: contain;
`

const NavContent = styled.div`
display: flex;
align-items: center;
gap: 1rem;
width: 60%;
${'' /* justify-content: center; */}
${'' /* background: red; */}
`
const NavItems = styled.div`
display: flex;
align-items: center;
cursor: pointer;
width: 100%;
position: relative;
${'' /* background-color: green; */}
height: 80%;
justify-content: center;
transition: 0.3s ease-out;

  &::after{
  content: "";
  height: 5px;
  width: 0%;
  background: lightgray;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: 0.6s;
 
}
 &:hover::after{
    width: 100%;
  }


`

const NavEnd = styled.div`
display: flex;
align-items: center;
`

const Navbar = () => {

const [activeMenu, isActiveMenu] = useState(false);


    return (
        <NavContainer>
        <LogoContainer>
        <Logo />
        </LogoContainer>
        <NavContent>
        <NavItems>What's New</NavItems>
             <NavItems>Men</NavItems>
             <NavItems>Women</NavItems>
              <NavItems>Kids</NavItems>
                 <NavItems>Personalize</NavItems>
                    <NavItems>Collections</NavItems>
                       <NavItems>Sales</NavItems>
                       <>
                        <Search />
                       </>
            </NavContent>
            <NavEnd>
                <ShoppingCartOutlined style={{cursor: 'pointer'}} />
            </NavEnd>
        </NavContainer>
    )
}

export default Navbar
