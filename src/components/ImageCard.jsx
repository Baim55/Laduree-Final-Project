import { useCart } from "../context/CartContext";

function ImageCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="group relative w-full cursor-pointer overflow-hidden bg-[#fefbf4]">
      <img
        src={product.image}
        alt={product.name}
        className="block w-full transition-opacity duration-500 group-hover:opacity-0"
      />
      <img
        src={product.hoverImage || product.image}
        alt={product.name}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <button
        type="button"
        onClick={handleAddToCart}
        aria-label="Add to cart"
        className="absolute bottom-2 right-2 z-20 flex h-7 w-7 items-center justify-center bg-white/90 text-[18px] font-light text-[#2e2c2a] shadow-sm transition hover:bg-[#dce7c6] md:hidden"
      >
        +
      </button>
      <div className="pointer-events-none absolute bottom-4 left-1/2 z-20 hidden w-[92%] -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-500 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 md:block">
        <button
          type="button"
          onClick={handleAddToCart}
          className="garamond flex w-full cursor-pointer items-center justify-between bg-white px-6 py-4 duration-150 hover:bg-[#dce7c6]"
        >
          <span>Add to cart</span>
          <img src="/assets/cart.svg" alt="cart" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default ImageCard;
