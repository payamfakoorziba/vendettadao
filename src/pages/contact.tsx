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
        <video className="relative min-w-full min-h-full object-cover" autoPlay playsInline muted loop>
          <source src='/video.mp4' type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          {/* <h1 className="text-6xl text-white font-semibold">VENDETTA DAO</h1>
        <h3 className="text-3xl text-white">learn more</h3> */}
          <div className="relative">
            <ContactForm />
          </div>
          
        </div>
      </div>

      {/* <SplitCard
        className='text-white'
        left={
          <div className="flex flex-col justify-center items-center">
            hello
          </div>
        }
        right={
          <div className="flex flex-col justify-center items-center">
            hello
          </div>
        }
      /> */}

      <main>
        
      </main>
    </>
  );
}