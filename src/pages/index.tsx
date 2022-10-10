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

        {/* Overview */}
        <div className="container max-w-screen-xl mx-auto relative py-12 grid 
          md:grid-cols-2 gap-8 border-t border-orange-900 bg-neutral-900/50">
          <div>
            <h2 className="text-white text-3xl font-semibold mb-4">Overview</h2>
            <div className="text-neutral-300 max-w-lg">
              <p>
                The <span className="text-orange-400">VendettaDAO</span> will provide governance to the <span className="text-orange-400">Vendetta Ecosystem</span>. By harnessing
                the power of the DAO, we can best position the project to serve the best interests
                of the <span className="text-orange-400">community</span> as whole. The governance provided can steer the project in new
                directions to tackle new challenges.
              </p>
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

        {/* Token */}

        <div className="container max-w-screen-xl mx-auto relative py-12 grid 
          md:grid-cols-2 gap-8 bg-neutral-900/50">
          <video className="min-w-full min-h-full object-cover" autoPlay playsInline muted loop>
            <source src='/nft.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h2 className="text-white text-3xl font-semibold mb-4">Vendetta Token ($VDT)</h2>
            <div className="text-neutral-300 max-w-lg">
              <p>
                The <span className="text-orange-400">Vendetta token</span> is the lifeblood
                of our ecosystem and the native token of the
                Vendetta ecosystem.  It is our <span className="text-orange-400"> in-game currency</span>
                and has numerous other utility benefits to the holder.  Pre-sale and Public sale
                proceeds of tokens will be a welcome inflow of early capital.
              </p>
              <br />
              <ul className="text-left list-disc">
                <li>Stake for income</li>
                <li>DAO Governance</li>
                <li>Stake for offers</li>
                <li>Ecosystem currency</li>
                <li>Game rewards</li>
              </ul>
              <br />
              <p>
                We continually work to improve existing game or build new games to further enhance 
                the token’s utility.  Ensuring that $VDT has the ability to grow while performing
                 the role of an in-game token is a core focus of the Vendetta team.  We know the 
                 ramifications of a token build on unsound principals.  The tokenomics of the $VDT 
                 token were rigorously determined to ensure an optimal distribution.  Making sure 
                 we have enough tokens in the right hans is key to our success.
              </p>
            </div>
          </div>

        </div>

        {/* Partners  */}
        <div className="container py-6 max-w-screen-xl">
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