import { useState } from "react";
import { Link } from "react-router";

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("Product Information");
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (category, index) => {
    const key = `${category}-${index}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const faqData = {
    "Product Information": [
      {
        q: "How long will the macarons last and how should I preserve them ?",
        a: "Our macarons are freshly made and should be enjoyed shortly after purchase. As a general guideline: Keep macarons refrigerated until consumption. Remove them from the refrigerator 30 minutes before serving to enjoy their ideal texture and flavor. Follow the “best-by” date provided on the box.",
      },
      {
        q: "What are the allergens included in your products ?",
        a: "Allergen information is listed on each product page. If you have a severe allergy, we recommend reviewing each product page carefully before placing an order. For shipped products, allergen details are included in the package materials.",
      },
      {
        q: "Do you have gluten-free products and products without lactose/sugar ?",
        a: "Yes, we offer a selection of gluten-free items. Our classic macaron flavors are naturally gluten-free, except for a few specific seasonal flavors indicated otherwise on the product page.",
      },
    ],
    "Client Account": [
      {
        q: "Why should I create an account ?",
        a: "Creating an account allows you to track the status of your orders, update your personal information, manage your communication preferences, and stay informed about our products and new releases through our newsletters.",
      },
      {
        q: "I have forgotten my password, how can I access my account ?",
        a: "You do not need a password to log in. A link will be sent to you by email for each login, allowing you to enter a unique code.",
      },
    ],
    Orders: [
      {
        q: "How do I place an order ?",
        a: "You can place an order directly on our website: Select your products, choose delivery or pickup, add items to your cart, and complete checkout by entering your delivery information.",
      },
      {
        q: "How can I add a message to my order ?",
        a: "Ladurée offers you the possibility to add a personal message to your order for free. This option is available in the summary of your shopping cart.",
      },
      {
        q: "I would like to check my order progress.",
        a: "You can check the status of your order in “My Account.” An email will be sent to you when your order is shipped, containing the carrier’s tracking number.",
      },
    ],
    Payment: [
      {
        q: "Which online payment options are available ?",
        a: "Only payments by credit card are accepted for an online payment. We accept payments by Visa, Mastercard, and American Express.",
      },
      {
        q: "Is payment secure ?",
        a: "The payments made on our website and the information related to your order are secured. This information is crypted and protected by our online payment service.",
      },
    ],
    Delivery: [
      {
        q: "Where do you deliver ?",
        a: "We ship to Metropolitan France (except Corsica), the United Kingdom, Switzerland, the United States, and major European countries.",
      },
      {
        q: "What are your delivery rates ?",
        a: "France & Europe: Starting at €9.90 (Free on orders over €75). United Kingdom: Starting at £9.95 (Free over £65). United States: Starting at $28 for express delivery.",
      },
      {
        q: "What are your delivery speeds ?",
        a: "Standard delivery takes 24–48 hours depending on the product and destination. Please note that delivery times are estimates.",
      },
      {
        q: "Can I return an item ?",
        a: "For hygiene and safety reasons, all food products are strictly non-returnable and non-refundable.",
      },
    ],
    Others: [
      {
        q: "How can I find your stores ?",
        a: "You can find all our shops and restaurants directly on our 'Our Stores' page on our website.",
      },
      {
        q: "How can I make a reservation in your restaurant ?",
        a: "If you want to make a reservation, please send your request via our contact form or visit the respective store detail page.",
      },
    ],
  };

  const categories = Object.keys(faqData);

  const guarantees = [
    {
      title: "HOME DELIVERY",
      desc: "In France and Europe. Free over 75€ in Métropolitain France (see conditions).",
    },
    {
      title: "COLD CHAIN",
      desc: "Orders shipped fresh the day before the delivery.",
    },
    {
      title: "PROTECTED PRODUCTS",
      desc: "Packaging made from recyclable materials for perfect preservation and protection.",
    },
    {
      title: "CUSTOMER SERVICE",
      desc: "Monday to Friday, from 9 a.m to 5 p.m by :\n- Mail to contact@laduree.com\n- Form on our website",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto max-w-[900px] px-6 pt-16 pb-12 text-center">
        <h1 className="text-[44px] font-normal uppercase tracking-[0.15em] text-[#2e2c2a] sm:text-[56px]">
          FOIRE AUX QUESTIONS
        </h1>
      </div>
      <div className="mx-auto max-w-[1200px] px-6 py-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="garamond flex flex-col space-y-4 text-[16px] lg:border-r lg:border-[#e5dfd5] lg:pr-6">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`flex cursor-pointer items-center text-left transition hover:text-black ${
                    isActive ? "font-semibold text-black" : "text-[#706b66]"
                  }`}
                >
                  <span className="mr-2">{isActive ? "•" : ""}</span>
                  <span>{cat}</span>
                </button>
              );
            })}
            <div className="pt-8">
              <Link
                to="/contact"
                className="text-[14px] text-[#5c5752] underline transition hover:text-black"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
          <div className="garamond lg:col-span-3">
            <div className="divide-y divide-[#e5dfd5]">
              {faqData[activeCategory].map((item, index) => {
                const isOpen = openItems[`${activeCategory}-${index}`] ?? (index === 0);

                return (
                  <div key={item.q} className="py-6">
                    <button
                      type="button"
                      onClick={() => toggleItem(activeCategory, index)}
                      className="flex w-full cursor-pointer items-start justify-between text-left text-[19px] font-medium text-[#2e2c2a] transition hover:text-[#706b66]"
                    >
                      <span className="pr-4">{item.q}</span>
                      <span className="text-[20px] leading-none text-[#5c5752]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mt-4 text-[15px] leading-relaxed text-[#5c5752]">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 border-t border-[#e5dfd5] bg-[#fefbf4] px-6 py-16 lg:px-16">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
            <div key={item.title} className="garamond flex flex-col items-center">
              <h4 className="text-[16px] font-semibold uppercase tracking-[0.12em] text-[#2e2c2a]">
                {item.title}
              </h4>
              <span className="my-2 text-[14px] text-[#8c857f]">•</span>
              <p className="whitespace-pre-line text-[14px] leading-relaxed text-[#5c5752]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">•</span>
        <span>FAQ</span>
      </div>
    </div>
  );
}

export default FAQ;