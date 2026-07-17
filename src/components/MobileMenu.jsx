import { Link } from "react-router";
import { IoChevronForward, IoSearchOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import Logo from "../../public/assets/logo.svg";
import Cart from "../../public/assets/cart.svg";

const links = [
  { label: "E-Shop", to: "/eShop", hasArrow: true },
  { label: "Our stores", to: "/stores" },
  { label: "Corporate", to: "/corporate" },
  { label: "La Maison", to: "/laMaison" },
  { label: "Le Club Ladurée", to: "/club" },
];

function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className={`bg-black/40 fixed inset-0 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-[420px] z-[60] flex flex-col bg-[#fefbf4] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 h-[70px] border-b border-gray-100 shrink-0">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-[20px] tracking-wide text-gray-700"
          >
            Close
          </button>

          <img src={Logo} alt="logo" className="w-[130px]" />

          <Link to="/cart" className="flex items-center gap-1 text-sm">
            <img src={Cart} alt="cart" className="w-5 h-5" />
          </Link>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          {/* Search */}
          <div className="garamond px-6 py-6 bg-[#faf6ec] border border-[#e2ddd4]">
            <div className="flex items-center gap-3 text-gray-500">
              <IoSearchOutline size={20} className="text-[#2e2c2a]" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full outline-none placeholder-[#2e2c2a] text-[20px]"
              />
            </div>
          </div>

          {/* Nav links */}
          <ul className="garamond flex flex-col px-6">
            {links.map((item) => (
              <li key={item.label} className="border-b border-gray-100">
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="flex items-center justify-between py-5 text-[28px] hover:text-gray-600 transition-colors"
                >
                  {item.label}
                  {item.hasArrow && (
                    <IoChevronForward size={20} className="text-gray-400" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom fixed section */}
        <div className="shrink-0 border-t border-gray-100">
          <Link
            to="/account"
            onClick={onClose}
            className="flex items-center gap-3 px-6 py-5 text-[15px] border-b border-gray-100"
          >
            <FaRegUserCircle size={20} />
            Account
          </Link>

          <button className="flex items-center gap-3 px-6 py-5 text-[15px] w-full">
            <HiOutlineGlobeAlt size={20} />
            FR / EN
          </button>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;