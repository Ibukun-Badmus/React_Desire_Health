import { useEffect, useState } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import DESIREhealth from '../Images/DESIREhealth.png';
import {
    MobileIcon,
     Nav, 
     NavbarContainer, 
     NavLinks, 
     NavLogo, 
     NavMenu,
     NavItem,
     NavBtn,
     NavBtnLink
    } from './NavbarElements';

    const Navbar = ({toggle}) => {
        const [scrollNav, setScrollNav] = useState(false)

        const changeNav = () => {
            if(window.scrollY >= 80) {
                setScrollNav(true)
            } else {
                setScrollNav(false)
            }
        };

        useEffect(() => {
            window.addEventListener('scroll', changeNav)
        }, []);
 
        const toggleHome = () => {
            scroll.scrollToTop();
        };
    
    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}} >
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
                <img src={DESIREhealth} alt="DESIREhealth" />
            </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="home"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >Home</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="about"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contacts"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >Contacts</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="feedback"
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >FeedBack</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/login">Login</NavBtnLink>
            </NavBtn>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
      </>
    );
};

export default Navbar;
