import LogoSection from "./components/LogoSection";
import NavBar from "./components/NavBar";
import ExperienceSection from "./sections/ExperienceSection";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import TechStacks from "./sections/TechStacks";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
    <TechStacks />
    </>
  );
};

export default App;
