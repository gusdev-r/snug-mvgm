import defaultImg from '../../assets/images/grey.png'
import { Footer } from '../../components/Footer/footer'
import { HeaderHome } from './components/headerHome/headerHome'

import { MdEmail } from 'react-icons/md'

import {
  Buttons,
  ContactBox,
  ContactContainer,
  ContactLink,
  ContactSection,
  ContainerButtons,
  DescribeContainer,
  DescribeImg,
  DescribeSection,
  IconContact,
  InfoContainer,
  MainContent,
  PageContainer,
  StyledBigTitle,
  StyledMediumSubTitle,
  StyledMediumTitle,
  StyledSmallSubTitle,
  StyledSmallTitle,
  WelcomeContainer,
  WelcomeSection,
} from './style'

import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <>
      <PageContainer>
        <HeaderHome />

        <MainContent>
          <WelcomeSection>
            <WelcomeContainer>
              <StyledBigTitle>
                Bem-vindo ao portifólio de Gustavo Henrique Moreira
              </StyledBigTitle>
              <InfoContainer>
                <StyledSmallSubTitle textAling="center" maxWidth="50rem">
                  Bem-vindo ao portfólio de{' '}
                  <span style={{ color: 'var(--grey6)' }}>
                    Gustavo Henrique Moreira (gusdev_r).
                  </span>{' '}
                  Aqui você encontrará uma visão completa sobre minhas
                  experiências, projetos desenvolvidos e as tecnologias que
                  domino. Sinta-se à vontade para explorar e conhecer mais sobre
                  minha trajetória!
                </StyledSmallSubTitle>{' '}
                <ContainerButtons justifyContent="center">
                  <Buttons
                    className="projects"
                    onClick={() => navigate('/projects')}
                  >
                    Projetos
                  </Buttons>
                </ContainerButtons>
              </InfoContainer>
            </WelcomeContainer>
          </WelcomeSection>
          <DescribeSection>
            <DescribeImg src={defaultImg} alt="img" />
            <DescribeContainer>
              <StyledMediumTitle color="var(--grey6)" maxWidth="40rem">
                Afinal, quem é Gustavo?
              </StyledMediumTitle>
              <StyledSmallSubTitle>
                No ano de 2022 tive meu primeiro contato com a área de
                tecnologia e, desde então, juntei as coisas que eu sempre gostei
                de fazer, tecnlogia e resolver problemas. Desde então, venho
                constantemente inovando e buscando mais conhecimento, realizando
                projetos, trabalhando principalmente com{' '}
                <span style={{ color: 'var(--grey6)' }}>
                  Java, Python e JavaScript
                </span>{' '}
                no cotidiano. Atualmente estou cursando{' '}
                <span style={{ color: 'var(--grey6)' }}>
                  Engenharia de Software
                </span>{' '}
                na Universidade Católica de Brasília.
              </StyledSmallSubTitle>
              <ContainerButtons>
                <Buttons
                  onClick={() => {
                    navigate('/knowledges')
                  }}
                >
                  Conhecimentos
                </Buttons>
                <Buttons
                  onClick={() => {
                    navigate('/social')
                  }}
                >
                  Redes sociais
                </Buttons>
              </ContainerButtons>
            </DescribeContainer>
          </DescribeSection>
          <div id="handleInteress">
            <DescribeContainer>
              <StyledMediumTitle
                textAling="center"
                color="var(--grey6)"
                maxWidth="40rem"
              >
                Planos futuros e principais interesses
              </StyledMediumTitle>
              <StyledSmallSubTitle textAling="center">
                Além de buscar novos conhecimentos dentro das tecnologias que
                englobam o{' '}
                <span style={{ color: 'var(--grey6)' }}>
                  desenvolvimento Full-Stack
                </span>
                , a cultura{' '}
                <span style={{ color: 'var(--grey6)' }}>DevOps</span> entra como
                um ramo que frequentemente viso aprimorar nos próximos anos.
                Também, certificações da{' '}
                <span style={{ color: 'var(--grey6)' }}>AWS e Azure</span> são
                elementos que busco acrescenter brevemente na minha carreira.{' '}
                <span style={{ color: 'var(--grey6)' }}></span>
              </StyledSmallSubTitle>
            </DescribeContainer>
          </div>
          <div>
            <StyledMediumSubTitle textAling="center" fontSize="1.5rem">
              <span style={{ color: 'var(--grey7)', fontWeight: 700 }}>
                Principal Contato
              </span>
            </StyledMediumSubTitle>
            <ContactSection>
              <ContactContainer>
                <ContactBox>
                  <IconContact>
                    <MdEmail />
                  </IconContact>
                  <StyledSmallTitle>Email</StyledSmallTitle>
                  <StyledSmallSubTitle maxWidth="80%">
                    Entre em contato com e-mail abaixo, ou se preferir, na seção
                    de redes sociais, você encontrará outras maneiras de falar
                    comigo.
                  </StyledSmallSubTitle>
                  <ContactLink href="mailto:g.hen.moreira@gmail.com">
                    g.hen.moreira@gmail.com
                  </ContactLink>
                </ContactBox>
              </ContactContainer>
            </ContactSection>
          </div>
        </MainContent>

        <Footer />
      </PageContainer>
    </>
  )
}

export default Home
