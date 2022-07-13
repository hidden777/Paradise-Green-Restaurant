import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIconLink,
    SocialIcons
} from './FooterElement';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';
// import {BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">PG Restaurant</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Facebook" rel="noopener noreferrer">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Instagram" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Youtube" rel="noopener noreferrer">
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="Twitter" rel="noopener noreferrer">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank"
                        aria-label="LinkedIn" rel="noopener noreferrer">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer;