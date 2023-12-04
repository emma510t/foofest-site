import "rsuite/dist/rsuite.min.css";
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
