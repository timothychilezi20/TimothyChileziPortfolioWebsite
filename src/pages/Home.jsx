import Hero from "../components/home/Hero";
import SelectedWork from "../components/home/SelectedWork";
import "../styles/pages/home.css";

function Home() {
  return (
    <>
      <Hero />
      {/* CategoryStrip goes between these two */}
      <SelectedWork />
      {/* ContactCTA goes here next */}
    </>
  );
}

export default Home;
