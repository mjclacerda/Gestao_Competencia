import styled from "styled-components";

const StyledBox = styled.div`
  display: flex;
  max-width: 88%;
  max-height: 30px;
`;

const Simplebar = styled.div`
  //Estas configurações estão de acordo com o Side_menu
  display: flex;
  background: #cfcfcf;
  border: none;
  color: white;
  width: 85vw;
  min-width: "80vw";
  max-width: "85vw";
  min-height: 35px;
  font-family: Verdana, Geneva, Tahoma, sans-serif, Times, serif;
  font-size: 16px;
  align-items: center;
`;

const Avatar = styled.img`
  width: 25px;
  height: 25px;
  margin-left: 4px;
  margin-right: 4px;
`;

interface IBar {
  bg?: string;
  path?: string;
  title?: string;
}

export default function Bar({ bg, path, title }: IBar) {
  return (
    <StyledBox>
      <Simplebar style={{ background: bg }}>
        <Avatar alt={title} src={path} />
        {title}
      </Simplebar>
    </StyledBox>
  );
}
