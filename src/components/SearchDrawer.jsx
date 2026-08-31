import { useState, useEffect } from "react";
import { Link } from "react-router";
import { IoCloseOutline } from "react-icons/io5";
import { getProducts } from "../services/api";
import { createSlug } from "../utils/createSlug";

const SUGGESTIONS = ["Macarons", "Eugénie", "Hampers", "Chocolates", "Teas"];

function SearchDrawer({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

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
        className={`garamond absolute left-0 top-0 flex h-full w-full max-w-[500px] flex-col bg-[#fefbf4] shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-[90px] items-center justify-between border-b px-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search anything"
            className="w-full bg-transparent text-[18px] outline-none"
          />
          <button onClick={onClose} className="text-gray-500">
            <IoCloseOutline size={26} />
          </button>
        </div>
        <div className="flex items-center gap-3 overflow-x-auto border-b px-6 py-4 text-[14px]">
          <span className="italic text-gray-400 whitespace-nowrap">
            Search:
          </span>
          {SUGGESTIONS.map((item) => (
            <button
              key={item}
              onClick={() => setSearchTerm(item)}
              className="text-[#2e2c2a] hover:underline whitespace-nowrap"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="flex-1 overflow-y-auto p-6">
          {displayedProducts.length === 0 ? (
            <p className="text-center text-gray-500">No results found.</p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {displayedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${createSlug(product.name)}`}
                  onClick={onClose}
                  className="text-center"
                >
                  <div className="bg-[#f7f4ed] p-2">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[120px] w-full object-contain"
                    />
                  </div>
                  <h4 className="mt-2 text-[13px]">{product.name}</h4>
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
