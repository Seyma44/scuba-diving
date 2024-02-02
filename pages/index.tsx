// Home.js
import Explore from "@/components/Explore";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero id="home"/>
      <Explore id="explore_zones" />
      <About id="about_app" />
      <Features id="features" />
      <GetApp id="get_app" />
    </>
  );
}
