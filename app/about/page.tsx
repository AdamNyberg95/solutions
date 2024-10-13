'use client';

import React, { useEffect, useRef, useState } from 'react';
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
import { StyledLink, TitleWrapper } from '../components/About/About.styled';
import {
  StyledArrowIcon,
  TypographyBigThin,
} from '../components/Hero/Hero.styled';
import {
  BtnPrimarySmall,
  BtnSmallTypography,
} from '../components/Header/Header.styled';
import H2 from '@/src/components/Typography/H2';

const About: React.FC = () => {
  const [isMobileView, setIsMobileView] = useState(false); // Initialize to false
  const adamSectionRef = useRef<HTMLDivElement | null>(null);
  const saraSectionRef = useRef<HTMLDivElement | null>(null);

  const text =
    'SA Solutions är ett nystartat web-solution bolag, vars syfte är att hjälpa företag skapa digitala lösningar. Vår vision är att tillsammans med företag se till så deras digitala lösningar hänger med i dagens teknologi. SA Solutions är belägna i Stockholm och på Åland. <br></br> Vi som står bakom SA Solutions är två utvecklare som båda brinner för att skapa den bästa weblösningen för ditt företag. Med vår tidigare efarenhet av utveckling tror vi att vi kan hjälpa ditt företag att hålla sig i upto-date med dagens tekonlogi.';
  const textSara =
    'Jag är en Frontend utvecklare med passion för UX/UI design. Jag har tidigare varit intern på tech partnern Qte development där jag varit del av flera spännande projekt, bland annat har jag haft eget ansvar över frontend delen av en adminplattform tillhörande en applikation för en hårtransplantaions klinik. <br></br> Jag tog examen som frontend utvecklare juni 2024 och är nu super-pepp på att börja hjälpa företag att vara upto-date med dagens tekonologi.';

  const competenceListSara = [
    'React JS',
    'TypeScript',
    'JavaScript',
    'Next JS',
    'HTML',
    'CSS',
    'UX/UI',
    'Figma',
  ];
  const competenceListAdam = [
    'React',
    'Next JS',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Java',
    'Node JS',
  ];

  const textAdam =
    'Jag är en Frontend utvecklare med erfarenhet av fullstack utveckling. Jag har varit med och byggt E-GO App från grunden, där jag haft ansvar för både frontend och backend. Under min tid på E-GO har jag varit involverad i flera spännande projekt, vilket har gett mig värdefull erfarenhet och insikter i hur man skapar effektiva och användarvänliga applikationer.';

  useEffect(() => {
    // Check if window is defined before accessing it
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobileView(window.innerWidth <= 768);
      }
    };

    handleResize(); // Set initial value on mount

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Ensure window is defined
      const hash = window.location.hash.substr(1);
      let yOffset = -65;

      switch (hash) {
        case 'adamSection':
          scrollToSection(adamSectionRef, yOffset);
          break;
        case 'saraSection':
          scrollToSection(saraSectionRef, yOffset);
          break; // Missing break here
        default:
          break;
      }
    }
  }, []);

  const scrollToSection = (
    ref: React.RefObject<HTMLDivElement>,
    yOffset: number
  ) => {
    if (ref.current && typeof window !== 'undefined') {
      // Ensure window is defined
      const y =
        ref.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <StyledSection id="about">
        <TitleWrapper>
          <h1>Om oss</h1>
          <H2 color={'var(--text-color)'} fontSize={'45px'} fontWeight="300" >Vi är SA Solutions</H2>
          <TypographyBigThin dangerouslySetInnerHTML={{ __html: text }} />
        </TitleWrapper>

        <CardWrapper>
          <Card ref={adamSectionRef} id="adamSection">
            <StyledImage
              src={'/adam.jpeg'}
              alt={'profileImg'}
              width={350}
              height={350}
            />
            <TextWrapper>
              <CardTitle>Adam Nyberg</CardTitle>
              <UnderTitle>Coding since, 2020</UnderTitle>
              <UnderUnderTitle>
                Frontend utvecklare & Backend utvecklare
              </UnderUnderTitle>

              <Border />
              <Title2>Om Adam</Title2>
              <Text dangerouslySetInnerHTML={{ __html: textAdam }} />
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

          <Card ref={saraSectionRef} id="saraSection">
            {isMobileView && (
              <StyledImage
                src={'/Sara-2.jpg'}
                alt={'profileImg'}
                width={350}
                height={350}
              />
            )}
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
                <StyledLink
                  href="https://portfolio-sarasodergard.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BtnPrimarySmall style={{ marginLeft: '10px' }}>
                    <BtnSmallTypography>Saras portfolio</BtnSmallTypography>

                    <StyledArrowIcon
                      color={'var(--text-blackdarkmode-whitelightmode)'}
                      size={23}
                    />
                  </BtnPrimarySmall>
                </StyledLink>
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
            {!isMobileView && (
              <StyledImage
                src={'/Sara-2.jpg'}
                alt={'profileImg'}
                width={350}
                height={350}
              />
            )}
          </Card>
        </CardWrapper>
      </StyledSection>
    </>
  );
};

export default About;
