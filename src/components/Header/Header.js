import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <button className="hamburger" onClick={handleMenuToggle}>
        {
          isMenuOpen ? <AiOutlineClose size="3rem" className='icon' /> : <AiOutlineMenu size="3rem" className='icon' />
        }
      </button>
      <Div1>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', color: "white" }}>
            <img src="/logo.png" height={40} width={40} /> <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }} >PEERANAT</span>
          </a>
        </Link>
      </Div1>
      <Div2 className={isMenuOpen ? 'open' : ''}>
        <li>
          <Link href="#skills">
            <NavLink onClick={handleMenuToggle}>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#experiences">
            <NavLink onClick={handleMenuToggle}>Experiences</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink onClick={handleMenuToggle}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#certificates">
            <NavLink onClick={handleMenuToggle}>Certificates</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#activities">
            <NavLink onClick={handleMenuToggle}>Activities</NavLink>
          </Link>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=hBBsbfe4824" target="_blank">
            <NavLink onClick={handleMenuToggle}>The Standard</NavLink>
          </a>
        </li>
        <li>
          <a href="https://medium.com/@horizon_20" onClick={handleMenuToggle}>
            <NavLink>Blog</NavLink>
          </a>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/iiiceburg">
          <AiFillGithub size="4rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/peeranat-ounhanan/">
          <AiFillLinkedin size="4rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
}
