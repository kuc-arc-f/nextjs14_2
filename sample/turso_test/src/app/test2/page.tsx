//import { Suspense } from "react";
import ClientCompo1 from "./ClientCompo1";
import ServerCompo1 from "./ServerCompo1";
//
export default async function Page() {
//console.log("name=", process.env.APP_NAME);
  return (
    <div>
      <h1>Test2 !!!</h1>
      <hr />
      <ServerCompo1 />
      <hr />
      <ClientCompo1 />
    </div>
  );
}
/*
*/
