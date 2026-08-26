import { useState, useEffect, useMemo, useRef } from "react";
import { Link } from "react-router";
import { IoCloseOutline } from "react-icons/io5";
import { getProducts } from "../services/api";
import { createSlug } from "../utils/createSlug";

const SUGGESTIONS = ["Macarons", "Eugénie", "Hampers", "Chocolates", "Teas"];

function SearchDrawer({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const inputRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    getProducts().then(setProducts).catch(console.error);
  }, []);

  // 1. Əvvəlcə displayedProducts təyin olunur:
  const displayedProducts = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return products.slice(0, 6);

    return products.filter((product) => {
      const matchName = product.name?.toLowerCase().includes(term);
      const matchBadge = product.badge?.toLowerCase().includes(term);
      return matchName || matchBadge;
    });
  }, [searchTerm, products]);

  // 2. Sonra wheel hadisəsi qeydiyyatdan keçirilir:
  useEffect(() => {
    if (!isOpen) {
      setSearchTerm("");
      return;
    }

    setTimeout(() => inputRef.current?.focus(), 150);

    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      e.preventDefault();
      container.scrollTop += e.deltaY;
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, [isOpen, displayedProducts]);

  return (
    <div
      className={`fixed inset-0 z-[110] transition-all duration-500 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        onWheel={(e) => e.preventDefault()}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />

      {/* Drawer Panel */}
      <div
        className={`garamond absolute left-0 top-0 flex h-full w-full max-w-[520px] flex-col bg-[#fefbf4] shadow-2xl transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[92px] items-center justify-between border-b border-gray-200 px-6">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search anything"
            className="w-full bg-transparent text-[18px] text-[#2e2c2a] placeholder-gray-400 outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-gray-500 transition hover:text-black"
          >
            <IoCloseOutline size={26} />
          </button>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto border-b border-gray-100 px-6 py-4 scrollbar-hide text-[15px]">
          <span className="italic text-gray-500 whitespace-nowrap">
            Search suggestions
          </span>
          {SUGGESTIONS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setSearchTerm(item)}
              className="cursor-pointer whitespace-nowrap text-[#2e2c2a] transition hover:text-black hover:underline"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Scroll Olunan Hissə */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6">
          {displayedProducts.length === 0 ? (
            <p className="py-12 text-center text-[16px] text-gray-500">
              "{searchTerm}" üçün nəticə tapılmadı.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
              {displayedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${createSlug(product.name)}`}
                  onClick={onClose}
                  className="group block"
                >
                  <div className="relative overflow-hidden bg-[#f7f4ed]">
                    {product.badge && (
                      <div className="absolute left-1/2 top-2 z-10 -translate-x-1/2">
                        <span className="whitespace-nowrap bg-[#efdfbd] px-2 py-0.5 text-[11px] text-[#2e2c2a]">
                          {product.badge}
                        </span>
                      </div>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[135px] w-full object-contain p-2 transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-2 text-center">
                    <h4 className="text-[13px] leading-tight text-[#2e2c2a] transition group-hover:opacity-75">
                      {product.name}
                    </h4>
                    <p className="mt-1 text-[13px] text-gray-600">
                      {product.price.toFixed(2)} EUR
                    </p>
                  </div>
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