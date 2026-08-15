import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getProducts, getCategories } from "../services/api";
import ImageCard from "./ImageCard";

function Collection() {
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
          Casablanca Collection
        </h2>
        <div className="overflow-x-auto scrollbar-hide px-3">
          <ul className="mx-auto flex w-max items-center gap-2 whitespace-nowrap py-4 text-[16px] text-[#53504e] md:gap-4 md:text-[24px]">
            {mainCategories.map((cat, index) => (
              <li key={cat.id} className="flex items-center gap-2 md:gap-4">
                <Link to={`/shop/${cat.slug}`} className="hover:text-black">
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
                See all
              </Link>
            </li>
          </ul>
        </div>
        {/* PRODUCTS */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* FIRST PRODUCT */}
          {products[0] && (
            <Link to={`/products/${products[0].slug}`}>
              <ImageCard
                src={products[0].image}
                alt={products[0].name}
                hoverSrc={products[0].hoverImage || products[0].image}
              />
            </Link>
          )}
          {/* OTHER 4 PRODUCTS */}
          <div className="grid grid-cols-2 gap-6">
            {products.slice(1, 5).map((product) => (
              <Link key={product.id} to={`/products/${product.slug}`}>
                <ImageCard
                  src={product.image}
                  alt={product.name}
                  hoverSrc={product.hoverImage || product.image}
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center">
          <Link
            to="/shop"
            className="inline-block border border-[#2e2c2a] cursor-pointer px-35 py-3 my-10 hover:bg-[#2e2c2a] hover:text-white duration-150"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Collection;
