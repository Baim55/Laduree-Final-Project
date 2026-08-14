import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductBySlug } from "../services/api";

function ProductPage() {
  const { slug } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [openSection, setOpenSection] = useState(null);

  useEffect(() => {
    setLoading(true);

    getProductBySlug(slug)
      .then((data) => {
        setProduct(data);

        if (data) {
          setSelectedImage(data.images?.[0] || data.image);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  if (loading) {
    return (
      <p className="garamond pt-[150px] text-center text-[18px]">Yüklənir...</p>
    );
  }

  if (!product) {
    return (
      <p className="garamond pt-[150px] text-center text-[18px]">
        Məhsul tapılmadı.
      </p>
    );
  }

  const images = product.images?.length ? product.images : [product.image];

  return (
    <div className="garamond bg-[#fcf6ed] px-8 pt-[130px] pb-20">
      {/* MAIN PRODUCT AREA */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* LEFT - IMAGE GALLERY */}
        <div className="md:sticky top-[130px] flex gap-5">
          {/* THUMBNAILS */}
          <div className="flex w-[60px] flex-col gap-4 items-center justify-center">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`overflow-hidden border transition ${
                  selectedImage === image
                    ? "border-black"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="h-[75px] w-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* BIG IMAGE */}
          <div className="flex-1 overflow-hidden">
            <img
              src={selectedImage}
              alt={product.name}
              className="h-full max-h-[550px] w-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="px-8 pt-10">
          {/* BADGE */}
          <div className="mb-7 flex justify-center">
            <span className="bg-[#efdfbd] px-4 py-2 text-[14px] italic">
              Casablanca x Ladurée
            </span>
          </div>

          {/* TITLE */}
          <h1 className="mb-8 text-center uppercase text-[#2e2c2a] font-semibold text-[36px] leading-[1.1]">
            {product.name}
          </h1>

          {/* INCLUDED PRODUCTS */}
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
                    <div
                      key={rowIndex}
                      className="mb-4 flex justify-center gap-1"
                    >
                      {rowItems.map((item) => (
                        <div
                          key={item.id}
                          className="group w-[100px] cursor-default text-center"
                        >
                          {/* IMAGE / HOVER TEXT */}
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

                            {/* HOVER TEXT */}
                            {item.hoverText && (
                              <div className="absolute inset-0 flex items-center justify-center bg-[#fcf6ed] px-2 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <p className="text-[13px] leading-5 text-[#2e2c2a]">
                                  {item.hoverText}
                                </p>
                              </div>
                            )}
                          </div>

                          {/* NAME */}
                          <p className="text-[15px] leading-[1.15]">
                            {item.name}
                          </p>

                          {/* QUANTITY */}
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
          <button className="w-full bg-[#2e2c2a] py-3 text-[17px] text-white transition hover:bg-[#1d1a17]">
            Add to cart — {product.price.toFixed(2)} EUR
          </button>

          {/* DELIVERY */}
          <div className="flex items-center justify-center gap-3 py-6 text-[15px] text-[#46413d]">
            <span>♧</span>
            <span>Express delivery in 24h/48h (Metropolitan France)</span>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-dotted border-gray-400" />

          {/* DESCRIPTION */}
          <div className="border-b border-dotted border-gray-400">
            <button
              onClick={() => toggleSection("description")}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-[17px]">Description</span>

              <span className="text-[22px]">
                {openSection === "description" ? "−" : "+"}
              </span>
            </button>

            {openSection === "description" && (
              <div className="pb-7 text-[15px] leading-7 text-[#46413d]">
                {product.description}
              </div>
            )}
          </div>

          <div className="border-b border-dotted border-gray-400">
            <button
              onClick={() => toggleSection("ingredients")}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-[17px]">Ingredients & allergens</span>

              <span className="text-[22px] font-light">
                {openSection === "ingredients" ? "−" : "+"}
              </span>
            </button>

            {openSection === "ingredients" && (
              <div className="pb-8 text-[14px] leading-7 text-[#46413d]">
                {/* ============================== */}
                {/* NUTRITION */}
                {/* ============================== */}

                {product.details?.nutrition && (
                  <div className="mb-8">
                    <h3 className="mb-5 text-[15px]">
                      Average nutritional values per 100g:
                    </h3>

                    <div className="grid grid-cols-2 border-t border-dotted border-gray-300">
                      <div className="space-y-2 py-3 pr-5">
                        <div className="flex justify-between gap-4">
                          <span>Energy</span>
                          <span>{product.details.nutrition.energy}</span>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span>Carbohydrate</span>
                          <span>{product.details.nutrition.carbohydrate}</span>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span>Sugars</span>
                          <span>{product.details.nutrition.sugars}</span>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span>Salt</span>
                          <span>{product.details.nutrition.salt}</span>
                        </div>
                      </div>

                      <div className="space-y-2 border-l border-dotted border-gray-300 py-3 pl-5">
                        <div className="flex justify-between gap-4">
                          <span>Fat</span>
                          <span>{product.details.nutrition.fat}</span>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span>Saturated fat</span>
                          <span>{product.details.nutrition.saturatedFat}</span>
                        </div>

                        <div className="flex justify-between gap-4">
                          <span>Protein</span>
                          <span>{product.details.nutrition.protein}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* ============================== */}
                {/* INGREDIENT LIST */}
                {/* ============================== */}

                <h3 className="mb-4 text-[15px]">Ingredient list:</h3>

                {product.details?.ingredients?.map((ingredient, index) => (
                  <div key={index} className="mb-6">
                    <p className="mb-2 font-medium">{ingredient.product}:</p>

                    <p>{ingredient.text}</p>
                  </div>
                ))}

                {/* ============================== */}
                {/* ALLERGENS */}
                {/* ============================== */}

                {product.details?.allergens?.length > 0 && (
                  <div className="mt-8">
                    <h3 className="mb-3 text-[15px]">Allergen list:</h3>

                    <ol className="list-decimal pl-5 grid grid-cols-1 md:grid-cols-2">
                      {product.details.allergens.map((allergen, index) => (
                        <li key={index}>{allergen}</li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* MAY CONTAIN */}
                {product.details?.mayContain && (
                  <div className="mt-3">
                    <h3 className="text-[15px]">
                      May contain traces of: {product.details.mayContain}
                    </h3>
                  </div>
                )}
                {/* WEIGHT */}
                <div className="mt-3">
                  <p>
                    <strong>Net weight:</strong> {product.details?.netWeight}
                  </p>
                  <p>
                    <strong>Price per kg:</strong> {product.details?.pricePerKg}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* STORAGE */}
          <div className="border-b border-dotted border-gray-400">
            <button
              onClick={() => toggleSection("storage")}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-[17px]">Storage</span>

              <span className="text-[22px]">
                {openSection === "storage" ? "−" : "+"}
              </span>
            </button>

            {openSection === "storage" && (
              <div className="pb-8 text-[14px] leading-6 text-[#46413d]">
                {product.details?.storage?.map((storage, index) => (
                  <div key={index} className="mb-6">
                    <p className="mb-1 font-medium">{storage.product}:</p>

                    <p>{storage.text}</p>
                  </div>
                ))}

                {/* DEFROSTING */}
                {product.details?.defrosting && (
                  <p className="mt-6">{product.details.defrosting}</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
