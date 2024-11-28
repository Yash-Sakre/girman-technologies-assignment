import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "@/assets/Logo.svg";
import { MdOutlineMenu } from "react-icons/md";
import { SearchInput2 } from "./SearchInput2";
const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchClick, setIsSearchClick] = useState(false);

  const [searchQuery, setSearchQuery] = useState<string>(
    location.state?.searchQuery || ""
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    navigate("/search", { state: { searchQuery: value } });
  };

  return (
    <header className="flex items-center justify-between px-[10%] py-4 bg-[#FFFFFF] shadow-md">
      <div className="flex items-center space-x-2">
        <Link to={"/"}>
          <img src={logo} alt="Girman Logo" className="h-14" />
        </Link>
      </div>

      {/* Desktop Navbar */}
      {!(location.pathname === "/search") ? (
        <nav className="hidden space-x-6 md:flex">
          <Link
            to={"/search"}
            className="text-lg font-normal uppercase font-inter hover:text-[#3063E6] hover:font-semibold hover:underline"
            onClick={() => setIsSearchClick(!isSearchClick)}
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
      ) : (
        <div className="hidden md:block">
          <SearchInput2 value={searchQuery} onChange={handleSearchChange} />
        </div>
      )}

      <MdOutlineMenu
        size={30}
        className="cursor-pointer md:hidden focus:outline-none"
        onClick={toggleMenu}
      />

      {/* Mobile Menu (Conditional Rendering) */}
      {isMenuOpen && (
        <nav className="absolute top-16 right-20 bg-[#FFFFFF] shadow-md lg:hidden w-[200px] z-50 rounded-lg">
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
