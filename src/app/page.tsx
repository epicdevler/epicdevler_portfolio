"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "./loading";

const Page = dynamic(() => import("./home/home"), {
  ssr: false,
  loading: () => <Loading />,
});

export default function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Page />
    </Suspense>
  );
}
