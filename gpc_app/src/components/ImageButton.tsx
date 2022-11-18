import styled from "styled-components";

const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

const SButton = styled.button`
  width: 150px;
  height: 140px;
  background: none;
  border: none;
  border-radius: 10px;
  &:hover {
    background: #f0eeee9d;
  }
  &:active {
    background: #ffffff85;
  }
  position: relative;
`;

interface IImag {
  bg?: string;
  path?: string;
  title?: string;
  x: string;
  y: string;
}

export default function ImageButton({ title, path, x, y }: IImag) {
  return (
    <SButton style={{ top: y, left: x }}>
      <Avatar alt={title} src={path} />
      {title}
    </SButton>
  );
}
