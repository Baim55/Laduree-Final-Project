import { useEffect, useRef, useState } from "react";
import CasabalancaCollection from "../../public/assets/img/casablanca.avif";
import Macarons from "../../public/assets/img/macarons.avif";
import Eugénie from "../../public/assets/img/eugenie.avif";
import Selections from "../../public/assets/img/selections.avif";
import Chocolates from "../../public/assets/img/chocolates.avif";
import TeaTime from "../../public/assets/img/teaTime.avif";
import Gifts from "../../public/assets/img/gifts.avif";
import Pyramidas from "../../public/assets/img/pyramidas.avif";
import Patisserie from "../../public/assets/img/patisserie.avif";

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

    menu.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      menu.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen]);

  const menuItemClass =
    "relative cursor-pointer text-[#46413de3] transition-all duration-300 hover:translate-x-4 hover:text-[#2e2c2a] before:absolute before:-left-4 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-[#2e2c2a] before:transition-transform before:duration-300 hover:before:scale-100";

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Overlay */}
      <div
        onClick={onClose}
        onWheel={(event) => {
          event.preventDefault();
        }}
        className="absolute inset-0 bg-black/20 backdrop-blur-md"
      />

      {/* Menu */}
      <div
        ref={menuRef}
        onWheel={(event) => {
          event.stopPropagation();
        }}
        className={`relative z-10 h-screen w-full max-w-[620px] overflow-y-scroll bg-[#fefbf4] px-8 pb-8 transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Delivery / Pickup */}
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

        {/* DELIVERY CONTENT */}
        {activeTab === "delivery" && (
          <div className="garamond mt-2 grid grid-cols-2 gap-x-10 gap-y-8 pb-5">
            {/* Summer editions */}
            <div>
              <h3 className="mb-2 text-[18px]">Summer editions</h3>

              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>
                  “Casablanca x Ladurée” Collection
                </li>

                <li className={menuItemClass}>Collector's Days</li>

                <li className={menuItemClass}>Ice Creams & Sorbets</li>
              </ul>
            </div>

            <img
              src={CasabalancaCollection}
              alt="Casablanca collection"
              className="w-full object-cover"
            />

            {/* Macarons */}
            <div>
              <h3 className="mb-2 text-[18px]">Macarons</h3>

              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>
                  “Casablanca” Macarons gift box
                </li>

                <li className={menuItemClass}>Macarons boxes</li>

                <li className={menuItemClass}>Boxes to compose</li>

                <li className={menuItemClass}>Flavor Guide</li>
              </ul>
            </div>

            <img
              src={Macarons}
              alt="Macarons"
              className="w-full object-cover"
            />

            {/* Eugénie */}
            <div>
              <h3 className="mb-2 text-[18px]">Eugénie</h3>

              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>“Casablanca” Eugénie gift box</li>

                <li className={menuItemClass}>Eugénie boxes</li>

                <li className={menuItemClass}>Boxes to compose</li>

                <li className={menuItemClass}>Flavor Guide</li>
              </ul>
            </div>

            <img src={Eugénie} alt="Eugénie" className="w-full object-cover" />

            {/* Selections */}
            <div>
              <h3 className="mb-2 text-[18px]">Selections</h3>

              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>Thank you</li>

                <li className={menuItemClass}>Birthday boxes</li>

                <li className={menuItemClass}>Congratulations</li>
              </ul>
            </div>

            <img
              src={Selections}
              alt="Selections"
              className="w-full object-cover"
            />

            {/* Chocolates */}
            <div>
              <h3 className="mb-2 text-[18px]">Chocolates</h3>

              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>Chocolates & Confectioneries</li>

                <li className={menuItemClass}>Chocolate pearls</li>

                <li className={menuItemClass}>Marshmallow bears</li>

                <li className={menuItemClass}>Sugared Almonds</li>
              </ul>
            </div>

            <img
              src={Chocolates}
              alt="Chocolates"
              className="w-full object-cover"
            />
            {/* Tea Time */}
            <div>
              <h3 className="mb-2 text-[18px]">Tea Time</h3>
              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>Signature Teas</li>
                <li className={menuItemClass}>Jams & Honeys</li>
                <li className={menuItemClass}>Biscuits</li>
                <li className={menuItemClass}>Fondants</li>
                <li className={menuItemClass}>All our tea products</li>
              </ul>
            </div>
            <img src={TeaTime} alt="Tea Time" className="w-full object-cover" />

            {/* Gifts */}
            <div>
              <h3 className="mb-2 text-[18px]">Gifts</h3>
              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>Assortments ready to offer</li>
                <li className={menuItemClass}>Create your own hamper</li>
                <li className={menuItemClass}>Accessories</li>
                <li className={menuItemClass}>Personalisation offers</li>
                <li className={menuItemClass}>Experiences to offer</li>
                <li className={menuItemClass}>Gifting occasions</li>
              </ul>
            </div>

            <img src={Gifts} alt="Gifts" className="w-full object-cover" />

            <div>
              <h3 className={menuItemClass}>See all</h3>
            </div>
          </div>
        )}

        {/* PICKUP CONTENT */}
        {activeTab === "pickup" && (
          <div className="garamond mt-2 grid grid-cols-2 gap-x-10 gap-y-8 pb-5">
            {/* Tea Time */}
            <div>
              <h3 className="mb-2 text-[18px]">Macarons Pyramids</h3>
              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>Pyramid of classic macarons</li>
                <li className={menuItemClass}>Pyramid of gold macarons</li>
                <li className={menuItemClass}>All our Pyramids</li>
              </ul>
            </div>
            <img src={Pyramidas} alt="Pyramidas" className="w-full object-cover" />

            {/* Gifts */}
            <div>
              <h3 className="mb-2 text-[18px]">Pastries to share</h3>
              <ul className="space-y-2 text-[16px]">
                <li className={menuItemClass}>Milk Chocolate XXL Marshmallow</li>
                <li className={menuItemClass}>Ispahan</li>
                <li className={menuItemClass}>Plaisir Sucré</li>
                <li className={menuItemClass}>Flan</li>
                <li className={menuItemClass}>Number & Letter cakes</li>
                <li className={menuItemClass}>All our pastries</li>
              </ul>
            </div>
            <img
              src={Patisserie}
              alt="Patisserie"
              className="w-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ShopMenu;
