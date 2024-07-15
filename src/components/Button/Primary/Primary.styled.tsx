import styled from 'styled-components';

export const StyledButton = styled.a`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: flex;
  gap: 5px;
  padding: 10px 16px; /* Adjust padding for button size */
  color: #fff;
  background: var(--btn-background-color);
  border: 1px solid #fff;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  transition: all 0.5s ease-out;
  width: fit-content;

  &:hover {
    background-color: var(--btn-hover-color);
    &:after {
      top: 0;
    }
    i {
      transform: translateY(0); /* Reset translateY */
    }
  }

  i {
    font-style: normal;
    font-size: 1rem;
    line-height: 1;
    display: inline-block;
    height: 100%;

    transition: transform 0.3s ease-out; /* Transition for transform */
    &:hover {
      transform: translateY(-4px); /* Move letter up on hover */
    }
  }
`;
