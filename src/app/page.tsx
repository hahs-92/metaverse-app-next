import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "@/containers";

import { Footer } from "@/components";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="bg-black overflow-hidden">
      <Navbar />
      <Hero />

      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>

      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>

      <World />

      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
      <Footer />
    </main>
  );
}
