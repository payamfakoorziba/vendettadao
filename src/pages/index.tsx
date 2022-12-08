import { useRef, useState } from "react";
import { IFrameSection } from "components/IFrameSection";
import { Hero } from "components/hero";
import { SplitCard } from "components/SplitCard";
import { Stats } from "components/Stats";

const logos = [
  { url: "/Elysium_Blockchain.webp", className: "w-44" },
  { url: "/Elysium.png", className: "w-44" },
  { url: "/BSCLaunch.png", className: "w-44" },
  { url: "/Metopia.png", className: "w-44" },
  { url: "/Cyber K.png", className: "w-44" },
  { url: "/AlphaBlockz.png", className: "w-44 bg-neutral-100" },
  { url: "/OGVentures.png", className: "w-44" },
  { url: "/TRUSST.png", className: "w-44" },
  { url: "/Fables _of_Fyra.png", className: "w-44" },
  { url: "/GOB.png", className: "w-44" },
  { url: "/Heroes_Land.png", className: "w-44" },
  { url: "/Swallow.svg", className: "w-44" },
  { url: "/Polygon_Studios.svg", className: "w-44 bg-neutral-100" },
  { url: "/Spores_Network.svg", className: "w-44" },
  { url: "/Ookeenga.png", className: "w-44" },
  { url: "/Coorest.png", className: "w-44" },
  { url: "/logo_with_text_white.svg", className: "w-28" },
  // { url: "/V2B.jpg", className: "w-44" },
  { url: "/VulcanVerse.jpg", className: "w-44" },
];

const team = [
  {
    name: "Mcswyzzle",
    title: "Governor",
    image: "/Team/mcswyzzle-1.png",
    className: "w-44",
  },
  {
    name: "Fanzey",
    title: "General",
    image: "/Team/FANZEY.jpg",
    className: "w-44",
  },
  {
    name: "E-Rock",
    title: "Wordsmith",
    image: "/Team/erock.png",
    className: "w-44",
  },
  {
    name: "Fryatt",
    title: "Propagandist",
    image: "/Team/Fryatt.jpg",
    className: "w-44",
  },
  {
    name: "Bergz",
    title: "Industrialist",
    image: "/Team/BERGS.jpg",
    className: "w-48",
  },
  // {
  //   name: "Floyd",
  //   title: "Blocksmith",
  //   image: "/Team/FLOYD.jpg", // this is a comment
  //   className: "w-48",
  // },
  {
    name: "Glitched Viking",
    title: "Strategist",
    image: "/Team/GlitchedViking.jpg",
    className: "w-48",
  },
  {
    name: "Jamie Thompson",
    title: "Advisor & CEO of Vulcan Forged",
    image: "/Team/jaime cowboy.png",
    className: "w-48",
  },
  {
    name: "Payam",
    title: "Developer",
    image: "/Team/payam-dev.jpg",
    className: "w-44",
  },
] as const;

