import ProductImageGallery from "./product/ProductImageGallery";
import ProductAccordions from "./product/ProductAccordions";

function ProductPageSimple({ product }) {
  return (
    <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
      {/* SOL - ŞƏKİL QALEREYASI */}
      <ProductImageGallery product={product} />

      {/* SAĞ TƏRƏF */}
      <div className="px-8 pt-10">
        {/* BADGE */}
        {product.badge && (
          <div className="mb-7 flex justify-center">
            <span className="bg-[#efdfbd] px-4 py-2 text-[14px] italic">
              {product.badge}
            </span>
          </div>
        )}

        {/* BAŞLIQ */}
        <h1 className="mb-6 text-center text-[36px] font-semibold uppercase leading-[1.1] text-[#2e2c2a]">
          {product.name}
        </h1>

        {/* AÇIQLAMA - həmişə açıq görünür, toggle yoxdur */}
        {product.description && (
          <p className="mb-8 text-center text-[16px] leading-7 text-[#46413d]">
            {product.description}
          </p>
        )}

        {/* ADD TO CART */}
        <button
          type="button"
          className="w-full bg-[#2e2c2a] py-3 text-[17px] text-white transition hover:bg-[#1d1a17]"
        >
          Add to cart — {product.price.toFixed(2)} EUR
        </button>

        {/* DELIVERY */}
        <div className="flex items-center justify-center gap-3 py-6 text-[15px] text-[#46413d]">
          <span>🚚</span>
          <span>Express delivery in 24h/48h (Metropolitan France)</span>
        </div>

        {/* ACCORDION-LAR: Usage tips / Ingredients & allergens / Storage */}
        <ProductAccordions product={product} />
      </div>
    </div>
  );
}

export default ProductPageSimple;