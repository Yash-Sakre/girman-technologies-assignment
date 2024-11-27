import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/Logo.svg";
import { MdOutlineMenu } from "react-icons/md";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between px-[10%] py-4 bg-[#FFFFFF] shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Girman Logo" className="h-14" />
      </div>

      {/* Desktop Navbar */}
      <nav className="hidden space-x-6 md:flex">
        <Link
          to={"/search"}
          className="text-lg font-normal uppercase font-inter hover:text-[#3063E6] hover:font-semibold hover:underline"
        >
          Search
        </Link>
        <Link
          to={"http://girmantech.com/"}
          target="_blank"
          className="text-lg font-normal uppercase hover:text-[#3063E6] hover:font-semibold hover:underline"
        >
          Website
        </Link>
        <Link
          to={"https://www.linkedin.com/company/girmantech/"}
          target="_blank"
          className="text-lg font-normal uppercase hover:text-[#3063E6] hover:font-semibold hover:underline"
        >
          LinkedIn
        </Link>
        <Link
          to={"mailto:contact@girmantech.com"}
          className="text-lg font-normal uppercase hover:text-[#3063E6] hover:font-semibold hover:underline"
        >
          Contact
        </Link>
      </nav>

      <MdOutlineMenu
        size={30}
        className="cursor-pointer md:hidden focus:outline-none"
        onClick={toggleMenu}
      />

      {/* Mobile Menu (Conditional Rendering) */}
      {isMenuOpen && (
        <nav className="absolute top-16 left-0 right-0 bg-[#FFFFFF] shadow-md lg:hidden">
          <Link
            to={"/search"}
            className="block text-lg font-normal uppercase font-inter hover:text-[#3063E6] hover:font-semibold hover:underline py-2 px-4"
            onClick={toggleMenu}
          >
            Search
          </Link>
          <Link
            to={"http://girmantech.com/"}
            target="_blank"
            className="block text-lg font-normal uppercase hover:text-[#3063E6] hover:font-semibold hover:underline py-2 px-4"
            onClick={toggleMenu}
          >
            Website
          </Link>
          <Link
            to={"https://www.linkedin.com/company/girmantech/"}
            target="_blank"
            className="block text-lg font-normal uppercase hover:text-[#3063E6] hover:font-semibold hover:underline py-2 px-4"
            onClick={toggleMenu}
          >
            LinkedIn
          </Link>
          <Link
            to={"mailto:contact@girmantech.com"}
            className="block text-lg font-normal uppercase hover:text-[#3063E6] hover:font-semibold hover:underline py-2 px-4"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
