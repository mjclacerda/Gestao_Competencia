import { BootstrapButton, FlexBox } from "./Component";
import { Link } from "react-router-dom";
import { linkStyle } from "./Side_menu";

interface IBottonList {
  list: Array<string>;
}

export function BottonLink({ list }: IBottonList) {
  return (
    <div style={{ display: "block" }}>
      {list.map((tipo) => (
        <Link to={"/config_comp"} style={linkStyle}>
          <BootstrapButton style={{ margin: 3, fontSize: 16 }} value={tipo}>
            {tipo}
          </BootstrapButton>
        </Link>
      ))}
    </div>
  );
}

export function BottonList({ list }: IBottonList) {
  return (
    <div style={{ display: "block" }}>
      {list.map((tipo) => (
        <BootstrapButton
          style={{
            margin: 3,
            fontSize: 16,
            color: "black",
            background: "#00EFFF",
          }}
          value={tipo}
        >
          {tipo}
        </BootstrapButton>
      ))}
    </div>
  );
}
