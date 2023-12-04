import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/cdn/");

import Footer from "@/components/Footer";
import CampingAreas from "../layouts/CampingAreas";

function buyTickets() {
  return (
    <>
      <main>
        <CampingAreas></CampingAreas>
      </main>
      <Footer />
    </>
  );
}

export default buyTickets;
