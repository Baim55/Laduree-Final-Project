import { useCart } from "../context/CartContext";

function ImageCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    addToCart(product);
  };

  return (
    <div className="group relative cursor-pointer overflow-hidden bg-[#fefbf4]">
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

      <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute bottom-4 left-1/2 z-20 w-[92%] -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <button
          type="button"
          onClick={handleAddToCart}
          className="flex w-full cursor-pointer items-center justify-between bg-white px-6 py-4 duration-150 hover:bg-[#dce7c6] garamond"
        >
          <span>Add to cart</span>

          <img
            src="/assets/cart.svg"
            alt="cart"
            className="h-5 w-5"
          />
        </button>
      </div>
    </div>
  );
}

export default ImageCard;