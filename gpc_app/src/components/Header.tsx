import React from "react";
import { Box, Button, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Admin from "@mui/icons-material/AdminPanelSettings";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";

export const linkStyle = {
  margin: "0",
  textDecoration: "none",
  color: "black",
};

const Adbutton = styled(Button)({
  textTransform: "none",
  fontSize: 14,
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

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box display="flex" sx={{ bgcolor: "#0082fb" }}>
      <Box flex="1">
        <IconButton size="large" edge="start" color="default" aria-label="menu">
          <MenuIcon sx={{ color: "white", width: "50px", marginLeft: 2 }} />
        </IconButton>
      </Box>
      <Box marginTop="6px">
        <Adbutton
          variant="text"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          Admin
          <Admin sx={{ color: "white" }} />
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
          <Link to="/login" style={linkStyle}>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Link>
        </Menu>
      </Box>
    </Box>
  );
}
