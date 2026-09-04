import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../services/api";
import { createSlug } from "../utils/createSlug";
import ImageCard from "./ImageCard";
import Features from "./Features";
import FilterDrawer from "./FilterDrawer";
import { useLanguage } from "../context/LanguageContext";

function CategoryPage() {
  const { slug } = useParams();
  const { t } = useLanguage();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: "asc",
    maxPrice: 675,
    itemCount: null,
  });

  const activeCategory = categories.find(
    (c) => (c.slug || createSlug(c.name)) === slug,
  );
  const mainCategories = categories.filter((c) => c.isMain);

  useEffect(() => {
    getCategories().then(setCategories).catch(console.log);
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
      .catch(console.log)
      .finally(() => setLoading(false));
  }, [slug, categories, activeCategory]);

  let displayedProducts = products.filter((p) => p.price <= filters.maxPrice);

  if (filters.itemCount) {
    displayedProducts = displayedProducts.filter((p) => {
      if (Array.isArray(p.itemCount)) {
        return p.itemCount.includes(Number(filters.itemCount));
      }
      return p.itemCount === Number(filters.itemCount);
    });
  }

  if (filters.sortBy === "asc") {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === "desc") {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond flex items-center justify-center gap-2 pt-10 text-[13px] text-[#706b66] sm:text-[14px]">
        <Link to="/" className="hover:text-black">
          {t("home")}
        </Link>
        <span>•</span>
        <Link to="/shop" className="hover:text-black">
          {t("eshop")}
        </Link>
        <span>•</span>
        <span className="italic text-[#2e2c2a]">
          {activeCategory ? activeCategory.name : t("allProducts")}
        </span>
      </div>
      <h1 className="garamond px-4 pt-8 pb-12 text-center text-[38px] uppercase tracking-wide text-[#2e2c2a] sm:pt-10 sm:pb-16 sm:text-[56px] lg:text-[72px]">
        {activeCategory ? activeCategory.name : t("allTheCreations")}
      </h1>
      <div className="sticky top-[92px] z-30 flex h-[62px] items-center border-t border-b border-[#e5dfd5] bg-[#fefbf4] lg:justify-between lg:px-12">
        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          className="garamond flex h-full shrink-0 items-center border-r border-[#e5dfd5] px-5 text-[15px] text-[#2e2c2a] lg:hidden cursor-pointer"
        >
          {t("filterAndSort")}
        </button>
        <div className="garamond flex h-full items-center gap-3 overflow-x-auto px-4 text-[15px] italic text-[#53504e] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:h-auto lg:overflow-visible lg:px-0">
          {mainCategories.map((category, index) => {
            const catSlug = category.slug || createSlug(category.name);
            const isActive = catSlug === slug;

            return (
              <div
                key={category.id}
                className="flex items-center gap-3 whitespace-nowrap"
              >
                <Link
                  to={`/shop/${catSlug}`}
                  className={`transition ${
                    isActive
                      ? "font-semibold text-black not-italic"
                      : "hover:text-black"
                  }`}
                >
                  {category.name}
                </Link>
                {index < mainCategories.length - 1 && (
                  <span className="not-italic text-[#a8a39d]">•</span>
                )}
              </div>
            );
          })}

          <span className="not-italic text-[#a8a39d]">•</span>
          <Link
            to="/shop"
            className="whitespace-nowrap not-italic hover:text-black"
          >
            {t("seeAll")}
          </Link>
        </div>
        <button
          type="button"
          onClick={() => setIsFilterOpen(true)}
          className="garamond hidden cursor-pointer whitespace-nowrap text-[15px] text-[#2e2c2a] hover:text-black lg:block"
        >
          {t("filterAndSort")}
        </button>
      </div>

      <div className="px-4 py-12 sm:px-6 lg:px-12">
        {loading ? (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 animate-pulse">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex flex-col space-y-3">
                <div className="w-full h-[250px] md:h-[320px] bg-[#e6decb]/55" />
                <div className="h-4 bg-[#e6decb]/55 w-3/4 mx-auto" />
                <div className="h-4 bg-[#e6decb]/55 w-1/4 mx-auto" />
              </div>
            ))}
          </div>
        ) : displayedProducts.length === 0 ? (
          <p className="garamond py-20 text-center text-[18px] text-[#706b66]">
            {t("noProducts")}
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
            {displayedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${createSlug(product.name)}`}
                className="group block"
              >
                <div className="relative bg-[#fbf8f2]">
                  {product.badge && (
                    <div className="absolute left-1/2 top-3 z-20 -translate-x-1/2">
                      <span className="garamond whitespace-nowrap bg-[#efdfbd] px-3 py-0.5 text-[12px] text-[#2e2c2a]">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <ImageCard product={product} />
                </div>

                <div className="mt-3 text-center sm:mt-4">
                  <h3 className="garamond text-[15px] text-[#2e2c2a] sm:text-[17px]">
                    {product.name}
                  </h3>
                  <p className="garamond mt-0.5 text-[14px] text-[#706b66] sm:text-[15px]">
                    {Number(product.price).toFixed(2)} EUR
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="border-t border-[#e5dfd5] bg-[#fefbf4] py-20 px-6 text-center">
        <div className="mx-auto max-w-[800px] garamond">
          <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66] mb-4">
            {t("maisonSubtitle")}
          </p>
          <h2 className="text-[32px] md:text-[46px] text-[#2e2c2a] leading-snug font-normal">
            {t("maisonFooterText")}
          </h2>
        </div>
      </div>

      <Features />
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={(newFilters) => setFilters(newFilters)}
        initialFilters={filters}
        maxPriceLimit={675}
      />
    </div>
  );
}

export default CategoryPage;