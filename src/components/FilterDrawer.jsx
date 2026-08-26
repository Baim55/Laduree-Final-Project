import { useState, useEffect } from "react";
import { IoCloseOutline, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

const ITEM_COUNTS = [8, 12, 15, 16, 18, 20, 24, 28, 35, 42];

function FilterDrawer({
  isOpen,
  onClose,
  onApplyFilters,
  maxPriceLimit = 170,
  initialFilters = { sortBy: "bestsellers", maxPrice: 170, itemCount: null },
}) {
  const [openSections, setOpenSections] = useState({
    sort: true,
    price: false,
    items: false,
  });

  const [sortBy, setSortBy] = useState(initialFilters.sortBy);
  const [maxPrice, setMaxPrice] = useState(initialFilters.maxPrice);
  const [selectedItemCount, setSelectedItemCount] = useState(initialFilters.itemCount);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleClearAll = () => {
    setSortBy("bestsellers");
    setMaxPrice(maxPriceLimit);
    setSelectedItemCount(null);
  };

  const handleShowResults = () => {
    onApplyFilters({
      sortBy,
      maxPrice: Number(maxPrice),
      itemCount: selectedItemCount,
    });
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-[120] transition-all duration-500 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
      />

      {/* Drawer Panel */}
      <div
        className={`garamond absolute right-0 top-0 flex h-full w-full max-w-[440px] flex-col bg-[#fefbf4] transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-8 py-6">
          <h2 className="text-[28px] text-[#2e2c2a]">Filter</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 transition hover:text-black"
          >
            <IoCloseOutline size={26} />
          </button>
        </div>

        {/* Accordion Content */}
        <div className="flex-1 overflow-y-auto px-8 py-2">
          {/* SORT BY */}
          <div className="border-b border-dotted border-gray-300 py-5">
            <button
              type="button"
              onClick={() => toggleSection("sort")}
              className="flex w-full items-center justify-between text-[14px] tracking-widest text-[#2e2c2a]"
            >
              <span>SORT BY</span>
              {openSections.sort ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </button>

            {openSections.sort && (
              <div className="mt-5 space-y-4 text-[16px] text-[#46413d]">
                {[
                  { id: "bestsellers", label: "Bestsellers" },
                  { id: "asc", label: "Ascending Price" },
                  { id: "desc", label: "Price Descending" },
                ].map((item) => (
                  <label
                    key={item.id}
                    className="flex cursor-pointer items-center justify-between"
                  >
                    <span>{item.label}</span>
                    <input
                      type="radio"
                      name="sortBy"
                      value={item.id}
                      checked={sortBy === item.id}
                      onChange={() => setSortBy(item.id)}
                      className="h-4 w-4 accent-[#2e2c2a]"
                    />
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* PRICE */}
          <div className="border-b border-dotted border-gray-300 py-5">
            <button
              type="button"
              onClick={() => toggleSection("price")}
              className="flex w-full items-center justify-between text-[14px] tracking-widest text-[#2e2c2a]"
            >
              <span>PRICE</span>
              {openSections.price ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </button>

            {openSections.price && (
              <div className="mt-5 px-1">
                <input
                  type="range"
                  min="0"
                  max={maxPriceLimit}
                  step="1"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#2e2c2a]"
                />
                <div className="mt-3 flex items-center justify-between text-[15px] text-[#46413d]">
                  <span>€ 0,00</span>
                  <span>€ {Number(maxPrice).toFixed(2).replace(".", ",")}</span>
                </div>
              </div>
            )}
          </div>

          {/* NUMBER OF ITEMS */}
          <div className="border-b border-dotted border-gray-300 py-5">
            <button
              type="button"
              onClick={() => toggleSection("items")}
              className="flex w-full items-center justify-between text-[14px] tracking-widest text-[#2e2c2a]"
            >
              <span>NUMBER OF ITEMS</span>
              {openSections.items ? <IoChevronUpOutline /> : <IoChevronDownOutline />}
            </button>

            {openSections.items && (
              <div className="mt-6 grid grid-cols-5 gap-3">
                {ITEM_COUNTS.map((count) => (
                  <button
                    key={count}
                    type="button"
                    onClick={() =>
                      setSelectedItemCount((prev) => (prev === count ? null : count))
                    }
                    className={`flex h-11 w-11 items-center justify-center rounded-full border text-[15px] transition ${
                      selectedItemCount === count
                        ? "border-[#2e2c2a] bg-[#2e2c2a] text-white"
                        : "border-gray-300 text-[#46413d] hover:border-black"
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="grid grid-cols-2 border-t border-gray-200 bg-white">
          <button
            type="button"
            onClick={handleClearAll}
            className="py-5 text-center text-[15px] text-[#2e2c2a] transition hover:bg-[#f5f1e8]"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={handleShowResults}
            className="bg-[#2e2c2a] py-5 text-center text-[15px] text-white transition hover:bg-[#1d1a17]"
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
}

export default FilterDrawer;