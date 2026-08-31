import ProductImageGallery from "./product/ProductImageGallery";
import ProductAccordions from "./product/ProductAccordions";
import { useCart } from "../context/CartContext";

function ProductPageSimple({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
      <ProductImageGallery product={product} />
      <div className="md:px-8 md:pt-10">
        {product.badge && (
          <div className="mb-7 flex justify-center">
            <span className="bg-[#efdfbd] px-4 py-2 text-[14px] italic">
              {product.badge}
            </span>
          </div>
        )}
        <h1 className="mb-6 text-center text-[36px] font-semibold uppercase leading-[1.1] text-[#2e2c2a]">
          {product.name}
        </h1>
        {product.description && (
          <p className="mb-8 text-center text-[16px] leading-7 text-[#46413d]">
            {product.description}
          </p>
        )}
        <button
          onClick={() => addToCart(product)}
          type="button"
          className="w-full bg-[#2e2c2a] py-3 text-[17px] text-white transition hover:bg-[#1d1a17]"
        >
          Add to cart — {product.price.toFixed(2)} EUR
        </button>
        <ProductAccordions product={product} />
      </div>
    </div>
  );
}

export default ProductPageSimple;
