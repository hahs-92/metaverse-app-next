import { Footer } from "@/components";
import Navbar from "@/components/NavBar";
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

export default function Home() {
  return (
    <>
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
    </>
  );
}
