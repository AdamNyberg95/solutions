import React from 'react';
import { StyledActiveText, StyledActiveTitle, StyledContainer, StyledLine, Text } from './ActiveText.styled';

type ActiveTextProps = {
  text: string;
  activeTitle: string;
  activeText: string;
};

const ActiveText: React.FC<ActiveTextProps> = ({ activeText , activeTitle }) => {
  return (
    <StyledContainer>
      <div
        style={{ display: 'flex', justifyContent: 'flex-start', width: '85%' }}
      >
      <StyledActiveTitle> {activeTitle} </StyledActiveTitle> 
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'flex-start', width: '85%', marginTop: '-30px' }}
      >
       <StyledActiveText>  {activeText}  </StyledActiveText> 
      </div>

      <div
        style={{ display: 'flex', justifyContent: 'flex-start', width: '85%', marginTop: '-30px' }}
      >
       <Text>Responsiv design</Text>
       <Text>Tillgänglighet</Text>
       <Text>Tillgänglighet</Text>


      </div>

      
    
    </StyledContainer>
  );
};

export default ActiveText;
