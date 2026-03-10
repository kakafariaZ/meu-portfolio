/* eslint-disable react-hooks/static-components */
import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () => {

    const StyledToolbar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

    return (
    <>
        <AppBar position="absolute">
            <StyledToolbar>
            <MenuItem sx={{ color: "rgb(16, 68, 128)" }}>Sobre</MenuItem>
            <MenuItem sx={{ color: "rgb(16, 68, 128)" }}>Habilidades</MenuItem>
            <MenuItem sx={{ color: "rgb(16, 68, 128)" }}>Projetos</MenuItem>
            </StyledToolbar>
        </AppBar>
    </>
    )
}

export default NavBar