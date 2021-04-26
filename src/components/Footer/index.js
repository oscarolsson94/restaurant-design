import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter
  } from 'react-icons/fa';
  import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
  } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Pizza</SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="/" target="blank_" aria-label="Facebook" rel="noopener noreferrer" >
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank_" aria-label="Instagram" rel="noopener noreferrer" >
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank_" aria-label="Youtube" rel="noopener noreferrer" >
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="blank_" aria-label="Twitter" rel="noopener noreferrer" >
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;
