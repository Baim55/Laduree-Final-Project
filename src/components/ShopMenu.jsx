import { useEffect, useRef, useState, Fragment } from "react";
import { Link } from "react-router";
import { menuData } from "../data/menuData";

function getLinkPath(type, slug) {
  if (type === "product") return `/products/${slug}`;
  if (type === "info") return `/pages/${slug}`;
  return `/shop/${slug}`; // collection
}

function ShopMenu({ isOpen, onClose }) {
  const menuRef = useRef(null);
  const [activeTab, setActiveTab] = useState("delivery");

  useEffect(() => {
    if (!isOpen) return;
    const menu = menuRef.current;
    if (!menu) return;

    const handleWheel = (event) => {
      event.preventDefault();
      menu.scrollTop += event.deltaY;
    };

    menu.addEventListener("wheel", handleWheel, { passive: false });
    return () => menu.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  const menuItemClass =
    "relative cursor-pointer text-[#46413de3] transition-all duration-300 hover:translate-x-4 hover:text-[#2e2c2a] before:absolute before:-left-4 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-[#2e2c2a] before:transition-transform before:duration-300 hover:before:scale-100";

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={onClose}
        onWheel={(event) => event.preventDefault()}
        className="absolute inset-0 bg-black/20 backdrop-blur-md"
      />
      <div
        ref={menuRef}
        onWheel={(event) => event.stopPropagation()}
        className={`relative z-10 h-screen w-full max-w-[620px] overflow-y-scroll bg-[#fefbf4] px-8 pb-8 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="sticky left-7 right-7 top-0 z-20 flex items-center justify-between bg-[#fefbf4] py-6">
          <div className="garamond grid w-full grid-cols-2 border border-gray-300">
            <button
              onClick={() => {
                setActiveTab("delivery");
                menuRef.current.scrollTop = 0;
              }}
              className={`h-[50px] text-[16px] transition-all ${
                activeTab === "delivery"
                  ? "border border-black text-[#2e2c2a]"
                  : "text-gray-500"
              }`}
            >
              Delivery
            </button>
            <button
              onClick={() => {
                setActiveTab("pickup");
                menuRef.current.scrollTop = 0;
              }}
              className={`h-[50px] text-[16px] transition-all ${
                activeTab === "pickup"
                  ? "border border-black text-[#2e2c2a]"
                  : "text-gray-500"
              }`}
            >
              Pickup
            </button>
          </div>
        </div>
        <div className="garamond mt-2 grid grid-cols-2 gap-x-10 gap-y-8 pb-5">
          {menuData[activeTab].map((section) => (
            <Fragment key={section.id}>
              <div>
                <Link to={`/shop/${section.slug}`} onClick={onClose}>
                  <h3 className="mb-2 text-[18px] hover:underline">
                    {section.title}
                  </h3>
                </Link>
                <ul className="space-y-2 text-[16px]">
                  {section.links.map((link) => (
                    <li key={link.slug} className={menuItemClass}>
                      <Link
                        to={getLinkPath(link.type, link.slug)}
                        onClick={onClose}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to={`/shop/${section.slug}`} onClick={onClose}>
                <img
                  src={section.image}
                  alt={section.title}
                  className="w-full cursor-pointer object-cover"
                />
              </Link>
            </Fragment>
          ))}
          <Link to="/shop" onClick={onClose}>
            <p className={menuItemClass}>See all</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShopMenu;
