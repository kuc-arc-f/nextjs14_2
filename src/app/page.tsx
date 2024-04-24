//import Image from "next/image";
//import styles from "./page.module.css";
import { Suspense } from "react";
import { ClientComponent } from "./components/ClientComponent";
import { ServerComponent } from "./components/ServerComponent";
import Loading from "./components/loading";
//
export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
/*
<ClientComponent />
<Suspense fallback={<Loading />}>
  <ServerComponent />
</Suspense>
*/