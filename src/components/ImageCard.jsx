import Cart from "../../public/assets/cart.svg";

function ImageCard({ src, hoverSrc, alt }) {
  return (
    <div className="group relative overflow-hidden bg-[#fefbf4] cursor-pointer">
      {/* Label */}
      <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2">
        <span className="inline-block whitespace-nowrap bg-[#efdfbd] px-4 py-1 garamond text-[16px]">
          Casablanca x Ladurée
        </span>
      </div>

      {/* Normal şəkil */}
      <img
        src={src}
        alt={alt}
        className="block w-full transition-opacity duration-500 group-hover:opacity-0"
      />

      {/* Hover şəkli */}
      <img
        src={hoverSrc}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Add to cart */}
      <div className="absolute bottom-4 left-1/2 z-20 w-[92%] -translate-x-1/2 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        <button className="flex w-full items-center justify-between bg-white hover:bg-[#dce7c6] duration-150 cursor-pointer px-6 py-4 garamond">
          <span>Add to cart</span>
          <img src={Cart} alt="cart" />
        </button>
      </div>
    </div>
  );
}

export default ImageCard;
