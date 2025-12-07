import ThemeSwitchButton from "./ThemeSwitchButton";
import Loader from "./Loader";

const Home = () => {
  return (
    <div
      className="w-full h-full bg-center bg-cover dark:bg-black bg-red-400 flex items-center justify-center"
      style={{ backgroundImage: "url('/images/home-bg-img.svg')" }}
    >
      <div className="absolute top-2 right-2">
        <ThemeSwitchButton />
      </div>
      <Loader />
    </div>
  );
};

export default Home;
