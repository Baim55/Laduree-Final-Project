import { useState } from "react";
import { Link } from "react-router";
import { HiOutlineTrash } from "react-icons/hi2";
import { BsChatDots } from "react-icons/bs";
import { useCart } from "../context/CartContext";

function CartDrawer({ isOpen, onClose, allProducts = [] }) {
  const {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    total,
    itemCount,
  } = useCart();

  const [bagCount, setBagCount] = useState(0);

  const cartIds = cartItems.map((item) => item.id);
  const suggestions = allProducts
    .filter((product) => !cartIds.includes(product.id))
    .slice(0, 3);

  return (
    <div
      className={`fixed inset-0 z-[110] transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div onClick={onClose} className="absolute inset-0 bg-black/25" />

      <div
        className={`garamond absolute right-0 top-0 flex h-screen max-w-[100vw] transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {suggestions.length > 0 && (
          <div className="hidden w-[180px] flex-col overflow-y-auto bg-[#e5ece1] px-3 py-6 md:flex">
            <h3 className="mb-4 text-center text-[17px] leading-tight text-[#2e2c2a]">
              Complete your
              <br />
              order
            </h3>
            <div className="space-y-4">
              {suggestions.map((product) => (
                <div key={product.id} className="text-center">
                  <div className="relative mx-auto flex h-[160px] w-full items-center justify-center bg-[#fefbf4] p-2 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[140px] w-full object-contain"
                    />
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="absolute bottom-1.5 right-1.5 flex h-6 w-6 cursor-pointer items-center justify-center border border-[#2e2c2a] bg-white text-[16px] hover:bg-[#2e2c2a] hover:text-white"
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2 text-[12px] leading-snug text-[#2e2c2a] line-clamp-2">
                    {product.name}
                  </p>
                  <p className="mt-0.5 text-[12px] font-medium text-[#5c5752]">
                    {product.price} EUR
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex h-full w-[460px] max-w-[95vw] flex-col bg-[#fefbf4] px-6 py-6 sm:px-8">
          <div className="flex items-center justify-between border-b border-[#e5dfd5] pb-4">
            <h2 className="text-[24px] text-[#2e2c2a]">
              Your Cart <span className="text-[16px]">({itemCount})</span>
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer text-[13px] uppercase tracking-wider text-[#706b66] hover:text-black"
            >
              Close
            </button>
          </div>
          <div className="flex items-center justify-between py-3 text-[13px] text-[#5c5752]">
            <div className="flex items-center gap-2">
              <BsChatDots size={15} />
              <span>Customer service is available to help</span>
            </div>
          </div>

          <div className="flex-1 space-y-5 overflow-y-auto border-t border-[#e5dfd5] pt-4 pr-1">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-[16px] text-[#706b66]">
                  Your cart is currently empty.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="mt-4 border border-[#2e2c2a] px-6 py-2 text-[13px] uppercase tracking-widest text-[#2e2c2a] hover:bg-[#2e2c2a] hover:text-white"
                >
                  Discover products
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 border-b border-[#f0ece1] pb-4 last:border-b-0"
                >
                  <div className="flex h-[95px] w-[95px] flex-shrink-0 items-center justify-center border border-[#eee8dc] bg-white p-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-[15px] leading-snug text-[#2e2c2a]">
                        {item.name}
                      </p>
                      <p className="whitespace-nowrap text-[15px] font-medium text-[#2e2c2a]">
                        {(item.price * item.quantity).toFixed(2)} EUR
                      </p>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center border border-[#d5cebf] bg-white text-[13px]">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-6 w-6 cursor-pointer items-center justify-center text-[#5c5752] hover:bg-[#f5f1e8]"
                        >
                          −
                        </button>
                        <span className="w-6 text-center text-[#2e2c2a]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-6 w-6 cursor-pointer items-center justify-center text-[#5c5752] hover:bg-[#f5f1e8]"
                        >
                          +
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="cursor-pointer text-[#a39c93] hover:text-[#b8533c]"
                      >
                        <HiOutlineTrash size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="space-y-4 border-t border-[#e5dfd5] pt-4">
              <div className="flex items-center justify-between text-[13px] text-[#5c5752]">
                <span>Add shopping bags</span>
                <div className="flex items-center border border-[#d5cebf] bg-white">
                  <button
                    type="button"
                    onClick={() => setBagCount((prev) => Math.max(0, prev - 1))}
                    className="flex h-5 w-5 cursor-pointer items-center justify-center hover:bg-gray-100"
                  >
                    −
                  </button>
                  <span className="w-5 text-center text-[12px]">
                    {bagCount}
                  </span>
                  <button
                    type="button"
                    onClick={() => setBagCount((prev) => prev + 1)}
                    className="flex h-5 w-5 cursor-pointer items-center justify-center hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-[16px] text-[#2e2c2a]">
                <span>Total</span>
                <span className="font-semibold">{total.toFixed(2)} EUR</span>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 cursor-pointer border border-[#2e2c2a] bg-transparent py-2.5 text-center text-[13px] uppercase tracking-wider text-[#2e2c2a] hover:bg-[#2e2c2a] hover:text-white"
                >
                  Continue shopping
                </button>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="flex-1 cursor-pointer border border-[#2e2c2a] bg-[#2e2c2a] py-2.5 text-center text-[13px] uppercase tracking-wider text-white hover:bg-black"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartDrawer;
