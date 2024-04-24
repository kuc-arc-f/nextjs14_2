import ClientCompo1 from "./ClientCompo1";
import ServerCompo1 from "./ServerCompo1";
//
export default async function Page() {
//console.log("name=", process.env.APP_NAME);
  return (
    <div>
      <h1>sc2</h1>
      <hr />
      <ClientCompo1 />
      <hr />
      <ServerCompo1 />
    </div>
  );
}
/*
*/
