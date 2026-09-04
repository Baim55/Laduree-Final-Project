import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { getProductBySlug, getProducts } from "../services/api";
import { createSlug } from "../utils/createSlug";
import { useLanguage } from "../context/LanguageContext"; 

import ProductPageSimple from "./ProductPageSimple";
import ProductPageWithOptions from "./ProductPageWithOptions";
import ProductPageBundle from "./ProductPageBundle";
import ImageCard from "./ImageCard";
import SkeletonLoader from "./SkeletonLoader"; 

function ProductPage() {
  const { slug } = useParams();
  const { t } = useLanguage(); 
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setProduct(null);
    setLoading(true);

    async function loadData() {
      try {
        const [currentProduct, allProducts] = await Promise.all([
          getProductBySlug(slug),
          getProducts(),
        ]);

        setProduct(currentProduct);

        if (currentProduct && allProducts) {
          const currentCategory =
            currentProduct.categoryId || currentProduct.categoryIds?.[0];

          const related = allProducts
            .filter((item) => {
              if (item.id === currentProduct.id) return false;
              const itemCategories =
                item.categoryIds || (item.categoryId ? [item.categoryId] : []);
              return itemCategories.includes(currentCategory);
            })
            .slice(0, 4);

          setRelatedProducts(related);
        }
      } catch (error) {
        console.error("Xəta:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, [slug]);

  if (loading) {
    return <SkeletonLoader />;
  }

  if (!product) {
    return (
      <p className="garamond pt-[150px] text-center text-[18px] text-[#2e2c2a]">
        {t("productNotFound")} {/* 3. Dinamik tərcümə */}
      </p>
    );
  }

  const renderLayout = () => {
    if (product.includedProducts?.length > 0) {
      return <ProductPageBundle key={product.id} product={product} />;
    }
    if (product.options?.length > 0) {
      return <ProductPageWithOptions key={product.id} product={product} />;
    }
    return <ProductPageSimple key={product.id} product={product} />;
  };

  return (
    <div
      key={slug}
      className="garamond bg-[#fcf6ed] px-4 md:px-8 pt-[130px] pb-20"
    >
      {renderLayout()}

      {relatedProducts.length > 0 && (
        <div className="mt-20 border-t border-[#e6decb] pt-14">
          <h2 className="mb-10 text-center text-[28px] uppercase tracking-widest text-[#2e2c2a]">
            {t("youMayAlsoLike")}
          </h2>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-6">
            {relatedProducts.map((item) => {
              const productSlug = createSlug(item.name);

              return (
                <div key={item.id} className="flex flex-col text-center">
                  <div className="relative mb-3 w-full">
                    {item.badge && (
                      <span className="pointer-events-none absolute top-2.5 left-1/2 z-10 w-max -translate-x-1/2 bg-[#efdfbd] px-2.5 py-1 text-[10px] md:text-[11px] uppercase tracking-wider text-[#2e2c2a]">
                        {item.badge}
                      </span>
                    )}
                    <Link to={`/products/${productSlug}`}>
                      <ImageCard product={item} />
                    </Link>
                  </div>

                  <Link
                    to={`/products/${productSlug}`}
                    className="line-clamp-1 text-[16px] text-[#2e2c2a] hover:underline"
                  >
                    {item.name}
                  </Link>
                  <span className="mt-1 text-[14px] text-[#706c67]">
                    {Number(item.price).toFixed(2)} EUR
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductPage;