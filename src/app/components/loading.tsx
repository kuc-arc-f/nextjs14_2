export default function Loading() {
  const boxStyle = {
    width: "400px",
    height: "300px",
    backgroundColor: "#CACACA",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = { color: "black", fontSize: "larger", fontWeight: "bold" };

  return (
    <div style={boxStyle}>
      <p style={textStyle}>...Loading</p>
    </div>
  );
}
