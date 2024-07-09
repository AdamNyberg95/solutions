import styled from 'styled-components';

interface ScrollProps {
  isScrolled: boolean;
}

interface NavLinkProps {
  activeclassname: string;
}

export const Container = styled.header`
  position: fixed;
  gap: 16px;
  width: 100%;
  align-items: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
  justify-content: center;
  top: 0;
`;

export const Wrapper = styled.nav<ScrollProps>`
  width: ${({ isScrolled }) => (isScrolled ? '95%' : '100%')};
  margin-top: ${({ isScrolled }) => (isScrolled ? '10px' : '')};
  padding: ${({ isScrolled }) => (isScrolled ? '0px' : '10px')};
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '1.5px 1.5px 2px 2px rgba(0.1, 0.1, 0.1, 0.1)' : 'none'};
  border-radius: ${({ isScrolled }) => (isScrolled ? '10px' : '0')};
  height: 70px;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-out;
  background: ${({ isScrolled }) =>
    isScrolled
      ? 'var(--header-color-light-beigeWhite)'
      : 'var(--header-color-light-beigeWhite)'};
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 0px 50px;

  &:hover li:not(:hover) a {
    opacity: 0.5;
  }
`;

export const LoggoNavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Logga = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 16px;

  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.3s ease;
  }
`;

export const BtnPrimary = styled.button`
  width: 145px;
  height: 45px;
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  background-color: var(--btn-background-color);
  border-color: white;
  cursor: pointer;
`;


export const BtnPrimarySmall = styled.button`
  width: 132px;
  height: 36px;
  border-radius: 20px;
  padding: 5px 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: solid 1px;
  background-color: var(--btn-background-color);
  border-color: white;
  cursor: pointer;
`;

export const BtnSmallTypography = styled.p`
  font-size: 14px;
  color: var(--btn-typography-color);
`;
