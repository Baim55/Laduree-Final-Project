import { useMemo } from "react";
import { Link, useSearchParams } from "react-router";
import {
  IoChevronDownOutline,
  IoChevronUpOutline,
  IoSearchOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { storesData, REGIONS } from "../data/storesData";
import { createSlug } from "../utils/createSlug";

function OurStores() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const selectedSubRegion = searchParams.get("city") || "Central Paris";
  const selectedService = searchParams.get("service") || "All";

  const updateParams = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (!value || value === "All" || (key === "city" && value === "Central Paris" && !newParams.get("search"))) {
      if (key === "city") {
        newParams.set("city", value);
      } else {
        newParams.delete(key);
      }
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const isWorldActive = REGIONS.find((r) => r.name === "WORLD")?.subRegions.includes(selectedSubRegion);

  const filteredStores = useMemo(() => {
    return storesData.filter((store) => {
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        store.name.toLowerCase().includes(query) ||
        store.address.toLowerCase().includes(query) ||
        store.postalCode.includes(query) ||
        store.city.toLowerCase().includes(query);

      const matchesRegion =
        searchQuery.trim().length > 0 ? true : store.city === selectedSubRegion;

      const matchesService =
        selectedService === "All" || store.features?.includes(selectedService);

      return matchesSearch && matchesRegion && matchesService;
    });
  }, [searchQuery, selectedSubRegion, selectedService]);

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto max-w-[900px] px-6 pt-16 pb-12 text-center">
        <h1 className="text-[44px] leading-17 font-semibold uppercase tracking-wider text-[#2e2c2a] sm:text-[60px] lg:text-[72px]">
          OUR STORES &<br />
          RESTAURANTS
        </h1>
        <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-relaxed text-[#5c5752] sm:text-[18px]">
          For a sweet treat, a moment of sharing, or a gift idea, step inside
          our boutiques and let yourself be enchanted by the magical world of
          Ladurée.
        </p>
      </div>
      <div className="border-t border-b border-[#e5dfd5] px-6 py-4 lg:px-16">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => updateParams("search", e.target.value)}
              placeholder="Search for a postal code, city..."
              className="garamond w-full bg-transparent py-3 pr-10 text-[16px] text-[#2e2c2a] placeholder-gray-400 outline-none"
            />
            <IoSearchOutline
              size={20}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
          <div className="garamond flex items-center gap-4 border-t border-gray-200 pt-3 md:border-t-0 md:border-l md:pl-6 md:pt-0">
            <span className="text-[15px] text-gray-500">Service:</span>
            <select
              value={selectedService}
              onChange={(e) => updateParams("service", e.target.value)}
              className="cursor-pointer bg-transparent text-[15px] text-[#2e2c2a] outline-none"
            >
              <option value="All">All Services</option>
              <option value="Tea salon">Tea salon</option>
              <option value="Restaurant">Restaurant</option>
              <option value="Terrace">Terrace</option>
              <option value="Click & Collect">Click & Collect</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="garamond lg:border-r lg:border-[#e5dfd5] lg:pr-8">
            {REGIONS.map((region) => {
              const isOpen = region.name === "WORLD" ? isWorldActive : !isWorldActive;

              return (
                <div key={region.name} className="border-b border-[#e5dfd5] py-4">
                  <div className="flex w-full items-center justify-between text-left text-[16px] font-medium tracking-widest text-[#2e2c2a]">
                    <span>{region.name}</span>
                    {isOpen ? (
                      <IoChevronUpOutline size={16} />
                    ) : (
                      <IoChevronDownOutline size={16} />
                    )}
                  </div>
                  <ul className="mt-4 space-y-3 pl-2 text-[15px] text-[#706b66]">
                    {region.subRegions.map((sub) => {
                      const isActive =
                        selectedSubRegion === sub && !searchQuery;
                      return (
                        <li key={sub}>
                          <button
                            type="button"
                            onClick={() => {
                              const newParams = new URLSearchParams(searchParams);
                              newParams.set("city", sub);
                              newParams.delete("search");
                              setSearchParams(newParams);
                            }}
                            className={`flex cursor-pointer items-center gap-2 transition hover:text-black ${
                              isActive ? "font-semibold text-black" : ""
                            }`}
                          >
                            {isActive && <span>•</span>}
                            <span>{sub}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="lg:col-span-3">
            <h2 className="garamond mb-8 text-[32px] font-normal uppercase tracking-wide text-[#2e2c2a]">
              {searchQuery
                ? `Search Results for "${searchQuery}"`
                : selectedSubRegion}
            </h2>
            {filteredStores.length === 0 ? (
              <p className="garamond py-12 text-[18px] text-gray-500">
                Seçilmiş meyarlara uyğun mağaza və ya restoran tapılmadı.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filteredStores.map((store) => (
                  <Link
                    key={store.id}
                    to={`/stores/${createSlug(store.name)}`}
                    className="group flex flex-col border border-[#aeaeae] bg-[#fefbf4] transition duration-200 hover:border-[#333] hover:bg-[#faf6ec]"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <img
                        src={store.image}
                        alt={store.name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="garamond flex flex-1 flex-col p-4">
                      <h3 className="text-[24px] font-semibold text-[#1d1a17]">
                        {store.name}
                      </h3>
                      <p className="mt-1 text-[18px]  leading-relaxed text-[#1d1a17]">
                        {store.address}
                      </p>
                      <div className="mt-4 flex flex-col gap-1.5 text-[18px]">
                        <p className="flex items-center gap-2 font-normal text-[#1d1a17]">
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              store.openStatus?.toLowerCase().includes("until")
                                ? "bg-[#2d7a4d]"
                                : "bg-[#b8533c]"
                            }`}
                          />
                          <span>{store.openStatus}</span>
                        </p>
                        {store.hours && (
                          <div className="flex items-start gap-1.5 text-[#1d1a17]">
                            <IoTimeOutline
                              size={16}
                              className="mt-[3px] flex-shrink-0"
                            />
                            <p className="whitespace-pre-line leading-snug">
                              {store.hours}
                            </p>
                          </div>
                        )}
                      </div>
                      {store.features && store.features.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2 pt-2 text-[18px] italic text-[#595550]">
                          {store.features.join("  •  ")}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStores;