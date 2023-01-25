import { FlexBox, BoxColumn } from "../Component";

interface IResume {
  person: number;
  unit: number;
}
export default function Resume({ person, unit }: IResume) {
  return (
    <FlexBox
      style={{
        color: "#ffffff",
        fontFamily: "sans-serif",
        alignSelf: "center",
        marginTop: "7vh",
      }}
    >
      <BoxColumn
        style={{
          textAlign: "center",
          margin: "2px",
          background: "#0fa3ff",
          minHeight: "7vh",
          minWidth: "18vw",
          borderRadius: 4,
        }}
      >
        <div style={{ marginTop: 10 }}>Pessoas</div>
        <div style={{ fontSize: 22 }}>{person}</div>
      </BoxColumn>
      <BoxColumn
        style={{
          textAlign: "center",
          margin: "2px",
          background: "#0fa3ff",
          minHeight: "7vh",
          minWidth: "18vw",
          borderRadius: 4,
        }}
      >
        <div style={{ marginTop: 10 }}>Unidades</div>
        <div style={{ fontSize: 22 }}>{unit}</div>
      </BoxColumn>
    </FlexBox>
  );
}
