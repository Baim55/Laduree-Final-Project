import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../services/api";
import { createSlug } from "../utils/createSlug";
import ImageCard from "./ImageCard";
import Features from "./Features";

function CategoryPage() {
  const { slug } = useParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeCategory = categories.find(
    (category) => createSlug(category.name) === slug,
  );

  const mainCategories = categories.filter((category) => category.isMain);

  useEffect(() => {
    getCategories().then(setCategories).catch(console.error);
  }, []);

  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((allProducts) => {
        if (!activeCategory) {
          setProducts(allProducts);
          return;
        }

        const filtered = allProducts.filter((product) => {
          if (Array.isArray(product.categoryIds)) {
            return product.categoryIds.includes(activeCategory.id);
          }

          return product.categoryId === activeCategory.id;
        });

        setProducts(filtered);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [slug, categories, activeCategory]);

  return (
    <div className="bg-[#fefbf4] pt-[92px]">
      {/* CATEGORY NAVIGATION */}
      <div className="flex items-center gap-6 border-b border-gray-200 px-8 py-4 text-[15px] italic garamond">
        {mainCategories.map((category) => (
          <Link
            key={category.id}
            to={`/shop/${createSlug(category.name)}`}
            className={
              createSlug(category.name) === slug
                ? "text-black"
                : "text-gray-500"
            }
          >
            {category.name}
          </Link>
        ))}

        <Link to="/shop">See all</Link>
      </div>

      {/* TITLE */}
      <h1 className="py-16 text-center text-[32px] lg:text-[74px] garamond">
        {activeCategory ? activeCategory.name : "All products"}
      </h1>

      {/* PRODUCTS */}
      {loading ? (
        <p className="text-center">Yüklənir...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6 px-8 pb-16">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${createSlug(product.name)}`}
              className="block"
            >
              <div className="relative">
                {/* BADGE */}
                {product.badge && (
                  <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2">
                    <span className="inline-block whitespace-nowrap bg-[#efdfbd] px-4 py-1 text-[16px] garamond">
                      {product.badge}
                    </span>
                  </div>
                )}

                <ImageCard product={product} />
              </div>

              {/* PRODUCT INFO */}
              <div className="text-center">
                <h3 className="mt-3 text-[16px] garamond">{product.name}</h3>

                <p className="text-gray-600">{product.price.toFixed(2)} EUR</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* VIDEO */}
      <div className="relative h-[90vh] w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://laduree.com/cdn/shop/videos/c/vp/26c822cefdfa43b0a3efb2a88961dc77/26c822cefdfa43b0a3efb2a88961dc77.HD-1080p-4.8Mbps-43792203.mp4?v=0"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/10" />

        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white">
          <p className="text-[18px] uppercase garamond">UNIQUE CREATIONS</p>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="max-w-[650px] text-[74px] leading-[0.95] garamond">
            THE LADURÉE
            <br />
            HISTORY
          </h2>

          <Link
            to="/shop"
            className="mt-10 flex h-[48px] w-[350px] items-center justify-center bg-white text-[16px] text-[#2e2c2a] transition hover:bg-[#f5f1e8] garamond"
          >
            Discover
          </Link>
        </div>

        <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white">
          <p className="text-[18px] uppercase garamond">SINCE 1862</p>
        </div>
      </div>

      <Features />
    </div>
  );
}

export default CategoryPage;