export default function Home() {
  const [showInfo, setShowInfo] = useState(false);
  const overviewRef = useRef<HTMLDivElement>(null);

  const onCTAClick = () => {
    if (overviewRef.current) {
      // overviewRef.current.scrollIntoView({
      //   behavior: "smooth",
      // });
      window.scrollTo({
        top: overviewRef.current.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Hero>
        <h1 className="font-serif font-bold tracking-tight text-center text-7xl md:text-8xl lg:text-9xl text-accent-300">
          VENDETTA DAO
        </h1>
        <h3 className="text-xl font-medium md:text-5xl text-neutral-200">
          An ecosystem with a score to settle
        </h3>
        <button
          className="flex items-center px-4 py-2 mt-5 text-sm font-medium bg-orange-700 border border-transparent rounded-md md:text-xl text-neutral-100 hover:bg-orange-800"
          onClick={onCTAClick}
        >
          Learn More
        </button>
      </Hero>

      <div
        className="border-t border-accent-800 bg-neutral-900"
        ref={overviewRef}
      >
        <main>
          {/* Overview */}
          <div className="container relative grid max-w-screen-xl gap-8 py-12 mx-auto md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-semibold text-white">
                Overview
              </h2>
              <div className="max-w-lg space-y-4 text-neutral-300">
                {/* <ul className="text-left list-disc">
                  <li>Manage Guild Treasury</li>
                  <li>Select new projects</li>
                  <li>Change rules for community</li>
                  <li>Govern Vendetta Token</li>
                  <li>Vote on community issues</li>
                </ul> */}
                {/* <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="px-4 py-1 text-white bg-orange-500 rounded-full 5">
                  {showInfo ? 'Hide Info' : 'Learn More'}
                </button> */}
                <p>
                  The <span className="text-orange-400">VendettaDAO</span> will
                  provide governance to the{" "}
                  <span className="text-orange-400">Vendetta Ecosystem</span>.
                  By harnessing the power of the DAO, we can best position the
                  project to serve the best interests of the{" "}
                  <span className="text-orange-400">community</span> as whole.
                  The governance provided can steer the project in new
                  directions to tackle new challenges.
                </p>
                {/* <p>
                  Starting an organization with someone that involves funding and money requires
                  much trust in the people you’re working with. But it’s hard to trust someone
                  you’ve only ever interacted with on the internet. With DAOs, you don’t need to
                  trust anyone else in the group, just the DAO’s code, which is 100% transparent
                  and verifiable by anyone.
                </p> */}
                {showInfo ? (
                  <></>
                ) : (
                  <button
                    onClick={() => {
                      setShowInfo(true);
                      onCTAClick();
                    }}
                    className="px-4 py-1 text-white bg-orange-500 rounded-full 5"
                  >
                    Learn More
                  </button>
                )}
              </div>
            </div>

            <IFrameSection src="https://www.youtube.com/embed/d_a9ihlGpBg?controls=0" />
          </div>

          {/* Stats */}

          <Stats />

          {/* Token */}

          <div className="container relative grid max-w-screen-xl gap-8 py-12 mx-auto md:grid-cols-2 bg-neutral-900/50">
            <img src="/vendettadaoLogo.png" className="w-1/2 ml-20"></img>
            <div>
              <h2 className="mb-4 text-3xl font-semibold text-white">
                Vendetta Token ($VDT)
              </h2>
              <div className="max-w-lg text-neutral-300">
                <p>
                  The <span className="text-orange-400">Vendetta token</span> is
                  the lifeblood of our ecosystem and the native token of the
                  Vendetta ecosystem. It is our{" "}
                  <span className="text-orange-400"> in-game currency</span>
                  and has numerous other utility benefits to the holder.
                  Pre-sale and Public sale proceeds of tokens will be a welcome
                  inflow of early capital.
                </p>
                <br />
                <ul className="text-left list-disc">
                  <li>Stake for income</li>
                  <li>Stake for offers</li>
                  <li>Ecosystem currency</li>
                  <li>Game rewards</li>
                </ul>
                <br />
                {showInfo && (
                  <p>
                    We continually work to improve existing game or build new
                    games to further enhance the token’s utility. Ensuring that
                    $VDT has the ability to grow while performing the role of an
                    in-game token is a core focus of the Vendetta team. We know
                    the ramifications of a token build on unsound principals.
                    The tokenomics of the $VDT token were rigorously determined
                    to ensure an optimal distribution. Making sure we have
                    enough tokens in the right hands is key to our success.
                  </p>
                )}
              </div>
            </div>
          </div>

          {showInfo && (
            <>
              {/* Chalk River */}
              <div className="container relative grid grid-cols-1 max-w-screen-xl gap-8 py-12 mx-auto xl:grid-cols-2 bg-neutral-900/50">
                <div>
                  <h2 className="mb-4 text-3xl font-semibold text-white">
                    Chalk River
                  </h2>
                  <div className="max-w-lg text-neutral-300">
                    <p>
                      <span className="text-orange-400">
                        Live by the gun, die by the gun…{" "}
                      </span>
                      Chalk River Territory is a stunning Wild West Metaverse.
                    </p>
                    <br />
                    <p>
                      Ever since gold was discovered, the territory has been
                      overrun with every type of hired gun, wildcatter, card
                      cheat, and carpetbagger to ever roam the West.
                    </p>
                    <br />
                    <ul className="text-left list-disc">
                      <li>Free to Play & Play to Earn</li>
                      <li>Windows and Mac</li>
                      <li>Earn $VDT Token</li>
                      <li>Collect NFTs</li>
                      <li>Esports Tournaments</li>
                      <li>Scholarship program</li>
                    </ul>
                    <br />
                    <p>
                      The Chalk River metaverse is loaded with natural resources
                      for those brave enough to blast them out. The town of
                      Chalk River was erected shortly after the discovery of the
                      mine. The local inhabitants created a guild to protect the
                      town and themselves against the hostile forces hellbent on
                      taking over the town and the mine.
                    </p>
                    <br />
                    <p>
                      To survive in this territory, you need to be tough and you
                      need to know how to shoot. Often one is the key to the
                      other.
                    </p>
                  </div>
                </div>

                <IFrameSection src="https://www.youtube.com/embed/7vTw1P-jWvE" />
              </div>

              {/* Vendetta Studios */}
              <div className="container relative grid max-w-screen-xl gap-8 py-12 mx-auto md:grid-cols-2 bg-neutral-900/50">
                <video
                  className="object-cover min-w-full min-h-full mix-blend-difference"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="/DayNight.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div>
                  <h2 className="mb-4 text-3xl font-semibold text-white">
                    Vendetta Studios
                  </h2>
                  <div className="max-w-lg text-neutral-300">
                    <p>
                      Vendetta Games was created to build games for the Vendetta
                      community. Vendetta Games takes a 365 degree approach to
                      every games we build. We start by trying to understand
                      what reality is in each metaverse game we create. Drawing
                      from elements unique to each project allows us to make
                      games that are fun to play and beautiful to look at.
                    </p>
                    <br />
                    <ul className="text-left list-disc">
                      <li>Game Development</li>
                      <li>Character creation</li>
                      <li>3D Modeling</li>
                      <li>Design support</li>
                      <li>White label gaming solutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Vendetta Guild */}
              <div className="container relative grid max-w-screen-xl gap-8 py-12 mx-auto md:grid-cols-2 bg-neutral-900/50">
                <div>
                  <h2 className="mb-4 text-3xl font-semibold text-white">
                    Vendetta Guild
                  </h2>
                  <div className="max-w-lg text-neutral-300">
                    <p>
                      The Vendetta Guild is the heart and soul of the ecosystem.
                      It offers one of the most attractive scholarship
                      opportunities in the metaverse. We work with the best
                      developers to create a lending platform that makes it easy
                      for the player and safe for the asset owner. The Vendetta
                      Scholarship Program is entirely trustless and
                      decentralized.
                    </p>
                    <br />
                    <ul className="text-left list-disc">
                      <li>Large audience to play our games</li>
                      <li>Create passive income for asset owners</li>
                      <li>Launch new games</li>
                      <li>Esports Tournaments</li>
                      <li>Host AMAs</li>
                      <li>5 games played</li>
                    </ul>
                  </div>
                </div>
                <img src="Guild.jpg" className="rounded-xl"></img>
              </div>

              {/* Vendetta Launchpad */}
              <div className="container relative grid max-w-screen-xl gap-8 py-12 mx-auto md:grid-cols-2 bg-neutral-900/50">
                <video
                  className="object-cover min-w-full min-h-full mix-blend-difference"
                  autoPlay
                  playsInline
                  muted
                  loop
                >
                  <source src="/nft.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div>
                  <h2 className="mb-4 text-3xl font-semibold text-white">
                    Vendetta Launchpad
                  </h2>
                  <div className="max-w-lg text-neutral-300">
                    <p>
                      The Vendetta Launchpad propels the next generation of WEB3
                      projects into the stratosphere via an open application for
                      anyone with an idea for an NFT game or dApp. We will be
                      assessing all applications and choosing 50 of them to
                      provide grants, technical support, and marketing.
                    </p>
                    <br />
                    <ul className="text-left list-disc">
                      <li>No gas needed for developers to create NFTs</li>
                      <li>Customized NFT creation tool</li>
                      <li>Access to already established community</li>
                      <li>No gas needed for marketplace transactions</li>
                      <li>
                        One wallet/access point to all games (meaning any user
                        from any game can join yours)
                      </li>
                      <li>High volume marketplace with advanced features</li>
                      <li>
                        24/7 support with NFT creations, game development, and
                        community reach.
                      </li>
                      <li>
                        Access to your own gas-free, non-crypto NFT engine that
                        allows you to create any NFT with the metadata you
                        choose called Agora.
                      </li>
                      <li>Technical and development support</li>
                      <li>Introductions to our gaming development partners</li>
                      <li>
                        Marketing, initial NFT sale rounds, promotions, and
                        access to our large community.
                      </li>
                    </ul>
                    <br />
                    <p>
                      Vendetta is now at a stage ready to expand to more games,
                      more users, and more third-party developers.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Partners  */}
          <div className="container max-w-screen-xl py-6 bg-neutral-900">
            <h2 className="mb-7 text-3xl font-semibold text-center text-white">
              Partners
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4 place-items-center">
              {logos.map((logo) => (
                <img
                  src={logo.url}
                  alt="logo"
                  key={logo.url}
                  className={logo.className}
                />
              ))}
            </div>
          </div>

          <div className="container max-w-screen-xl py-6 bg-neutral-900">
            <h2 className="mb-7 text-3xl font-semibold text-center text-white">
              Team
            </h2>
            <div className="">
              <div className="hidden md:block">
                {team
                  .reduce((acc, cur, i) => {
                    if (i % 3 === 0) {
                      acc.push([cur]);
                    } else {
                      acc[acc.length - 1].push(cur);
                    }
                    return acc;
                  }, [])
                  .map((group, i) => (
                    <div className="p-1 flex" key={i}>
                      {group.map((member) => (
                        <div className="text-center w-full text-white flex-col flex items-center">
                          <img
                            src={member.image}
                            alt="logo"
                            key={member.name}
                            className={`${member.className} flex-shrink-0 rounded-full`}
                          />
                          <h2 className="text-3xl">{member.name}</h2>
                          <h2 className="text-sm">{member.title}</h2>
                          <div></div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
              <div className="md:hidden">
                {team
                  .reduce((acc, cur, i) => {
                    if (i % 2 === 0) {
                      acc.push([cur]);
                    } else {
                      acc[acc.length - 1].push(cur);
                    }
                    return acc;
                  }, [])
                  .map((group, i) => (
                    <div className=" p-1 flex" key={i}>
                      {group.map((member) => (
                        <div className="text-center w-full text-white flex-col flex items-center">
                          <img
                            src={member.image}
                            alt="logo"
                            key={member.name}
                            className={`${member.className} flex-shrink-0 rounded-full`}
                          />
                          <h2 className="text-3xl">{member.name}</h2>
                          <h2 className="text-sm">{member.title}</h2>
                          <div></div>
                        </div>
                      ))}
                    </div>
                  ))}
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 justify-items-center">
              {/* {team.map((member) => (
                <div className="flex flex-col items-center justify-between">
                  <img src={member.image} alt="logo" key={member.name} className={`${member.className} rounded-full`} />
                  <div>
                    <h2 className="text-white text-center text-3xl">{member.name}</h2>
                    <h2 className="text-white text-center text-sm">{member.title}</h2>
                  </div>
                </div>
              ))} */}
              {/* group by threes */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
