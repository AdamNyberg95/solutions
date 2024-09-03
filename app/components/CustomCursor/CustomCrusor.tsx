import React, { useEffect, useState } from 'react'
import {Cursor, Wrapper} from '../CustomCursor/CustomCursor.styled'
import { StyledArrowIcon } from '@/app/components/Hero/Hero.styled';

interface CursorProps {
    x: number;
    y: number;
    text: string;
  }

const CustomCursor: React.FC<CursorProps> = ({ x, y , text}) => {
    return(
        <Cursor style={{ left: `${x}px`, top: `${y}px`, display: x === 0 && y === 0 ? 'none' : 'block' }}>
        <Wrapper> {text}<StyledArrowIcon size={18} /> </Wrapper>
      </Cursor>
    )
}

export default CustomCursor;