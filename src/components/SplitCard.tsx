import React, { useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export const SplitCard = ({left, leftExtra, right, ...props}: {
  left?: React.ReactNode;
  leftExtra?: React.ReactNode;
  right?: React.ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <div
      {...props}
      className={classNames("container max-w-screen-xl mx-auto relative py-12 grid  md:grid-cols-2 gap-8", props.className)}
    >
      <div>
        <h2 className="text-white text-3xl font-semibold mb-4">Overview</h2>
        <div className="text-neutral-300 max-w-lg space-y-4">
          {left}
          {/* <ul className="text-left list-disc">
            <li>Manage Guild Treasury</li>
            <li>Select new projects</li>
            <li>Change rules for community</li>
            <li>Govern Vendetta Token</li>
            <li>Vote on community issues</li>
          </ul> */}
          {/* <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="px-4 py-1 5 rounded-full bg-orange-500 text-white">
                  {showInfo ? 'Hide Info' : 'Learn More'}
                </button> */}
          {showInfo ? (
            <>
              <p>
                The <span className="text-orange-400">VendettaDAO</span> will provide governance to
                the <span className="text-orange-400">Vendetta Ecosystem</span>. By harnessing the
                power of the DAO, we can best position the project to serve the best interests of
                the <span className="text-orange-400">community</span> as whole. The governance
                provided can steer the project in new directions to tackle new challenges.
              </p>
              <p>
                Starting an organization with someone that involves funding and money requires much
                trust in the people you’re working with. But it’s hard to trust someone you’ve only
                ever interacted with on the internet. With DAOs, you don’t need to trust anyone else
                in the group, just the DAO’s code, which is 100% transparent and verifiable by
                anyone.
              </p>
            </>
          ) : (
            <button
              onClick={() => setShowInfo(true)}
              className="px-4 py-1 5 rounded-full bg-orange-500 text-white"
            >
              Learn More
            </button>
          )}
        </div>
      </div>
      <img
        src="/learn_more_image.jpg"
        alt="learn more"
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  );
}

// { a: 12, a: 30}/ SplitCard className="mt-5" left={} right={}