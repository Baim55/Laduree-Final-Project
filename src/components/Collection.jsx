import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getProducts, getCategories } from "../services/api";
import { createSlug } from "../utils/createSlug";
import ImageCard from "./ImageCard";
import { useLanguage } from "../context/LanguageContext";

function Collection() {
  const { t } = useLanguage();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data.slice(0, 5));
      })
      .catch(console.error);

    getCategories().then(setCategories).catch(console.error);
  }, []);

  const mainCategories = categories.filter((c) => c.isMain);

  return (
    <section className="bg-[#fefbf4] py-15">
      <div className="container garamond px-3 lg:px-0">
        <h2 className="text-[#2e2c2a] text-[32px] md:text-[52px] text-center uppercase">
          {t("casablancaCollection")}
        </h2>
        <div className="overflow-x-auto scrollbar-hide px-3">
          <ul className="mx-auto flex w-max items-center gap-2 whitespace-nowrap py-4 text-[16px] text-[#53504e] md:gap-4 md:text-[24px]">
            {mainCategories.map((cat, index) => (
              <li key={cat.id} className="flex items-center gap-2 md:gap-4">
                <Link
                  to={`/shop/${cat.slug || createSlug(cat.name)}`}
                  className="hover:text-black"
                >
                  {cat.name}
                </Link>
                {index < mainCategories.length - 1 && (
                  <span className="text-[#827e7b] text-[12px]">•</span>
                )}
              </li>
            ))}
            {mainCategories.length > 0 && (
              <li className="text-[#827e7b] text-[12px]">•</li>
            )}
            <li>
              <Link to="/shop" className="hover:text-black">
                {t("seeAll")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {products[0] && (
            <Link to={`/products/${createSlug(products[0].name)}`}>
              <div className="relative w-full">
                {products[0].badge && (
                  <span className="pointer-events-none absolute top-3 left-1/2 z-10 w-max -translate-x-1/2 bg-[#efdfbd] px-3 py-1 text-[11px] uppercase tracking-wider text-[#2e2c2a]">
                    {products[0].badge}
                  </span>
                )}
                <ImageCard product={products[0]} />
              </div>
            </Link>
          )}

          <div className="grid grid-cols-2 gap-6">
            {products.slice(1, 5).map((product) => (
              <Link
                key={product.id}
                to={`/products/${createSlug(product.name)}`}
              >
                <div className="relative w-full">
                  {product.badge && (
                    <span className="pointer-events-none absolute top-2.5 left-1/2 z-10 w-max -translate-x-1/2 bg-[#efdfbd] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-[#2e2c2a]">
                      {product.badge}
                    </span>
                  )}
                  <ImageCard product={product} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block border border-[#2e2c2a] cursor-pointer px-35 py-3 my-10 hover:bg-[#2e2c2a] hover:text-white duration-150"
          >
            {t("viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Collection;