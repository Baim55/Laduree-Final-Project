import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductBySlug } from "../services/api";
import ProductPageSimple from "./ProductPageSimple";
import ProductPageWithOptions from "./ProductPageWithOptions";
import ProductPageBundle from "./ProductPageBundle";

function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductBySlug(slug)
      .then(setProduct)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <p className="garamond pt-[150px] text-center text-[18px]">
        Yüklənir...
      </p>
    );
  }

  if (!product) {
    return (
      <p className="garamond pt-[150px] text-center text-[18px]">
        Məhsul tapılmadı.
      </p>
    );
  }

  // Data-ya görə hansı dizaynın göstəriləcəyini seç:
  // 1) includedProducts varsa → Bundle (Casablanca box kimi)
  // 2) options varsa → With Options (Earl Grey tea kimi)
  // 3) heç biri yoxdursa → Simple (Royale box kimi)
  const renderLayout = () => {
    if (product.includedProducts?.length > 0) {
      return <ProductPageBundle product={product} />;
    }
    if (product.options?.length > 0) {
      return <ProductPageWithOptions product={product} />;
    }
    return <ProductPageSimple product={product} />;
  };

  return (
    <div className="garamond bg-[#fcf6ed] px-8 pt-[130px] pb-20">
      {renderLayout()}
    </div>
  );
}

export default ProductPage;