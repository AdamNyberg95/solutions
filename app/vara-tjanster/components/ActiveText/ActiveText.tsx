import React from 'react';
import {
  Box,
  StyledActiveText,
  StyledActiveTitle,
  StyledContainer,
  StyledKeywords,
  StyledLine,
  Text,
} from './ActiveText.styled';

type ActiveTextProps = {
  text: string;
  activeTitle: string;
  activeText: string;
  keywords: string[];
};

const ActiveText: React.FC<ActiveTextProps> = ({
  activeText,
  activeTitle,
  keywords,
}) => {
  return (
    <StyledContainer>
      <Box style={{ minHeight: '70px' }}>
        <StyledActiveTitle> {activeTitle} </StyledActiveTitle>
      </Box>
      <Box>
        <StyledActiveText> {activeText} </StyledActiveText>
      </Box>
      <Box>
        {keywords.map((keyword, index) => (
          <StyledKeywords key={index}>{keyword}</StyledKeywords>
        ))}
      </Box>
    </StyledContainer>
  );
};

export default ActiveText;
