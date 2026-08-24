import { Link } from "react-router";
import { HiOutlineShoppingBag, HiOutlineTrash } from "react-icons/hi";
import { useCart } from "../context/CartContext";

const sampleSuggestions = [
  {
    id: 101,
    name: "Duo of Ladurée Marshmallow Bears - Milk and Dark Chocolate",
    price: 12,
    image:
      "/assets/img/products/Dark_Chocolate_Marshmallow_bear_1_-_With_shadow.avif",
  },
  {
    id: 102,
    name: "Pearls box Ispahan almond",
    price: 17,
    image: "/assets/img/products/pearls-box.webp",
  },
];

function CartDrawer({ isOpen, onClose }) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    total,
    itemCount,
  } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[110] transition-all duration-500 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
      />
      <div
        className={`garamond absolute right-0 top-0 flex h-screen transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {sampleSuggestions.length > 0 && (
          <div className="hidden w-[280px] overflow-y-auto bg-[#eef1e3] px-6 py-8 md:block">
            <h3 className="mb-6 text-[24px] leading-[1.2]">
              Complete your order
            </h3>
            <div className="space-y-6">
              {sampleSuggestions.map((product) => (
                <div key={product.id}>
                  <div className="relative bg-[#fefbf4] p-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-[140px] w-full object-contain"
                    />
                    <button
                      type="button"
                      className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center border border-[#2e2c2a] bg-white text-[18px] leading-none transition hover:bg-[#2e2c2a] hover:text-white"
                      aria-label={`${product.name} əlavə et`}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-3 text-[15px] leading-[1.3]">
                    {product.name}
                  </p>
                  <p className="mt-1 text-[14px]">{product.price} EUR</p>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex h-full w-[480px] max-w-[90vw] flex-col bg-[#fefbf4] px-8 py-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-[26px]">
              Your Cart <span className="text-[18px]">({itemCount})</span>
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="text-[15px] text-[#46413d] hover:underline"
            >
              Close
            </button>
          </div>
          <div className="mb-6 flex items-center gap-3 border-t border-b border-dotted border-gray-300 py-4 text-[14px] text-[#46413d]">
            <HiOutlineShoppingBag size={20} />
            <div>
              <p>Free Shipping</p>
              <p className="text-gray-500">Free shipping for your order</p>
            </div>
          </div>
          <div className="flex-1 space-y-6 overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center text-[16px] text-gray-500">
                Səbətiniz boşdur.
              </p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-[90px] w-[90px] flex-shrink-0 bg-[#f5f1e8] object-contain"
                  />
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-[16px] leading-[1.3]">{item.name}</p>
                      <p className="whitespace-nowrap text-[16px]">
                        {(item.price * item.quantity).toFixed(2)} EUR
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300">
                        <button
                          type="button"
                          onClick={() => decreaseQuantity(item.id)}
                          className="flex h-8 w-8 items-center justify-center text-[16px] hover:bg-gray-100"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-[15px]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => increaseQuantity(item.id)}
                          className="flex h-8 w-8 items-center justify-center text-[16px] hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        aria-label="Sil"
                        className="text-gray-400 transition hover:text-black"
                      >
                        <HiOutlineTrash size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          {cartItems.length > 0 && (
            <div className="mt-6 border-t border-gray-300 pt-6">
              <div className="mb-5 flex items-center justify-between text-[18px]">
                <span>Total</span>
                <span>{total.toFixed(2)} EUR</span>
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 border border-[#2e2c2a] py-3 text-[15px] transition hover:bg-gray-100"
                >
                  Continue shopping
                </button>
                <Link
                  to="/checkout"
                  onClick={onClose}
                  className="flex-1 bg-[#2e2c2a] py-3 text-center text-[15px] text-white transition hover:bg-[#1d1a17]"
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
