import AboutMe from "@/components/AboutMe";
import CallToAction from "@/components/CallToAction";
import HeroSection from "@/components/HeroSection";
import LineWrap from "@/components/LineWrap/LineWrap";
import ProjectsDone from "@/components/ProjectsDone";
import ToolsUsed from "@/components/ToolsUsed";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMe />
      <ToolsUsed />
      <ProjectsDone />
      <CallToAction />
    </>
  );
}
