import styled from "styled-components";

const StyledBox = styled.body`
  display: flex;
  height: 91.5vh;
  width: 87vw;
  background-color: #e0dede;
`;

//Cabeçalho principal
const StyledHeader = styled.head`
  display: flex;
  background-color: #252728;
  height: 5vh;
  width: 100vw;
`;

//Cabeçalho secundário
const StyledHead = styled.head`
  height: 3.5vh;
  display: flex;
`;

const Simplebar = styled.div`
  //Estas configurações estão de acordo com o Side_menu
  display: flex;
  background: #cfcfcf;
  border: none;
  color: white;
  width: 87vw;
  min-width: 80vw;
  min-height: 35px;
  font-family: Verdana, Geneva, Tahoma, sans-serif, Times, serif;
  font-size: 16px;
  align-items: center;
`;

const StyledAvatar = styled.img`
  width: 25px;
  height: 25px;
  margin: 4px;
`;

export { StyledAvatar, Simplebar, StyledHead, StyledHeader, StyledBox };
