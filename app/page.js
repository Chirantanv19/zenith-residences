import Hero from "@/components/sections/Hero";
import Highlights from "@/components/sections/Highlights";
import About from "@/components/sections/About";
import AmenitiesGrid from "@/components/sections/AmenitiesGrid";
import GalleryPreview from "@/components/sections/GalleryPreview";
import LocationMap from "@/components/sections/LocationMap";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <AmenitiesGrid />
      <GalleryPreview />
      <LocationMap />
      <ContactForm />
      <Footer />
    </>
  );
}