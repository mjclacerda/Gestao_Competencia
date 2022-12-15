import React from "react";
import { Box, Button, Typography, Menu, MenuItem } from "@mui/material";
import UserIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { linkStyle } from "./Header";
import { FlexBox, StyledAvatar } from "./Component";

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
  fontFamily: ["sans-serif"].join(","),
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
        <FlexBox style={{ alignItems: "center" }}>
          <StyledAvatar
            style={{ width: 55, height: 40, marginLeft: 1 }}
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
          <Link to="/login">
            <MenuItem onClick={handleClose} style={linkStyle}>
              Logout
            </MenuItem>
          </Link>
        </Menu>
      </Box>
    </StyledHeader>
  );
}
