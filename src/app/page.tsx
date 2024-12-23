import Footer from "./components/Footer";
import GameCarousel from "./components/GameCarousel";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <div className="w-full">
        <Navbar />
        <GameCarousel />
        <Footer />
    </div>
  );
}
