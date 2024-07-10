import styled from 'styled-components';

export const StyledButton = styled.a`
  margin: 0;
  padding: 0;

  text-decoration: none;
  display: inline-block;
  padding: 10px 16px; /* Adjust padding for button size */
  color: #fff;
  background: black;
  border: 1px solid #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  transition: all 0.5s ease-out;

  &:hover {
    color: #333;
    background-color: #fff;
    border: 1px solid black;

    &:after {
      top: 0;
    }
    i {
      transform: translateY(0); /* Reset translateY */
    }
  }

  /* Icon styling */
  i {
    font-style: normal;
    font-size: 1.2rem;
    line-height: 1;
    display: inline-block;
    height: 100%;
    padding-left: 1px;
    padding-right: 1px;
    transition: transform 0.3s ease-out; /* Transition for transform */
    &:hover {
      transform: translateY(-4px); /* Move letter up on hover */
    }
  }
`;
