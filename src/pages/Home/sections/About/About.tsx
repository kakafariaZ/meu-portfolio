import { Container, Grid, Typography, styled } from "@mui/material"

const About = () => {

    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0",
        },
    }))

  return (
    <>
        <StyledAbout>
            <Container>
                <Grid size={{xs: 12, md: 7}} >
                    <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>SOBRE MIM</Typography>
                    <Typography color="primary.contrastText" variant="h4" textAlign="center" pb={2}>"Estudante de Engenharia de Computação em busca de uma oportunidade de estágio em Desenvolvimento Full Stack. Tenho como objetivo aplicar meus conhecimentos para construir soluções escaláveis, focando na integração eficiente entre sistemas e na entrega de interfaces de alta qualidade técnica."</Typography>
                </Grid>
            </Container>
        </StyledAbout>
        
    </>
  )
}

export default About
