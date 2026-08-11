import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getProductBySlug } from "../services/api";

function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductBySlug(slug)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <p className="pt-[150px] text-center">Yüklənir...</p>;
  }

  if (!product) {
    return <p className="pt-[150px] text-center">Məhsul tapılmadı.</p>;
  }

  return (
    <div className="garamond grid grid-cols-2 gap-16 px-16 pt-[150px] pb-16">
      <img
        src={product.image}
        alt={product.name}
        className="w-full object-cover"
      />
      <div>
        <h1 className="mb-6 text-[36px]">{product.name}</h1>
        <p className="mb-8 text-[16px] text-[#46413de3]">
          {product.description}
        </p>
        <button className="w-full bg-[#2e2c2a] py-4 text-[16px] text-white transition hover:opacity-90">
          Add to cart — {product.price.toFixed(2)} EUR
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
