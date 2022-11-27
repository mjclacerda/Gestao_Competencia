import React from "react";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import UserIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import Styled from "styled-components";

const StyledHeader = Styled.div`
  display: flex;
  background-color: #252525;
  height: 5vh;
  width: 100vw;
`;

const Adbutton = styled(Button)({
  textTransform: "none",
  fontSize: 14,
  marginRight: 3,
  color: "#ffffff",
  fontFamily: [
    "Roboto",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
});

export default function Header_user() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <StyledHeader>
      <Box flex="1">
        <IconButton size="large" edge="start" color="default" aria-label="menu">
          <MenuIcon sx={{ color: "white", width: "50px", marginLeft: 2 }} />
        </IconButton>
      </Box>
      <Box marginTop="6px">
        <Adbutton
          size="large"
          variant="text"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Username
          <UserIcon sx={{ color: "white", fontSize: "large", marginLeft: 1 }} />
        </Adbutton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </Box>
    </StyledHeader>
  );
}
