import { useState, useEffect } from "react";

function ProductImageGallery({ product, overrideImage }) {
  const hasThumbnails = product.images?.length > 0;
  const images = hasThumbnails ? product.images : [product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(overrideImage || images[0]);
  }, [product.slug, overrideImage]);

  return (
    <div className="sticky top-[130px] flex gap-5">
      {hasThumbnails && (
        <div className="flex w-[60px] flex-col items-center justify-center gap-4">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`overflow-hidden border transition ${
                selectedImage === image ? "border-black" : "border-transparent"
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
      )}

      <div className="flex-1 overflow-hidden">
        <img
          src={selectedImage}
          alt={product.name}
          className="h-full max-h-[550px] w-full object-cover"
        />
      </div>
    </div>
  );
}

export default ProductImageGallery;
