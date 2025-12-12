import Navbar from "../components/Layout/Navbar";
import { NavLink } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";

const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/my-cv.pdf";
    link.download = "my-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const links = [
    {
      icon: <FaFacebookF size={20} />,
      link: "https://www.facebook.com/share/17VyDNkpz6/",
    },
    {
      icon: <FaXTwitter size={20} />,
      link: "https://x.com/sirp_xo",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/in/praise-adebiyi-b8bb72287",
    },
    {
      icon: <BiLogoGmail size={20} />,
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=sirp2804@gmail.com",
    },
    {
      icon: <FaGithub size={20} />,
      link: "https://github.com/ShinobiKoda",
    },
  ];

  return (
    <div className="w-full h-full">
      <Navbar />

      <div className="w-full px-4">
        <h1 className="font-semibold text-[32px] text-white">
          Praise is a
          <span className="text-(--text-primary)"> front-end developer</span>
        </h1>
        <p className="text-(--text-gray) text-base font-normal mt-[25px]">He crafts responsive websites where technologies meet creativity</p>
      </div>

      <div className="px-4 mt-6 w-full">

      </div>
    </div>
  );
};

export default Home;
