import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "../../public/assets/logo.svg";
import Cart from "../../public/assets/cart.svg";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import ShopMenu from "./ShopMenu";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Menyu açıq olanda arxadakı Home scroll olmasın
  useEffect(() => {
    const isAnyMenuOpen = isMobileMenuOpen || isShopMenuOpen;

    if (isAnyMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isShopMenuOpen]);

  const navItem =
    "relative flex items-center h-[92px] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full";

  const navLinkClass = ({ isActive }) =>
    `${navItem} ${isActive ? "after:w-full" : ""}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-[60] w-full border-b transition-all duration-300 ${
          isScrolled
            ? "border-gray-200 bg-[#fefbf4] text-black"
            : "border-white/20 bg-transparent text-[#fefbf4]"
        }`}
      >
        <div className="container grid h-[92px] grid-cols-3 items-center px-5">
          {/* Left */}
          <ul className="garamond hidden items-center gap-5 justify-self-start whitespace-nowrap text-[16px] lg:flex">
            {/* E-Shop */}
            <li className={navItem}>
              <button
                onClick={() => setIsShopMenuOpen(true)}
                className="h-full"
              >
                E-Shop
              </button>
            </li>

            {/* Our stores */}
            <li className={navItem}>
              <NavLink to="/stores" className={navLinkClass}>
                Our stores
              </NavLink>
            </li>

            {/* Corporate */}
            <li className={navItem}>
              <NavLink to="/corporate" className={navLinkClass}>
                Corporate
              </NavLink>
            </li>

            {/* La Maison */}
            <li className={navItem}>
              <NavLink to="/laMaison" className={navLinkClass}>
                La Maison
              </NavLink>
            </li>

            {/* Search */}
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

          {/* Mobile hamburger */}
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
            <img
              src={Logo}
              alt="logo"
              className={`w-[160px] transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </div>

          {/* Mobile cart */}
          <img
            src={Cart}
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
