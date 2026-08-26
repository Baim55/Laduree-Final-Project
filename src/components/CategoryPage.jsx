import { useParams, Link } from "react-router";
import { useEffect, useState, useMemo } from "react";
import { getCategories, getProducts } from "../services/api";
import { createSlug } from "../utils/createSlug";
import ImageCard from "./ImageCard";
import Features from "./Features";
import FilterDrawer from "./FilterDrawer";

function CategoryPage() {
  const { slug } = useParams();

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter Drawer State
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    sortBy: "bestsellers",
    maxPrice: 170,
    itemCount: null,
  });

  const activeCategory = categories.find(
    (category) => (category.slug || createSlug(category.name)) === slug,
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

  // Filter & Sort məntiqi
  const displayedProducts = useMemo(() => {
    let result = [...products];

    // 1. Qiymət filtri
    if (filters.maxPrice) {
      result = result.filter((p) => p.price <= filters.maxPrice);
    }

    // 2. Məhsul sayı filtri
    if (filters.itemCount) {
      result = result.filter((product) => {
        if (Array.isArray(product.itemCount)) {
          return product.itemCount.includes(Number(filters.itemCount));
        }
        return product.itemCount === Number(filters.itemCount);
      });
    }

    // 3. Sıralama
    if (filters.sortBy === "asc") {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === "desc") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, filters]);

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      {/* BREADCRUMB */}
      <div className="garamond flex items-center justify-center gap-2 pt-10 text-[14px] text-[#706b66]">
        <Link to="/" className="hover:text-black">
          Home
        </Link>
        <span className="text-[10px] text-[#a8a39d]">•</span>
        <Link to="/shop" className="hover:text-black">
          Eshop
        </Link>
        <span className="text-[10px] text-[#a8a39d]">•</span>
        <span className="italic text-[#2e2c2a]">
          {activeCategory ? activeCategory.name : "All products"}
        </span>
      </div>

      {/* PAGE TITLE */}
      <h1 className="garamond px-4 pt-10 pb-16 text-center text-[42px] font-normal uppercase tracking-[0.04em] text-[#2e2c2a] sm:text-[56px] lg:text-[76px]">
        {activeCategory ? activeCategory.name : "Macaron Gift Boxes"}
      </h1>

      {/* STICKY SUB-BAR (CATEGORIES & FILTER TRIGGER) */}
      <div className="sticky top-[92px] z-30 flex h-[62px] items-center justify-between border-t border-b border-[#e5dfd5] bg-[#fefbf4] px-6 lg:px-12">
        {/* Sol Tərəf - Kateqoriyalar */}
        <div className="garamond flex items-center gap-3 overflow-x-auto scrollbar-hide text-[15px] italic text-[#53504e]">
          {mainCategories.map((category, index) => {
            const catSlug = category.slug || createSlug(category.name);
            const isActive = catSlug === slug;

            return (
              <div key={category.id} className="flex items-center gap-3 whitespace-nowrap">
                <Link
                  to={`/shop/${catSlug}`}
                  className={`transition-colors duration-200 ${
                    isActive ? "text-black font-medium" : "hover:text-black"
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
            className="whitespace-nowrap transition-colors duration-200 hover:text-black"
          >
            See all
          </Link>
        </div>

        {/* Sağ Tərəf - Filter & Sort Düyməsi */}
        <div className="flex h-full items-center border-l border-[#e5dfd5] pl-6 lg:pl-8">
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="garamond cursor-pointer whitespace-nowrap text-[15px] text-[#2e2c2a] transition hover:text-black hover:opacity-75"
          >
            Filter & Sort
          </button>
        </div>
      </div>

      {/* PRODUCTS GRID */}
      <div className="px-6 py-12 lg:px-12">
        {loading ? (
          <p className="garamond py-20 text-center text-[18px] text-[#706b66]">
            Yüklənir...
          </p>
        ) : displayedProducts.length === 0 ? (
          <p className="garamond py-20 text-center text-[18px] text-[#706b66]">
            Seçilmiş filtrlərə uyğun məhsul tapılmadı.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {displayedProducts.map((product) => (
              <Link
                key={product.id}
                to={`/products/${createSlug(product.name)}`}
                className="group block"
              >
                <div className="relative overflow-hidden bg-[#fbf8f2]">
                  {product.badge && (
                    <div className="absolute left-1/2 top-4 z-20 -translate-x-1/2">
                      <span className="garamond inline-block whitespace-nowrap bg-[#efdfbd] px-4 py-1 text-[13px] text-[#2e2c2a]">
                        {product.badge}
                      </span>
                    </div>
                  )}
                  <ImageCard product={product} />
                </div>

                <div className="mt-4 text-center">
                  <h3 className="garamond text-[17px] text-[#2e2c2a] transition group-hover:opacity-75">
                    {product.name}
                  </h3>
                  <p className="garamond mt-1 text-[15px] text-[#706b66]">
                    {product.price.toFixed(2)} EUR
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* VIDEO SECTION */}
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

        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white lg:left-12">
          <p className="garamond text-[16px] tracking-widest uppercase">
            UNIQUE CREATIONS
          </p>
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h2 className="garamond max-w-[650px] text-[48px] leading-[1.05] uppercase tracking-wide sm:text-[64px] lg:text-[76px]">
            THE LADURÉE
            <br />
            HISTORY
          </h2>
          <Link
            to="/shop"
            className="garamond mt-8 flex h-[48px] w-[280px] items-center justify-center bg-white text-[15px] tracking-wide text-[#2e2c2a] transition hover:bg-[#f5f1e8] sm:w-[350px]"
          >
            Discover
          </Link>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 text-white lg:right-12">
          <p className="garamond text-[16px] tracking-widest uppercase">
            SINCE 1862
          </p>
        </div>
      </div>

      <Features />

      {/* FILTER DRAWER */}
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={(newFilters) => setFilters(newFilters)}
        initialFilters={filters}
        maxPriceLimit={170}
      />
    </div>
  );
}

export default CategoryPage;