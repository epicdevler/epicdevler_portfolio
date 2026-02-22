import dynamic from "next/dynamic";
import Loading from "./loading";

const Page = dynamic(() => import("./home"), {  
  loading: () => <Loading />,
});

export default function Home() {
  return <Page />;
}
