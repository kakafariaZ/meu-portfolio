/* eslint-disable react-hooks/static-components */
import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-evenly",
}));

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
};

const NavBar = () => {
  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <MenuItem
          sx={{ color: "rgb(16, 68, 128)" }}
          onClick={() => scrollToSection("sobre")}
        >
          Sobre
        </MenuItem>

        <MenuItem
          sx={{ color: "rgb(16, 68, 128)" }}
          onClick={() => scrollToSection("habilidades")}
        >
          Habilidades
        </MenuItem>

        <MenuItem
          sx={{ color: "rgb(16, 68, 128)" }}
          onClick={() => scrollToSection("projetos")}
        >
          Projetos
        </MenuItem>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
