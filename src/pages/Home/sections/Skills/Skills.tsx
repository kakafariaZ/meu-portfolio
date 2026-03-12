import { styled, Typography, Container, Grid, Chip, Box } from "@mui/material";
import BoltIcon from "@mui/icons-material/Bolt";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { DiMysql, DiPostgresql } from "react-icons/di";
import {
  SiTypescript,
  SiPython,
  SiGo,
  SiReact,
  SiDocker,
  SiFigma,
} from "react-icons/si";

const StyledSkills = styled("section")(() => ({
  background: "#005e51",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  scrollMarginTop: "80px", 
  padding: "100px 0",
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  fontSize: "1.5rem",
  padding: "16px",
  borderRadius: "12px",
  background: "rgba(255,255,255,0.08)",
  color: theme.palette.primary.main,
  backdropFilter: "blur(8px)",
  scrollMarginTop: "80px",

  "& svg": {
    fontSize: "1.3rem",
  },

  "&:hover": {
    transform: "translateY(-6px) scale(1.05)",
    background: theme.palette.secondary.main,
  },
}));

const skills = [
  { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { name: "Python (FastAPI)", icon: <SiPython color="#ffb515" /> },
  { name: "Go", icon: <SiGo color="#00b0c7" /> },
  { name: "Node.js", icon: <FaNodeJs color="#108b00" /> },
  { name: "React", icon: <SiReact color="#61DAFB" /> },
  { name: "MySQL", icon: <DiMysql color="#004b9b" /> },
  { name: "PostgreSQL", icon: <DiPostgresql color="#007bff" /> },
  { name: "Git", icon: <FaGitAlt color="#fbff00" /> },
  { name: "Docker", icon: <SiDocker color="#2496ED" /> },
  { name: "Figma", icon: <SiFigma color="#ffbb00" /> },
];

const Skills = () => {
  return (
    <StyledSkills id="habilidades">
      <Container maxWidth="md">
        <Box textAlign="center" mb={8}>
          <Typography
            variant="h2"
            fontWeight="bold"
            color="primary.main"
            gutterBottom
          >
            <BoltIcon sx={{ mr: 2, fontSize: 60, verticalAlign: "middle" }} />
            Habilidades
          </Typography>

          <Typography variant="h5" color="primary.main" sx={{ opacity: 0.8 }}>
            Tecnologias e ferramentas que utilizo no desenvolvimento
          </Typography>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {skills.map((skill, index) => (
            <Grid key={index}>
               <SkillChip icon={skill.icon} label={skill.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
