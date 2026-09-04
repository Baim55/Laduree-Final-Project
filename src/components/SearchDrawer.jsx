import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import { IoCloseOutline } from "react-icons/io5";
import { getProducts } from "../services/api";
import { createSlug } from "../utils/createSlug";
import { useLanguage } from "../context/LanguageContext";

const SUGGESTIONS = ["Macarons", "Eugénie", "Chocolate", "Tea", "Gift"];

function SearchDrawer({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const drawerRef = useRef(null);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const drawer = drawerRef.current;
    if (!drawer) return;

    const handleWheel = (event) => {
      event.stopPropagation();
    };

    drawer.addEventListener("wheel", handleWheel, { passive: false });
    return () => drawer.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  const filteredProducts = products.filter((item) => {
    const search = searchTerm.toLowerCase();
    return (
      item.name?.toLowerCase().includes(search) ||
      item.badge?.toLowerCase().includes(search)
    );
  });

  const displayedProducts = searchTerm
    ? filteredProducts
    : products.slice(0, 6);

  return (
    <div
      className={`fixed inset-0 z-[110] transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/20" />
      <div
        ref={drawerRef}
        onWheel={(event) => event.stopPropagation()}
        className={`garamond absolute left-0 top-0 flex h-full w-full max-w-[500px] flex-col bg-[#fefbf4] shadow-xl transition-transform duration-300 overflow-y-auto ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[90px] items-center justify-between border-b px-6 shrink-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t("searchAnything")}
            className="w-full bg-transparent text-[18px] outline-none"
          />
          <button onClick={onClose} className="text-gray-500 cursor-pointer">
            <IoCloseOutline size={26} />
          </button>
        </div>
        <div className="flex items-center gap-3 overflow-x-auto border-b px-6 py-4 text-[14px] shrink-0">
          <span className="italic text-gray-400 whitespace-nowrap">
            {t("searchLabel")}
          </span>
          {SUGGESTIONS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSearchTerm(item)}
              className="text-[#2e2c2a] hover:underline whitespace-nowrap cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {displayedProducts.length === 0 ? (
            <p className="text-center text-gray-500">{t("noResultsFound")}</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {displayedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${createSlug(product.name)}`}
                  onClick={onClose}
                  className="text-center group"
                >
                  <div className="bg-[#f7f4ed] p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[120px] w-full object-contain"
                    />
                  </div>
                  <h4 className="mt-2 text-[13px] group-hover:underline">
                    {product.name}
                  </h4>
                  <p className="text-[13px] text-gray-600">
                    {product.price} EUR
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchDrawer;
