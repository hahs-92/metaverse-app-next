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
      <About />
      <Explore />
      <GetStarted />
      <WhatsNew />
      <World />
      <Insights />
      <Feedback />
      <Footer />
    </main>
  );
}
