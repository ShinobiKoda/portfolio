import ThemeSwitchButton from "../ThemeSwitchButton";

const Navbar = () => {
  return (
    <nav className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4">
      <div className="w-[50px] h-[50px]">
        <img src="/images/logo.png" alt="Logo Image" className="w-full" />
      </div>

      <div className="flex items-center">
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>

        <div className="">
          <ThemeSwitchButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
