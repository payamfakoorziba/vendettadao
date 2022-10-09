import React from "react";

export const Hero = ({ children }: { children: React.ReactNode }) => (
  <>
    <div className="bg-red-500 relative">
      <video className="relative min-w-full min-h-full object-cover" autoPlay playsInline muted loop>
        <source src='/video.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        {/* <h1 className="text-6xl text-white font-semibold">VENDETTA DAO</h1>
        <h3 className="text-3xl text-white">learn more</h3> */}
        {children}
      </div>
    </div>

  </>
)