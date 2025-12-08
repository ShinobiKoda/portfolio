import Navbar from "../components/Layout/Navbar";

const Home = () => {
  return (
    <div
      className="w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/images/home-bg-img.webp'" }}
    >
      <Navbar />
      {/* <Loader /> */}
    </div>
  );
};

export default Home;
