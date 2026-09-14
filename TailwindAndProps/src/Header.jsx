import React from "react";

export default function HeroSection4() {
  return (
    <div className="Readex p-8">

      <div className="container mx-auto flex h-screen flex-wrap items-center justify-around">
        <div className="flex max-w-xl flex-col  items-start justify-start text-left">
          <h1 className="my-3 max-w-lg text-7xl">Minted with delight</h1>
          <p className="my-4 max-w-lg text-lg ">
            Management Dow Jones industry bondholders funds municipal bonds
            government upswing strategy.
          </p>
          <div className="flex items-start justify-start px-5">
            <button className="my-2 mr-3 h-50px w-200px rounded-xl bg-[#FFD600] text-xl text-black sm:h-[62px] sm:w-[250px]">
              Learn More
            </button>
            <button className="my-2 mx-3 h-50px w-200px rounded-xl bg-white/10 text-xl text-[#FFD600] sm:h-[62px] sm:w-[250px]">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650305311/Illustration1_bbniur.png"
            width="400"
            height="400"
            alt="nft"
          />
        </div>
      </div>
    </div>
  );
}
