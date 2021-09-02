import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll';
import DESIREhealth from '../Images/DESIREhealth.png';
import { 
    FooterContainer, 
    FooterLinksWrapper, 
    FooterWrap,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLogo,
    H1,
    SocialMedia,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    WebsiteRights,
    FooterLinksContainer
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLogo to='/' onClick={toggleHome}>
                    <img src={DESIREhealth} alt="DESIREhealth" />
                </FooterLogo>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle to='/login'>Home</FooterLinkTitle>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle to='/login'>About</FooterLinkTitle>
                            </FooterLinkItems>
                                <FooterLinkItems>
                                <FooterLinkTitle to='/login'>Services</FooterLinkTitle>
                                </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                        <WebsiteRights>Copyright(c)desirehealthinclusive.com { new Date().getFullYear() } </WebsiteRights>
                        <H1> Privacy</H1>
                        <H1>Policy</H1>
                        <SocialIcons>
                            <SocialIconLink href="//www.facebook.com/desirehealthinclusive" target="_blank" 
                            aria-label="facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="//www.instagram.com/desire_health" target="_blank" 
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                        <SocialIconLink href="//www.twitter.com/Desire_Health" target="_blank" 
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                        <SocialIcons>
                            <SocialIconLink href="//www.linkedin.com/company/desirehealth" target="_blank" 
                            aria-label="Instagram">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
