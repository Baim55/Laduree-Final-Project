import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import ShopMenu from "./ShopMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const isAnyMenuOpen = isMobileMenuOpen || isShopMenuOpen;
    document.body.style.overflow = isAnyMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isShopMenuOpen]);

  const navItem =
    "relative flex items-center h-[92px] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  const navLinkClass = ({ isActive }) =>
    `${navItem} ${isActive ? "after:w-full" : ""}`;

  const headerBg = !isHomePage
    ? "text-[#1d1a17] bg-[#fefbf4] border-white/10"
    : isScrolled
      ? "border-gray-200 bg-[#fefbf4] text-black"
      : "border-white/20 bg-transparent text-[#fefbf4]";

  const shouldInvert = !isHomePage ? false : !isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[60] w-full border-b transition-all duration-300 ${headerBg}`}
      >
        <div className="container grid h-[92px] grid-cols-3 items-center px-5">
          <ul className="garamond hidden items-center gap-5 justify-self-start whitespace-nowrap text-[16px] lg:flex">
            <li className={navItem}>
              <button
                onClick={() => setIsShopMenuOpen(true)}
                className="h-full"
              >
                E-Shop
              </button>
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
              <NavLink
                to="/search"
                className={`${navLinkClass} flex items-center`}
              >
                <IoSearchOutline className="mr-2" />
                Search
              </NavLink>
            </li>
          </ul>
          <div className="menubar justify-self-start lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              className="flex items-center"
            >
              <HiOutlineMenu size={26} />
            </button>
          </div>

          {/* Logo */}
          <div className="justify-self-center">
            <Link to="/">
              <img
                src="/assets/logo.svg"
                alt="logo"
                className={`w-[160px] transition-all duration-300 ${
                  shouldInvert ? "brightness-0 invert" : ""
                }`}
              />
            </Link>
          </div>

          {/* Mobile cart */}
          <img
            src="/assets/cart.svg"
            alt="cart"
            className={`justify-self-end transition-all duration-300 lg:hidden ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
          />

          {/* Right */}
          <ul className="garamond hidden items-center gap-6 justify-self-end text-[16px] lg:flex">
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
                src="/assets/cart.svg"
                alt="cart"
                className={`transition-all duration-300 ${
                  shouldInvert ? "brightness-0 invert" : ""
                }`}
              />
            </li>
          </ul>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Shop Menu */}
      <ShopMenu
        isOpen={isShopMenuOpen}
        onClose={() => setIsShopMenuOpen(false)}
      />
    </>
  );
}

export default Header;
