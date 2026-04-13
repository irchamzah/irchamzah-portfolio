import Contacts from "../components/Contacts";
import Educations from "../components/Educations";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ProgrammingSkills from "../components/ProgrammingSkills";
import WebPortfolio from "../components/WebPortfolio";
import WorkExperience from "../components/WorkExperience";

export default function Home() {
  return (
    <Layout>
      <Navbar />
      <HeroSection />
      <WebPortfolio />
      <ProgrammingSkills />
      <WorkExperience />
      <Educations />
      <Contacts />
    </Layout>
  );
}
