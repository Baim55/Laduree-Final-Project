import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "../../public/assets/logo.svg";
import Cart from "../../public/assets/cart.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItem =
    "relative flex items-center h-[92px] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";
  const navLinkClass = ({ isActive }) =>
    `${navItem} ${isActive ? "after:w-full" : ""}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[60] w-full transition-all duration-300 border-b ${
          isScrolled
            ? "bg-[#fefbf4] text-black border-gray-200"
            : "bg-transparent text-[#fefbf4] border-white/20"
        }`}
      >
        <div className="container grid grid-cols-3 items-center h-[92px] px-5">
          {/* Left */}
          <ul className="garamond whitespace-nowrap hidden lg:flex items-center gap-5 justify-self-start text-[16px]">
            <li className={navItem}>
              <NavLink to="/eShop" className={navLinkClass}>
                E-Shop
              </NavLink>
            </li>
            <li className={navItem}>
              <NavLink to="/stores" className={navLinkClass}>
                Our stores
              </NavLink>
            </li>
            <li className={navItem}>
              <NavLink to="/corporate" className={navLinkClass}>
                Corporate
              </NavLink>
            </li>
            <li className={navItem}>
              <NavLink to="/laMaison" className={navLinkClass}>
                La Maison
              </NavLink>
            </li>
            <li className={navItem}>
              <NavLink to="/search" className={navLinkClass}>
                <IoSearchOutline className="mr-2" /> Search
              </NavLink>
            </li>
          </ul>

          {/* Mobil hamburger düyməsi */}
          <div className="menubar justify-self-start lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center"
            >
              <HiOutlineMenu size={26} />
            </button>
          </div>

          <div className="justify-self-center">
            <img
              src={Logo}
              alt="logo"
              className={`w-[160px] transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </div>

          <img
            src={Cart}
            alt="cart"
            className={`lg:hidden justify-self-end transition-all duration-300 ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
          />

          <ul className="garamond hidden lg:flex items-center gap-6 justify-self-end text-[16px]">
            <li className={navItem}>
              <Link to="/club">Le Club Ladurée</Link>
            </li>
            <li className={navItem}>
              <button>IT / EN</button>
            </li>
            <li className={navItem}>
              <FaRegUserCircle size={20} />
            </li>
            <li className={navItem}>
              <img
                src={Cart}
                alt="cart"
                className={`transition-all duration-300 ${
                  isScrolled ? "" : "brightness-0 invert"
                }`}
              />
            </li>
          </ul>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

export default Header;
