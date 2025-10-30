
import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <Hero/>
      <Stats/>
      <Services/>
      
      <Testimonials/>
    </section>
  );
}
