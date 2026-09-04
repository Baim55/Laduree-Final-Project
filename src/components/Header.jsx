import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import ShopMenu from "./ShopMenu";
import CartDrawer from "./CartDrawer";
import SearchDrawer from "./SearchDrawer";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import { getProducts } from "../services/api"; 

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const location = useLocation();
  const { itemCount } = useCart();
  const { lang, toggleLanguage, t } = useLanguage(); 
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    getProducts()
      .then((data) => setAllProducts(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
                type="button"
                onClick={() => setIsShopMenuOpen(true)}
                className="h-full cursor-pointer"
              >
                {t("eshop")}
              </button>
            </li>
            <li className={navItem}>
              <NavLink to="/stores" className={navLinkClass}>
                {t("ourStores")}
              </NavLink>
            </li>
            <li className={navItem}>
              <NavLink to="/corporate" className={navLinkClass}>
                {t("corporate")}
              </NavLink>
            </li>
            <li className={navItem}>
              <NavLink to="/la-maison" className={navLinkClass}>
                {t("laMaison")}
              </NavLink>
            </li>
            <li className={navItem}>
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="flex h-full cursor-pointer items-center"
              >
                <IoSearchOutline className="mr-2" />
                {t("search")}
              </button>
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

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative justify-self-end lg:hidden cursor-pointer"
          >
            <img
              src="/assets/cart.svg"
              alt="cart"
              className={`transition-all duration-300 ${
                shouldInvert ? "brightness-0 invert" : ""
              }`}
            />
            {itemCount > 0 && (
              <span className="absolute garamond -right-3 -top-3 flex h-4 w-4 items-center justify-center rounded-full text-[16px] font-bold">
                {itemCount}
              </span>
            )}
          </button>

          <ul className="garamond hidden items-center gap-6 justify-self-end text-[16px] lg:flex">
            <li className={navItem}>
              <Link to="/club">{t("clubLadurée")}</Link>
            </li>
            <li className={navItem}>
              <button
                type="button"
                onClick={toggleLanguage}
                className="cursor-pointer uppercase tracking-wider"
              >
                {lang === "en" ? "AZ / EN" : "EN / AZ"}
              </button>
            </li>
            <li className={navItem}>
              <Link
                to="/login"
                className="flex h-full items-center cursor-pointer"
              >
                <FaRegUserCircle size={20} />
              </Link>
            </li>
            <li className={navItem}>
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="relative flex cursor-pointer items-center"
              >
                <img
                  src="/assets/cart.svg"
                  alt="cart"
                  className={`transition-all duration-300 ${
                    shouldInvert ? "brightness-0 invert" : ""
                  }`}
                />
                {itemCount > 0 && (
                  <span className="absolute -right-3 -top-3 flex h-4 w-4 items-center justify-center rounded-full text-[16px] font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <ShopMenu
        isOpen={isShopMenuOpen}
        onClose={() => setIsShopMenuOpen(false)}
      />
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        allProducts={allProducts}
      />
      <SearchDrawer
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
}

export default Header;