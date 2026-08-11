import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";
import { getCategories, getProducts } from "../services/api";

function CategoryPage() {
  const { slug } = useParams();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeCategory = categories.find((c) => c.slug === slug);

  useEffect(() => {
    getCategories().then(setCategories).catch(console.error);
  }, []);

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((all) => {
        const filtered = activeCategory
          ? all.filter((p) => p.categoryId === activeCategory.id)
          : all;
        setProducts(filtered);
      })
      .finally(() => setLoading(false));
  }, [slug, categories]);

  return (
    <div className="pt-[92px]">
      <div className="garamond flex items-center gap-6 border-b border-gray-200 px-8 py-4 text-[15px] italic">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop/${cat.slug}`}
            className={cat.slug === slug ? "text-black" : "text-gray-500"}
          >
            {cat.name}
          </Link>
        ))}
        <Link to="/shop">See all</Link>
      </div>

      <h1 className="garamond py-16 text-center text-[56px]">
        {activeCategory ? activeCategory.name : "All products"}
      </h1>

      {loading ? (
        <p className="text-center">Yüklənir...</p>
      ) : (
        <div className="grid grid-cols-4 gap-6 px-8 pb-16">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
              />
              <h3 className="garamond mt-3 text-[16px]">{product.name}</h3>
              <p className="text-gray-600">{product.price.toFixed(2)} EUR</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
