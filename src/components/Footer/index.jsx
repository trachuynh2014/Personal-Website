import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa/index";
import { AiFillHome, AiFillMail } from "react-icons/ai/index";
import { BiPhone } from "react-icons/bi/index";
import {
  FooterContainer,
  FooterWrap,
  FooterItemsContainer,
  FooterItems,
  FooterItem,
  FooterItemTitle,
  FooterItemsWrapper,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  WebsiteLogo,
  SocialMedia,
  WebsiteRights,
} from "./FooterElements";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterItemsContainer>
          <FooterItemsWrapper>
            <FooterItems>
              <FooterItemTitle>Development </FooterItemTitle>
              <FooterItem>HTML5</FooterItem>
              <FooterItem>CSS</FooterItem>
              <FooterItem>JavaScript</FooterItem>
              <FooterItem>jQuery</FooterItem>
            </FooterItems>
            <FooterItems>
              <FooterItemTitle>Hard skills </FooterItemTitle>
              <FooterItem>Word, Excel, PowerPoint</FooterItem>
              <FooterItem>React.js</FooterItem>
              <FooterItem>Git</FooterItem>
              <FooterItem>Object-Oriented Design</FooterItem>
            </FooterItems>
          </FooterItemsWrapper>
          <FooterItemsWrapper>
            <FooterItems>
              <FooterItemTitle>Project </FooterItemTitle>
              <FooterItem>Student Registry Simulator</FooterItem>
              <FooterItem>Searchable movie React app</FooterItem>
              <FooterItem>MovieCrunchers</FooterItem>
              <FooterItem>Backend for React App</FooterItem>
            </FooterItems>
            <FooterItems>
              <FooterItemTitle>Contact </FooterItemTitle>
              <FooterItem>
                <AiFillHome /> Toronto, ON M3A 2Y7
              </FooterItem>
              <FooterItem>
                <AiFillMail /> admin@finnhuynh.me
              </FooterItem>
              <FooterItem>
                <BiPhone /> +1 (647) 819-0382
              </FooterItem>
            </FooterItems>
          </FooterItemsWrapper>
        </FooterItemsContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteLogo to="/" onClick={toggleHome}>
              Finn Huynh
            </WebsiteLogo>
            <WebsiteRights>
              Finn Huynh © {new Date().getFullYear()} All rights reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="https://github.com/trachuynh2014"
                target="_blank"
                arial-label="Github"
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href="https://www.linkedin.com/in/finn-huynh/"
                target="_blank"
                arial-label="LinkedIn"
              >
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
