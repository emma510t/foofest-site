import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/");

import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
    </>
  );
}
