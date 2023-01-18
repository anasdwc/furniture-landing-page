import Hero from "./Hero";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="overflow-hidden">
      <Navbar />
      <Hero />
    </header>
  );
}
