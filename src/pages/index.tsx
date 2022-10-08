import { Button } from "components/Button";
import { Example } from "components/Example";
import { Hero } from "components/hero";
import Navbar from "components/Navbar";
import { SplitCard } from "components/SplitCard";

export default function Home() {
  return (
    <>

      <Hero>
        <h1 className="text-6xl text-red-600 font-bold">VENDETTA DAO</h1>
        <h3 className="text-3xl text-white">An ecosystem with a score to settle</h3>
      </Hero>

      <main>
        <div className="relative">
          <img src="/learn_more_image.jpg" alt="learn more" className="w-full" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-current"></div>
          {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-current"></div> */}
          <div className="absolute z-10 inset-0 grid grid-cols-2">
            <div className="ml-7 flex justify-center flex-col text-white">
              <p>The VendettaDAO will provide governance to the Vendetta Ecosystem.
                By harnessing the power of the DAO, we can best position the project to serve
                the best interests of the community as whole.  The governance provided can steer
                the project in new directions to tackle new challenges.</p> <br />
              <ul className="ml-4 text-left list-disc">
                <li>Manage Guild Treasury</li>
                <li>Select new projects</li>
                <li>Change rules for community</li>
                <li>Govern Vendetta Token</li>
                <li>Vote on community issues</li>
              </ul>
              <br />
              <p>Starting an organization with someone that involves funding and money 
                requires much trust in the people you’re working with. But it’s hard to 
                trust someone you’ve only ever interacted with on the internet. With 
                DAOs, you don’t need to trust anyone else in the group, just the DAO’s 
                code, which is 100% transparent and verifiable by anyone.</p>
            </ div>
          </div>
        </div>
      </main>
    </>
  );
}
