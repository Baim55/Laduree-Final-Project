import { useState, useEffect } from "react";

function ProductImageGallery({ product, overrideImage }) {
  const hasThumbnails = product.images?.length > 0;
  const images = hasThumbnails ? product.images : [product.image];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(overrideImage || images[0]);
  }, [product.slug, overrideImage]);

  return (
    <div className="relative md:sticky md:top-[130px] flex flex-col md:flex-row-reverse gap-5">
      <div className="flex-1 overflow-hidden">
        <img
          src={selectedImage}
          alt={product.name}
          className="h-full max-h-[550px] w-full object-cover"
        />
      </div>
      {hasThumbnails && (
        <div className="flex flex-row md:flex-col w-full md:w-[60px] items-center justify-start md:justify-center gap-4 overflow-x-auto pb-2 md:pb-0">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setSelectedImage(image)}
              className={`flex-shrink-0 overflow-hidden border transition ${
                selectedImage === image ? "border-black" : "border-transparent"
              }`}
            >
              <img
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="h-[60px] w-[60px] md:h-[75px] md:w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductImageGallery;