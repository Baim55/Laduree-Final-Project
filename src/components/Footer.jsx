import { useState } from "react";
import { Link } from "react-router";
import { IoAdd, IoRemove } from "react-icons/io5";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import { toast } from "react-toastify";

function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError(t("emailRequired"));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError(t("emailInvalid"));
      return;
    }

    setError("");
    setEmail("");
    toast.success(t("subscribeSuccess") || "Successfully subscribed!");
  };

  const footerLinks = [
    {
      title: "Ladurée",
      items: [
        { label: t("macaronsBoxes"), to: "/shop/macarons" },
        { label: t("eugenieBoxes"), to: "/shop/eugenie" },
        { label: "Gourmet assortments", to: "/shop/gifts" },
        { label: t("chocolates"), to: "/shop/chocolates" },
        { label: "Store Experiences", to: "/stores" },
        { label: t("clubLadurée"), to: "/club" },
      ],
    },
    {
      title: "More information",
      items: [
        { label: t("ourCollections"), to: "/shop" },
        { label: t("ladureeHistory"), to: "/la-maison" },
        { label: "Ladurée macarons", to: "/pages/macarons-flavors" },
        { label: "Our Macarons in Paris", to: "/pages/macarons-flavors" },
        { label: "Allergens & Packagings", to: "/faq" },
        { label: "Ladurée Café", to: "/stores" },
      ],
    },
    {
      title: "Corporate",
      items: [
        { label: t("corporateGifts"), to: "/shop/corporate-gifts" },
        { label: "Supplier offer", to: "/shop/supplier" },
        { label: "Personalized gifts", to: "/shop/customized" },
        { label: "Events & receptions", to: "/shop/events-catering" },
      ],
    },
    {
      title: "Help",
      items: [
        { label: t("contactUs"), to: "/contact" },
        { label: t("faq"), to: "/faq" },
        { label: t("leClubConditions"), to: "/le-club-conditions" },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const linkHoverClass =
    "relative cursor-pointer transition-all duration-300 hover:translate-x-4 before:absolute before:-left-4 before:top-1/2 before:h-1 before:w-1 before:-translate-y-1/2 before:scale-0 before:rounded-full before:bg-[#2e2c2a] before:transition-transform before:duration-300 hover:before:scale-100";

  return (
    <footer className="bg-[#dce7c6] text-[#2e2c2a]">
      <div
        className="h-[23px] w-full bg-repeat-x"
        style={{ backgroundImage: "url(/assets/img/frise.png)" }}
      />
      <div className="container px-6 py-14">
        <div className="hidden grid-cols-5 gap-10 lg:grid">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="garamond mb-5 text-[15px] uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-2">
                {section.items.map((item) => (
                  <li key={item.label} className={linkHoverClass}>
                    <Link
                      to={item.to}
                      className="garamond text-[15px] text-[#46413de3]/80 transition-colors hover:text-[#2e2c2a]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="garamond mb-5 text-[15px] uppercase tracking-wide">
              {t("joinOurNewsletter")}
            </h3>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center justify-between border-b border-[#2e2c2a]/40 pb-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder={t("emailPlaceholder")}
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#2e2c2a]/70"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="cursor-pointer"
              >
                →
              </button>
            </form>

            {error && <p className="mt-2 text-[12px] text-red-700">{error}</p>}

            <label className="mt-4 flex cursor-pointer items-start gap-2 text-[13px] text-[#2e2c2a]/80">
              <input type="checkbox" className="mt-1 accent-[#2e2c2a]" />
              {t("newsletterConsent")}
            </label>
            <h3 className="garamond mb-4 mt-10 text-[15px] uppercase tracking-wide">
              {t("followUs")}
            </h3>
            <div className="flex items-center gap-4 text-[18px]">
              <a
                href="https://www.instagram.com/laduree.cafe/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@ladureecafe"
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/company/maison-laduree/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden">
          {footerLinks.map((section, index) => (
            <div
              key={section.title}
              className="border-b border-[#2e2c2a]/20 py-4"
            >
              <button
                type="button"
                onClick={() => toggleSection(index)}
                className="flex w-full items-center justify-between cursor-pointer"
              >
                <span className="garamond text-[17px] uppercase tracking-wide">
                  {section.title}
                </span>

                {openIndex === index ? (
                  <IoRemove size={20} />
                ) : (
                  <IoAdd size={20} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "mt-4 max-h-[400px]" : "max-h-0"
                }`}
              >
                <ul className="flex flex-col gap-3 pb-2">
                  {section.items.map((item) => (
                    <li key={item.label} className={linkHoverClass}>
                      <Link
                        to={item.to}
                        className="text-[15px] text-[#2e2c2a]/80"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          <div className="mt-10">
            <h3 className="garamond mb-5 text-[17px] uppercase tracking-wide">
              {t("joinOurNewsletter")}
            </h3>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex items-center justify-between border-b border-[#2e2c2a]/40 pb-2"
            >
              <input
                type="email"
                valueemail={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder={t("emailPlaceholder")}
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#2e2c2a]/70"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="cursor-pointer"
              >
                →
              </button>
            </form>

            {error && <p className="mt-2 text-[12px] text-red-700">{error}</p>}

            <label className="mt-4 flex cursor-pointer items-start gap-2 text-[13px] text-[#2e2c2a]/80">
              <input type="checkbox" className="mt-1 accent-[#2e2c2a]" />
              {t("newsletterConsent")}
            </label>
          </div>
          <div className="mt-10 text-center">
            <h3 className="garamond mb-5 text-[17px] uppercase tracking-wide">
              {t("followUs")}
            </h3>
            <div className="flex items-center justify-center gap-6 text-[20px]">
              <a
                href="https://www.instagram.com/laduree.cafe/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.tiktok.com/@ladureecafe"
                aria-label="TikTok"
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.linkedin.com/company/maison-laduree/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="text-[#2e2c2a]/20" />
      <div className="flex items-center justify-center">
        <img
          src="/assets/img/logo-footer.webp"
          alt="Ladurée"
          className="my-20 w-[250px] lg:w-[200px]"
        />
      </div>
      <hr className="text-[#2e2c2a]/20" />

      <div className="container px-6 font-garamond">
        <div className="py-6 text-[14px] text-[#2e2c2a]/80">
          <div>
            <p className="text-center">© Copyright Ladurée Paris 2026</p>
          </div>
        </div>
      </div>
      <div
        className="h-[23px] w-full bg-repeat-x"
        style={{ backgroundImage: "url(/assets/img/frise.png)" }}
      />
    </footer>
  );
}

export default Footer;
