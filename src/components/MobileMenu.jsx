import { useState } from "react";
import { Link } from "react-router";
import {
  IoChevronForward,
  IoSearchOutline,
  IoArrowBack,
  IoCloseOutline,
} from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { useCart } from "../context/CartContext";
import { menuData } from "../data/menuData";

const mainLinks = [
  { label: "Our stores", to: "/stores" },
  { label: "Corporate", to: "/corporate" },
  { label: "La Maison", to: "/la-maison" },
  { label: "Le Club Ladurée", to: "/club" },
];

function MobileMenu({ isOpen, onClose }) {
  const { itemCount } = useCart();
  const [view, setView] = useState("main");
  const [activeTab, setActiveTab] = useState("delivery"); 

  const handleClose = () => {
    setView("main");
    onClose();
  };

  return (
    <>
      <div
        onClick={handleClose}
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity duration-300 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />
      <div
        className={`fixed top-0 left-0 z-[60] flex h-full w-full flex-col bg-[#fefbf4] transition-transform duration-300 ease-out sm:w-[420px] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {view === "main" ? (
          <>
            <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-gray-100 px-6">
              <button
                onClick={handleClose}
                className="cursor-pointer text-[18px] tracking-wide text-gray-700 hover:text-black"
              >
                Close
              </button>

              <Link to="/" onClick={handleClose}>
                <img src="/assets/logo.svg" alt="logo" className="w-[130px]" />
              </Link>

              <Link
                to="/checkout"
                onClick={handleClose}
                className="relative flex items-center"
              >
                <img src="/assets/cart.svg" alt="cart" className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="garamond absolute -right-2.5 -top-2.5 flex h-4 w-4 items-center justify-center rounded-full text-[14px] font-bold text-black">
                    {itemCount}
                  </span>
                )}
              </Link>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="garamond border border-[#e2ddd4] bg-[#faf6ec] px-6 py-5">
                <div className="flex items-center gap-3 text-gray-500">
                  <IoSearchOutline size={20} className="text-[#2e2c2a]" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="w-full bg-transparent text-[18px] text-[#2e2c2a] placeholder-[#2e2c2a]/70 outline-none"
                  />
                </div>
              </div>
              <ul className="garamond flex flex-col px-6">
                <li className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => setView("eshop")}
                    className="flex w-full items-center justify-between py-5 text-left text-[24px] text-[#2e2c2a] transition-colors hover:text-gray-600 sm:text-[28px]"
                  >
                    <span>E-Shop</span>
                    <IoChevronForward size={20} className="text-gray-400" />
                  </button>
                </li>
                {mainLinks.map((item) => (
                  <li key={item.label} className="border-b border-gray-100">
                    <Link
                      to={item.to}
                      onClick={handleClose}
                      className="flex items-center justify-between py-5 text-[24px] text-[#2e2c2a] transition-colors hover:text-gray-600 sm:text-[28px]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="shrink-0 border-t border-gray-100">
              <Link
                to="/login"
                onClick={handleClose}
                className="flex items-center gap-3 border-b border-gray-100 px-6 py-5 text-[15px] text-[#2e2c2a]"
              >
                <FaRegUserCircle size={20} />
                Account
              </Link>
              <button
                type="button"
                className="flex w-full items-center gap-3 px-6 py-5 text-[15px] text-[#2e2c2a]"
              >
                <HiOutlineGlobeAlt size={20} />
                FR / EN
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-gray-100 px-6">
              <button
                type="button"
                onClick={() => setView("main")}
                className="cursor-pointer text-gray-700 hover:text-black"
                title="Back"
              >
                <IoArrowBack size={22} />
              </button>
              <h2 className="garamond text-[18px] font-normal uppercase tracking-[0.15em] text-[#2e2c2a]">
                E-Shop
              </h2>
              <button
                type="button"
                onClick={handleClose}
                className="cursor-pointer text-gray-700 hover:text-black"
                title="Close"
              >
                <IoCloseOutline size={26} />
              </button>
            </div>
            <div className="px-6 pt-6">
              <div className="garamond grid grid-cols-2 border border-[#d5cebf]">
                <button
                  type="button"
                  onClick={() => setActiveTab("delivery")}
                  className={`h-[48px] text-[16px] transition ${
                    activeTab === "delivery"
                      ? "border border-black bg-[#fefbf4] font-medium text-[#2e2c2a]"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Delivery
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("pickup")}
                  className={`h-[48px] text-[16px] transition ${
                    activeTab === "pickup"
                      ? "border border-black bg-[#fefbf4] font-medium text-[#2e2c2a]"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  Pickup
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="garamond flex flex-col">
                {menuData[activeTab]?.map((item) => (
                  <li
                    key={item.id}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    <Link
                      to={`/shop/${item.slug}`}
                      onClick={handleClose}
                      className="flex items-center justify-between py-4 text-[22px] text-[#2e2c2a] transition hover:text-gray-600 sm:text-[24px]"
                    >
                      <span>{item.title}</span>
                      <IoChevronForward size={18} className="text-gray-400" />
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/shop"
                    onClick={handleClose}
                    className="block py-4 text-[22px] text-[#2e2c2a] hover:underline sm:text-[24px]"
                  >
                    See all
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default MobileMenu;
