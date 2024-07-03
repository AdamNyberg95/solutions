'use client';

import React, { useEffect, useState } from 'react';
import {
  BtnPrimarySmall,
  BtnSmallTypography,
  Container,
  Logga,
  LoggoNavWrapper,
  NavLinks,
  NavList,
  Wrapper,
} from './Header.styled';
import logga2 from '../../assets/icons/logga1.png';
import Image from 'next/image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { display: 'Våra tjänster', path: 'vara-tjanster' },
    { display: 'Om oss', path: 'about' },
    { display: 'Case', path: 'cases' },
    { display: 'Kontakt', path: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container>
      <Wrapper isScrolled={isScrolled}>
        <NavList>
          <LoggoNavWrapper>
            <Logga>
              <Link href={`/`}>
                <Image src={logga2} alt="logga" width={75} height={65} />{' '}
              </Link>
            </Logga>
            {links.map((link, index) => (
              <NavLinks key={index}>
                <Link href={`/${link.path}`} passHref>
                  {link.display}
                </Link>
              </NavLinks>
            ))}
          </LoggoNavWrapper>
          <BtnPrimarySmall>
            <BtnSmallTypography>Boka möte </BtnSmallTypography>{' '}
            <IoIosArrowRoundForward size={23} color="white" />
          </BtnPrimarySmall>
          <ThemeToggle />
        </NavList>
      </Wrapper>
    </Container>
  );
};
