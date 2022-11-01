import { Button } from "components/Button";
import { Example } from "components/Example";
import { Footer } from "components/Footer";
import { Hero } from "components/hero";
import Navbar from "components/Navbar";
import { SplitCard } from "components/SplitCard";
import { Stats } from "components/Stats";
import ContactForm from "components/ContactForm";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        {/* <video
          className="absolute top-0 min-w-full h-96 object-center object-cover border border-b border-accent-500"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img src="/learn_more_image.jpg" alt="learn more" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent "></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <div className="relative bg-neutral-900/40 backdrop-blur-lg border border-neutral-800 rounded-lg ">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
