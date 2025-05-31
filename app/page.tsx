import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ServiceSection from '../components/ServiceSection'
import MySkills from "../components/MySkills"
import WorkSection1 from '../components/WorkSection1'
import WorkSection2 from '../components/WorkSection2'
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <main className="flex flex-col  justify-center">
        <Hero />
        <main className="flex item-center justify-center">
        <Stats />
        </main>
        <ServiceSection />
        <MySkills/>
        <WorkSection1/>
        <WorkSection2/>
        <ContactSection/>
      </main>
    </div>
  );
}