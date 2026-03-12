import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const StyledToolbar = styled(Toolbar)(() => ({
  display: "flex" ,
  justifyContent: "space-evenly",
  minHeight: "50px !important",   // altura menor
  padding: "0 16px",   // menos espaço lateral
}));

const NavBar = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255,255,255,0.15)",
        backdropFilter: "blur(12px)",
        boxShadow: "none",
        zIndex: 1100
      }}
    >
      <StyledToolbar>
        <MenuItem
          sx={{ color: "rgb(16, 68, 128)" }}
          onClick={() => scrollToSection("home")}
        >
          Home
        </MenuItem>

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