import { Button } from "components/Button";
import { Example } from "components/Example";
import { Hero } from "components/hero";
import Navbar from "components/Navbar";
import { SplitCard } from "components/SplitCard";

export default function Home() {
  return (
    <>
      <Hero>
        <h1 className="font-serif text-center text-6xl lg:text-8xl text-white tracking-tight font-bold">
          VENDETTA DAO
        </h1>
        <h3 className="text-2xl md:text-3xl text-neutral-200 font-medium">
          An ecosystem with a score to settle
        </h3>
      </Hero>

      <main>
        {/* <div className="relative">
          <img
            src="/learn_more_image.jpg"
            alt="learn more"
            className="w-full absolute inset-0 h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-current"></div>

          <div className="relative z-10 inset-0 grid grid-cols-2">
            <div className="ml-7 flex justify-center flex-col text-white">
              <p>
                The VendettaDAO will provide governance to the Vendetta Ecosystem. By harnessing the
                power of the DAO, we can best position the project to serve the best interests of
                the community as whole. The governance provided can steer the project in new
                directions to tackle new challenges.
              </p>{" "}
              <br />
              <ul className="ml-4 text-left list-disc">
                <li>Manage Guild Treasury</li>
                <li>Select new projects</li>
                <li>Change rules for community</li>
                <li>Govern Vendetta Token</li>
                <li>Vote on community issues</li>
              </ul>
              <br />
              <p>
                Starting an organization with someone that involves funding and money requires much
                trust in the people you’re working with. But it’s hard to trust someone you’ve only
                ever interacted with on the internet. With DAOs, you don’t need to trust anyone else
                in the group, just the DAO’s code, which is 100% transparent and verifiable by
                anyone.
              </p>
            </div>
          </div>
        </div> */}

        {/* <div className="relative">
          <img
            src="/learn_more_image.jpg"
            alt="learn more"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/80"></div>
          <div className="container max-w-screen-xl mx-auto relative py-12">
            <h2 className="text-white text-3xl font-semibold mb-4">Overview</h2>
            <div className="text-neutral-300 max-w-lg">
              <p>
                The VendettaDAO will provide governance to the Vendetta Ecosystem. By harnessing the
                power of the DAO, we can best position the project to serve the best interests of
                the community as whole. The governance provided can steer the project in new
                directions to tackle new challenges.
              </p>{" "}
              <br />
              <ul className="text-left list-disc">
                <li>Manage Guild Treasury</li>
                <li>Select new projects</li>
                <li>Change rules for community</li>
                <li>Govern Vendetta Token</li>
                <li>Vote on community issues</li>
              </ul>
              <br />
              <p>
                Starting an organization with someone that involves funding and money requires much
                trust in the people you’re working with. But it’s hard to trust someone you’ve only
                ever interacted with on the internet. With DAOs, you don’t need to trust anyone else
                in the group, just the DAO’s code, which is 100% transparent and verifiable by
                anyone.
              </p>
            </div>
          </div>
        </div> */}

        <div className="border-y border-orange-900 bg-neutral-900/50">
          {/* <img
            src="/learn_more_image.jpg"
            alt="learn more"
            className="absolute inset-0 w-full h-full object-cover"
          /> */}
          {/* <div className="absolute inset-0 bg-black/80"></div> */}
          <div className="container max-w-screen-xl mx-auto relative py-12 grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-white text-3xl font-semibold mb-4">Overview</h2>
              <div className="text-neutral-300 max-w-lg">
                <p>
                  The VendettaDAO will provide governance to the Vendetta Ecosystem. By harnessing
                  the power of the DAO, we can best position the project to serve the best interests
                  of the community as whole. The governance provided can steer the project in new
                  directions to tackle new challenges.
                </p>{" "}
                <br />
                <ul className="text-left list-disc">
                  <li>Manage Guild Treasury</li>
                  <li>Select new projects</li>
                  <li>Change rules for community</li>
                  <li>Govern Vendetta Token</li>
                  <li>Vote on community issues</li>
                </ul>
                <br />
                <p>
                  Starting an organization with someone that involves funding and money requires
                  much trust in the people you’re working with. But it’s hard to trust someone
                  you’ve only ever interacted with on the internet. With DAOs, you don’t need to
                  trust anyone else in the group, just the DAO’s code, which is 100% transparent and
                  verifiable by anyone.
                </p>
              </div>
            </div>
            <img
              src="/learn_more_image.jpg"
              alt="learn more"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Partners  */}

        <div className="container py-6">
          <h2 className="text-white text-3xl font-semibold mb-4 text-center">Partners</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-7">
            <img src="/white_logo.png" alt="logo" />
            <img src="/white_logo.png" alt="logo" />
            <img src="/white_logo.png" alt="logo" />
            <img src="/white_logo.png" alt="logo" />
            <img src="/white_logo.png" alt="logo" />
            <img src="/white_logo.png" alt="logo" />
            <img src="/white_logo.png" alt="logo" />
            <img src="/white_logo.png" alt="logo" />
          </div>
        </div>
      </main>
    </>
  );
}
