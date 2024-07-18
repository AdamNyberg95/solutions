import styled from 'styled-components';

export const Cursor = styled.div`
 position: fixed;
  pointer-events: none;
  transform: translate(-50%, -50%);
  background-color: rgba(97, 152, 148, 0.7);
  border-radius: 30px;
  width: 120px; 
  height: 25px; 
  z-index: 9999;
  color: #fff; 
  font-size: 12px; 
`;

export const Wrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 margin-top: 2.5px;
 margin-left: 2.5px;
`;
