import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Stories from "./pages/Stories";
import Websites from "./pages/Websites";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";
import "./styles/tokens.css";
import "./styles/global.css";
import "./styles/layout.css";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/websites" element={<Websites />} />
        <Route path="/work" element={<Work />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
