import { Container, Grid, Typography, styled, Paper } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import PolylineIcon from '@mui/icons-material/Polyline';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';

const StyledAbout = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",

  [theme.breakpoints.up("xs")]: {
    paddingTop: "100px"
  },

  [theme.breakpoints.up("md")]: {
    paddingTop: "0"
  }
}))

const InfoCard = styled(Paper)(() => ({
  padding: "20px",
  backgroundColor: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255,255,255,0.1)"
}))

const About = () => {
  return (
    <StyledAbout>

      <Container maxWidth="lg">

        <Grid container spacing={6} alignItems="center">

          {/* Texto */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Typography
              variant="h3"
              color="primary.contrastText"
              gutterBottom
            >
                    Sobre mim
            </Typography>

            <Typography
              variant="h6"
              color="primary.contrastText"
              sx={{ opacity: 0.8 }}
              mb={3}
            >
              Estudante de Engenharia de Computação apaixonado por tecnologia,
              desenvolvimento de software e construção de soluções escaláveis.
            </Typography>

            <Typography
              variant="body1"
              color="primary.contrastText"
              sx={{ opacity: 0.7 }}
            >
              Busco uma oportunidade de estágio em desenvolvimento Full Stack
              onde eu possa aplicar conhecimentos em APIs, arquitetura de
              sistemas e desenvolvimento de interfaces modernas, contribuindo
              para produtos de alto impacto.
            </Typography>

          </Grid>

          {/* Cards */}
          <Grid size={{ xs: 12, md: 6 }}>

            <Grid container spacing={3}>

              <Grid size={{ xs: 12, md: 6 }}>
                <InfoCard>
                  <Typography variant="h6">
                    <CodeIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                    Desenvolvimento
                  </Typography>

                  <Typography variant="body2">
                    Experiência em aplicações web modernas e APIs REST.
                  </Typography>
                </InfoCard>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <InfoCard>
                  <Typography variant="h6">
                    <TerminalIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                    Sistemas
                  </Typography>

                  <Typography variant="body2">
                    Experiência com sistemas embarcados e prototipação.
                  </Typography>
                </InfoCard>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <InfoCard>
                  <Typography variant="h6">
                    <PolylineIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                    Blockchain
                  </Typography>

                  <Typography variant="body2">
                    Experimentos com aplicações descentralizadas.
                  </Typography>
                </InfoCard>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <InfoCard>
                  <Typography variant="h6">
                    <IntegrationInstructionsIcon sx={{ verticalAlign: "middle", mr: 1 }} />
                    Integração
                  </Typography>

                  <Typography variant="body2">
                    APIs, comunicação entre serviços e arquitetura distribuída.
                  </Typography>
                </InfoCard>
              </Grid>

            </Grid>

          </Grid>

        </Grid>

      </Container>

    </StyledAbout>
  )
}

export default About