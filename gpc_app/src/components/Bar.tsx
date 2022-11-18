import { StyledHead, Simplebar, StyledAvatar } from "../components/Component";

interface IBar {
  bg?: string;
  path?: string;
  title?: string;
}

export default function Bar({ bg, path, title }: IBar) {
  return (
    <StyledHead>
      <Simplebar style={{ background: bg }}>
        <StyledAvatar alt={title} src={path} />
        {title}
      </Simplebar>
    </StyledHead>
  );
}
