import ProductImageGallery from "./product/ProductImageGallery";
import ProductAccordions from "./product/ProductAccordions";

function ProductPageBundle({ product }) {
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
        <h1 className="mb-8 text-center text-[36px] font-semibold uppercase leading-[1.1] text-[#2e2c2a]">
          {product.name}
        </h1>

        {/* DAXİL OLAN MƏHSULLAR */}
        {product.includedProducts?.length > 0 && (
          <div className="mb-10">
            {Array.from(
              { length: Math.ceil(product.includedProducts.length / 4) },
              (_, rowIndex) => {
                const rowItems = product.includedProducts.slice(
                  rowIndex * 4,
                  rowIndex * 4 + 4,
                );

                return (
                  <div key={rowIndex} className="mb-4 flex justify-center gap-1">
                    {rowItems.map((item, itemIndex) => (
                      <div
                        key={`${item.id}-${itemIndex}`}
                        className="group w-[100px] cursor-default text-center"
                      >
                        <div className="relative mx-auto h-[90px] w-full">
                          <img
                            src={item.image}
                            alt={item.name}
                            className={`absolute inset-0 h-full w-full object-contain ${
                              item.hoverText
                                ? "transition-opacity duration-300 group-hover:opacity-0"
                                : ""
                            }`}
                          />

                          {item.hoverText && (
                            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#fcf6ed] px-2 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                              <p className="text-[13px] leading-5 text-[#2e2c2a]">
                                {item.hoverText}
                              </p>
                            </div>
                          )}
                        </div>

                        <p className="text-[15px] leading-[1.15]">{item.name}</p>
                        <p className="mt-2 text-[14px]">x{item.quantity}</p>
                      </div>
                    ))}
                  </div>
                );
              },
            )}
          </div>
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

        {/* ACCORDION-LAR (Description da daxil, açılıb-bağlanır) */}
        <ProductAccordions product={product} showDescription />
      </div>
    </div>
  );
}

export default ProductPageBundle;