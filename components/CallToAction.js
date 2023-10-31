import Button from "./Button";

const CallToAction = () => {
  return (
    <div className="bg-black pb-24 pt-32 md:bg-gradient-to-r">
      <div className="container m-auto px-6 text-center md:px-12 lg:px-20">
        <h2 className="mb-8 text-4xl leading-tight font-medium text-white sm:text-5xl sm:leading-tight lg:text-7xl lg:leading-tight uppercase font-landrygothic">
          Let's work <br /> together
        </h2>
        <button className="bg-[#adff00] rounded-full p-1.5 shadow-sm duration-300 hover:scale-110 pointer-events-auto">
          <img src="/icons/arrow.svg" className="h-16 w-16" />
        </button>
      </div>
    </div>
  );
};

export default CallToAction;
