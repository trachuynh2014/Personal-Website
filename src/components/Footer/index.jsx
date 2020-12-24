import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FaGithub, FaLinkedin} from 'react-icons/fa/index';
import {AiFillHome, AiFillMail} from 'react-icons/ai/index';
import {BiPhone} from 'react-icons/bi/index';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksWrapper, SocialMediaWrap, SocialIconLink, SocialIcons, WebsiteLogo, SocialMedia, WebsiteRights  } from './FooterElements';
const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Development </FooterLinkTitle>
                                <FooterLink >Python</FooterLink>
                                <FooterLink >Java</FooterLink>
                                <FooterLink >JavaScript</FooterLink>
                                <FooterLink >HTML5</FooterLink>
                                <FooterLink >CSS</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Hard skills </FooterLinkTitle>
                                <FooterLink >Word, Excel, PowerPoint</FooterLink>
                                <FooterLink >React.js</FooterLink>
                                <FooterLink >Git</FooterLink>
                                <FooterLink >Object-Oriented Design</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Project </FooterLinkTitle>
                                <FooterLink >Student Registry Simulator</FooterLink>
                                <FooterLink >Searchable movie React app</FooterLink>
                                <FooterLink >MovieCrunchers</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact </FooterLinkTitle>
                                <FooterLink ><AiFillHome/> Toronto, ON M6J 2M4</FooterLink>
                                <FooterLink ><AiFillMail/> dinh.huynh@ryerson.ca</FooterLink>
                                <FooterLink ><BiPhone/> +1 (647) 819-0382</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <WebsiteLogo to="/" onClick={toggleHome}>Finn Huynh</WebsiteLogo>
                        <WebsiteRights>Finn Huynh © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://github.com/trachuynh2014" target="_blank" arial-label="Github">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/in/finn-huynh/" target="_blank" arial-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
