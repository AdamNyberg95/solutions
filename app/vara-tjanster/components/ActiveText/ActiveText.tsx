import React from 'react';
import { Box, StyledActiveText, StyledActiveTitle, StyledContainer, StyledKeywords, StyledLine, Text } from './ActiveText.styled';

type ActiveTextProps = {
  text: string;
  activeTitle: string;
  activeText: string;
  keywords: string[]; 
};

const ActiveText: React.FC<ActiveTextProps> = ({ activeText , activeTitle, keywords }) => {
  return (
    <StyledContainer>
      <Box

      >
      <StyledActiveTitle> {activeTitle} </StyledActiveTitle> 
      </Box>

      <Box
        style={{  marginTop: '-30px' }}
      >
       <StyledActiveText>  {activeText}  </StyledActiveText> 
      </Box>

      <Box
        style={{ marginTop: '-30px' }}
      >
       
        {keywords.map((keyword, index) => (
          <StyledKeywords key={index}>{keyword}</StyledKeywords>
        ))}
     


      </Box>

      
    
    </StyledContainer>
  );
};

export default ActiveText;
