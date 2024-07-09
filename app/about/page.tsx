'use client';

import React from 'react';
import { Border, Card, CardTitle, CardWrapper, StyledSection, TextWrapper, Title2, UnderTitle, Text, CompetenceWrapper, CompetenceBorder, TextWithBtnWrapper, StyledImage } from './page.styled';
import { TitleWrapper } from '../components/About/About.styled';
import { H2, StyledArrowIcon, TypographyBigThin } from '../components/Hero/Hero.styled';
import saraImg from '../../../solutions/app/assets/images/Sara-2.jpg';
import { BtnPrimarySmall, BtnSmallTypography } from '../components/Header/Header.styled';

const About: React.FC = () => {
  const text = 'SA Solutions är ett nystartat web-solution bolag, vars syfte är att hjälpa individer med att skapa digitala lösningar för deras företag. Vår vision är att tillsammans med företag se till så deras digitala lösningar hänger med i dagens teknologi. SA Solutions är belägna i Stockholm och på Åland. <br></br> Vi som står bakom SA Solutions är två frontend utvecklare Sara och Adam,som båda är passionerad av att skapa den bästa weblösningen för ditt företag. Med vår tidigare efarenhet av frontend utveckling tror vi att vi kan hjälpa ditt företag att hålla sig i upto date med dagens tekonlogi.'
  const textSara = 'Jag har inom min frontend utbildning varit intern på tech partnern Qte development från november 2023 - juni 2024. Som intern på Qte development har jag fått var en del av spännande kundprojekt och haft eget ansvar över frontend delen av adminnplattfor tillhörande en applikation för en hårtransplantaions klinik. <br></br> Jag tog examen som frontend utvecklar juni 2024 är nu super-pepp på att bygga upp SA Solutions och börja hjälpa företag att hålla sig upto date med dagens tekonoligi.'
  const competenceListSara = ['React JS', 'TypeScript', 'JavaScript', 'Next JS', 'HTML', 'CSS'];
  const competenceListAdam = ['React JS'];

  return (<>
    <StyledSection>
      <TitleWrapper>
        <h1>Om oss</h1>
        <H2>Vi är SA Solutions</H2>
        <TypographyBigThin dangerouslySetInnerHTML={{ __html: text }} />
      </TitleWrapper>

      <CardWrapper>
        <Card>
          <StyledImage src={saraImg} alt={'profileImg'} width={350} height={400}></StyledImage>
          <TextWrapper>
            <CardTitle>Adam Nyberg</CardTitle>
            <UnderTitle>Coding since, XX</UnderTitle>
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

        <Card>
      
          <TextWrapper>
            <CardTitle>Sara Södergård</CardTitle>
            <UnderTitle>Coding since, februari 2022</UnderTitle>
            <Border />
            <Title2>Om Sara</Title2>
            <Text dangerouslySetInnerHTML={{ __html: textSara }} />
            <TextWithBtnWrapper>
              <Text> Kolla in min portfolio för att ta del av mina tidigare projekt </Text>
              <BtnPrimarySmall style={{ marginLeft: '10px' }}><BtnSmallTypography>Saras portfolio </BtnSmallTypography>
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
          <StyledImage src={saraImg} alt={'profileImg'} width={350} height={420}></StyledImage>

        </Card>
      </CardWrapper>





    </StyledSection>
  </>
  );
};

export default About;
