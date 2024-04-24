
export async function ServerComponent() {
  const boxStyle = {
    width: "400px",
    height: "300px",
    backgroundColor: "#006400",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const textStyle = { color: "white", footSize: "larger", fontWeight: "bold" };

  console.log("Server Componentを実行しています");

  return (
    <div style={boxStyle}>
      <p style={textStyle}>Server Component</p>
    </div>
  );
}
