import Navbar from "../components/Layout/Navbar";

const Home = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home-bg-img.webp'" }}
    >
      <Navbar />
      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-6 mt-30">
        <h1 className="w-full flex flex-col max-w-[300px] mx-auto text-center">
          <span className="w-full text-5xl lg:text-[52px] text-white font-semibold">
            PRAISE
          </span>
          <span className="text-(--brand-color) font-semibold text-lg lg:text-[32px]">FRONTEND DEV</span>
        </h1>
      </div>

      <div>
        <button>Download CV</button>
        <div>Portfolio</div>
      </div>
    </div>
  );
};

export default Home;
