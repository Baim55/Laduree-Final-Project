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
          <h1 className="mb-8 text-center text-[#2e2c2a] font-semibold text-[36px] leading-[1.1]">
            {product.name}
          </h1>

          {/* INCLUDED PRODUCTS */}
          {product.includedProducts?.length > 0 && (
            <div className="mb-10 grid grid-cols-4 gap-4">
              {product.includedProducts.map((item) => (
                <div key={item.id} className="text-center">
                  <div className="mb-3 flex h-[110px] items-center justify-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full max-w-full object-contain"
                    />
                  </div>

                  <p className="text-[15px] leading-[1.15]">{item.name}</p>

                  <p className="mt-2 text-[14px]">x{item.quantity}</p>
                </div>
              ))}
            </div>
          )}

          {/* ADD TO CART */}
          <button className="w-full bg-[#2e2c2a] py-5 text-[17px] text-white transition hover:opacity-90">
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

          {/* INGREDIENTS & ALLERGENS */}
          <div className="border-b border-dotted border-gray-400">
            <button
              onClick={() => toggleSection("ingredients")}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="text-[17px]">Ingredients & allergens</span>

              <span className="text-[22px]">
                {openSection === "ingredients" ? "−" : "+"}
              </span>
            </button>

            {openSection === "ingredients" && (
              <div className="pb-8 text-[14px] leading-7 text-[#46413d]">
                {/* INGREDIENTS */}
                <h3 className="mb-4 text-[16px]">Ingredient list:</h3>

                {product.details?.ingredients?.map((ingredient, index) => (
                  <div key={index} className="mb-6">
                    <p className="mb-2 font-medium">{ingredient.product}:</p>

                    <p>{ingredient.text}</p>
                  </div>
                ))}

                {/* ALLERGENS */}
                <h3 className="mb-3 mt-8 text-[16px]">Allergen list:</h3>

                <ol className="list-decimal pl-5">
                  {product.details?.allergens?.map((allergen, index) => (
                    <li key={index}>{allergen}</li>
                  ))}
                </ol>

                {/* WEIGHT */}
                <div className="mt-8 space-y-2">
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
              <div className="pb-8 text-[14px] leading-7 text-[#46413d]">
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
