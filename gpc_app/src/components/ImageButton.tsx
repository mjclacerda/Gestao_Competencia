import { Typography } from "@mui/material";
import styled from "styled-components";

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

const SButton = styled.button`
  width: 250px;
  height: 200px;
  background: none;
  border: none;
  border-radius: 10px;
  &:hover {
    background: #e0dedcc2;
  }
  &:active {
    background: #f0eeee9d;
  }
  position: relative;
`;

interface IImag {
  bg?: string;
  path?: string;
  title?: string;
  x?: string;
  y?: string;
}

export default function ImageButton({ title, path, x, y }: IImag) {
  return (
    <SButton style={{ top: y, left: x }}>
      <Avatar alt={title} src={path} />
      <Typography style={{ fontSize: 18 }}>{title}</Typography>
    </SButton>
  );
}
