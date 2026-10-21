import Hero from "../components/home/Hero";
import CategoryStrip from "../components/home/CategoryStrip";
import SelectedWork from "../components/home/SelectedWork";
import ContactCTA from "../components/home/ContactCTA";
import "../styles/pages/home.css";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryStrip />
      <SelectedWork />
      <ContactCTA />
    </>
  );
}
