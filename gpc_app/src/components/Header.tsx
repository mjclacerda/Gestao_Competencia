import React from "react";
import { Box, Button, Menu, MenuItem, styled, Typography } from "@mui/material";
import Admin from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";
import { FlexBox, StyledAvatar, StyledHeader } from "./Component";

export const linkStyle = {
  margin: "0",
  textDecoration: "none",
  color: "black",
};

const Adbutton = styled(Button)({
  textTransform: "none",
  fontSize: 14,
  color: "#ffffff",
  fontFamily: ["sans-serif"].join(","),
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
    <StyledHeader>
      <Box flex="1">
        <FlexBox style={{ alignItems: "center" }}>
          <StyledAvatar
            style={{ width: 55, height: 38, marginLeft: 3 }}
            alt="SkillManager"
            src="./brain.svg"
          />
          <Typography
            style={{
              color: "white",
              fontFamily: "sans-serif",
              fontSize: 18,
              fontWeight: "bolder",
            }}
          >
            SkillManager
          </Typography>
        </FlexBox>
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
          <Link to="/" style={linkStyle}>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Link>
        </Menu>
      </Box>
    </StyledHeader>
  );
}
