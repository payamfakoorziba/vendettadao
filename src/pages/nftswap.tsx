import NFTSwapForm from "components/NFTSwap";

export default function NFTSwap() {
  return (
    <div className="relative min-h-screen">
        <img src="/learn_more_image.jpg" alt="learn more" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute mt-5 inset-0 flex items-center flex-col">
          <div className="relative bg-neutral-900/40 backdrop-blur-lg border border-neutral-800 rounded-lg ">
            <NFTSwapForm />
          </div>
        </div>
      </div>
  );
}