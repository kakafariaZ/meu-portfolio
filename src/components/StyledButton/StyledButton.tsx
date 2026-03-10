import { styled } from "@mui/material"
import { type ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const ButtonRoot = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: "4px",
    padding: "8px 18px",
    width: "100%",
    color: theme.palette.primary.main,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    transition: "0.2s",

    "&:hover": {
        backgroundColor: theme.palette.primary.dark
    }
}))

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => {
    return (
        <ButtonRoot onClick={onClick}>
            {children}
        </ButtonRoot>
    )
}

export default StyledButton