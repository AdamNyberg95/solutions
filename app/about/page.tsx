'use client';

import React, { useEffect, useRef } from 'react';
import {
  Border,
  Card,
  CardTitle,
  CardWrapper,
  StyledSection,
  TextWrapper,
  Title2,
  UnderTitle,
  Text,
  CompetenceWrapper,
  CompetenceBorder,
  TextWithBtnWrapper,
  StyledImage,
  UnderUnderTitle,
} from './page.styled';
import { TitleWrapper } from '../components/About/About.styled';
import {
  H2,
  StyledArrowIcon,
  TypographyBigThin,
} from '../components/Hero/Hero.styled';
import {
  BtnPrimarySmall,
  BtnSmallTypography,
} from '../components/Header/Header.styled';
import H1 from '@/src/components/Typography/H1';

const About: React.FC = () => {
  const adamSectionRef = useRef<HTMLDivElement>(null);
  const saraSectionRef = useRef<HTMLDivElement>(null);

  const text =
    'SA Solutions är ett nystartat web-solution bolag, vars syfte är att hjälpa företag skapa digitala lösningar. Vår vision är att tillsammans med företag se till så deras digitala lösningar hänger med i dagens teknologi. SA Solutions är belägna i Stockholm och på Åland. <br></br> Vi som står bakom SA Solutions är två utvecklare som båda brinner för att skapa den bästa weblösningen för ditt företag. Med vår tidigare efarenhet av utveckling tror vi att vi kan hjälpa ditt företag att hålla sig i upto-date med dagens tekonlogi.';
  const textSara =
    'Jag är en Frontend utvecklare med passion för UX/UI design. Jag har tidigare varit intern på tech partnern Qte development där jag varit del av flera spännande projekt, bland annat har jag haft eget ansvar över frontend delen av en adminnplattfor tillhörande en applikation för en hårtransplantaions klinik. <br></br> Jag tog examen som frontend utvecklare juni 2024 och är nu super pepp på att börja hjälpa företag vara upto-date med dagens tekonologi.';
  const competenceListSara = [
    'React JS',
    'TypeScript',
    'JavaScript',
    'Next JS',
    'HTML',
    'CSS',
    'UX/UI',
  ];
  const competenceListAdam = ['React JS', 'Backend'];


  useEffect(() => {
    const hash = window.location.hash.substr(1);
    let yOffset = -65;

    switch (hash) {
      case "adamSection":
        scrollToSection(adamSectionRef, yOffset);
        break;
      case "saraSection":
        scrollToSection(saraSectionRef, yOffset);
      default:
        break;
    }
  }, []);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    yOffset: number,
  ) => {
    if (ref.current) {
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }; 
  





 
  return (
    <>
      <StyledSection id='about'>
        <TitleWrapper>
          <h1>Om oss</h1>
          <H2>Vi är SA Solutions</H2>
          <TypographyBigThin dangerouslySetInnerHTML={{ __html: text }} />
        </TitleWrapper>

        <CardWrapper>
          <Card ref={adamSectionRef} id='adamSection' >
            <StyledImage
              src={'/adam.jpeg'}
              alt={'profileImg'}
              width={350}
              height={350}
            ></StyledImage>
            <TextWrapper>
              <CardTitle>Adam Nyberg</CardTitle>
              <UnderTitle>Coding since, XX</UnderTitle>
              <UnderUnderTitle>
                Frontend utvecklare & Backend utvecklare
              </UnderUnderTitle>

              <Border />
              <Title2>Om Adam</Title2>
              <Text></Text>
              <Border />
              <Title2>Kompetenser</Title2>
              <CompetenceWrapper>
                {competenceListAdam.map((competence, index) => (
                  <CompetenceBorder key={index}>
                    <Text>{competence}</Text>
                  </CompetenceBorder>
                ))}
              </CompetenceWrapper>
            </TextWrapper>
          </Card>

          <Card ref={saraSectionRef} id='saraSection'>
            <TextWrapper>
              <CardTitle>Sara Södergård</CardTitle>
              <UnderTitle>Coding since, February 2022</UnderTitle>
              <UnderUnderTitle>
                Frontend utvecklare & UX/UI designer
              </UnderUnderTitle>

              <Border />
              <Title2>Om Sara</Title2>
              <Text dangerouslySetInnerHTML={{ __html: textSara }} />
              <TextWithBtnWrapper>
                <Text>
                  {' '}
                  Kolla in min portfolio för att ta del av mina tidigare projekt{' '}
                </Text>
                <BtnPrimarySmall style={{ marginLeft: '10px' }}>
                  <BtnSmallTypography>Saras portfolio </BtnSmallTypography>
                  <StyledArrowIcon size={23} />
                </BtnPrimarySmall>
              </TextWithBtnWrapper>
              <Border />
              <Title2>Kompetenser</Title2>
              <CompetenceWrapper>
                {competenceListSara.map((competence, index) => (
                  <CompetenceBorder key={index}>
                    <Text>{competence}</Text>
                  </CompetenceBorder>
                ))}
              </CompetenceWrapper>
            </TextWrapper>
            <StyledImage
              src={'/Sara-2.jpg'}
              alt={'profileImg'}
              width={350}
              height={350}
            ></StyledImage>
          </Card>
        </CardWrapper>
      </StyledSection>
    </>
  );
};

export default About;
