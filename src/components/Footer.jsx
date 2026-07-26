import { useState } from "react";
import { Link } from "react-router";
import { IoAdd, IoRemove } from "react-icons/io5";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import FooterLogo from "../../public/assets/img/logo-footer.webp";

function Footer() {
  const footerLinks = [
    {
      title: "Ladurée",
      items: [
        { label: "Macarons boxes", to: "#" },
        { label: "Eugénie boxes", to: "#" },
        { label: "Gourmet assortments", to: "#" },
        { label: "Chocolates", to: "#" },
        { label: "Store Experiences", to: "#" },
        { label: "Le Club Ladurée", to: "#" },
      ],
    },
    {
      title: "More information",
      items: [
        { label: "Our collections", to: "#" },
        { label: "Ladurée history", to: "#" },
        { label: "Our Macarons in Paris", to: "#" },
        { label: "Our Macarons in the French Riviera", to: "#" },
        { label: "Allergens & Packagings", to: "#" },
        { label: "Ladurée Café", to: "#" },
      ],
    },
    {
      title: "Corporate",
      items: [
        { label: "Corporate gifts", to: "#" },
        { label: "Supplier offer", to: "#" },
        { label: "Personalized gifts", to: "#" },
        { label: "Sweet and savory offer", to: "#" },
        { label: "Events & receptions", to: "#" },
      ],
    },
    {
      title: "Help",
      items: [
        { label: "Contact us", to: "#" },
        { label: "FAQ", to: "#" },
        { label: "Le Club Ladurée conditions", to: "#" },
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
      {/* Top Frise */}
      <div
        className="h-[23px] w-full bg-repeat-x"
        style={{ backgroundImage: "url(/assets/img/frise.png)" }}
      />

      <div className="container px-6 py-14">
        {/* DESKTOP */}
        <div className="hidden grid-cols-5 gap-10 lg:grid">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="garamond mb-5 text-[15px] uppercase tracking-wide">
                {section.title}
              </h3>

              <ul className="flex flex-col">
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

          {/* Newsletter */}
          <div>
            <h3 className="garamond mb-5 text-[15px] uppercase tracking-wide">
              Join our newsletter
            </h3>

            <form className="flex items-center justify-between border-b border-[#2e2c2a]/40 pb-2">
              <input
                type="email"
                placeholder="Email address*"
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#2e2c2a]/70"
              />

              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </form>

            <label className="mt-4 flex cursor-pointer items-start gap-2 text-[13px] text-[#2e2c2a]/80">
              <input type="checkbox" className="mt-1 accent-[#2e2c2a]" />I agree
              to receive news and exclusive creations from Ladurée via email,
              phone, WhatsApp, and Wallet.
            </label>

            <h3 className="garamond mb-4 mt-10 text-[15px] uppercase tracking-wide">
              Follow us
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

        {/* MOBILE */}
        <div className="lg:hidden">
          {footerLinks.map((section, index) => (
            <div
              key={section.title}
              className="border-b border-[#2e2c2a]/20 py-4"
            >
              <button
                onClick={() => toggleSection(index)}
                className="flex w-full items-center justify-between"
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

          {/* Mobile Newsletter */}
          <div className="mt-10">
            <h3 className="garamond mb-5 text-[17px] uppercase tracking-wide">
              Join our newsletter
            </h3>

            <form className="flex items-center justify-between border-b border-[#2e2c2a]/40 pb-2">
              <input
                type="email"
                placeholder="Email address*"
                className="w-full bg-transparent text-[15px] outline-none placeholder:text-[#2e2c2a]/70"
              />

              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </form>

            <label className="mt-4 flex cursor-pointer items-start gap-2 text-[13px] text-[#2e2c2a]/80">
              <input type="checkbox" className="mt-1 accent-[#2e2c2a]" />I agree
              to receive news and exclusive creations from Ladurée via email,
              phone, WhatsApp, and Wallet.
            </label>
          </div>

          {/* Mobile Socials */}
          <div className="mt-10 text-center">
            <h3 className="garamond mb-5 text-[17px] uppercase tracking-wide">
              Follow us
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

      {/* Logo */}
      <hr className="text-[#2e2c2a]/20" />

      <div className="flex items-center justify-center">
        <img
          src={FooterLogo}
          alt="Ladurée"
          className="my-20 w-[250px] lg:w-[200px]"
        />
      </div>

      <hr className="text-[#2e2c2a]/20" />

      {/* Bottom Links */}
      <div className="container px-6 font-garamond">
        <div className="py-6 text-[14px] text-[#2e2c2a]/80">
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3">
            {/* Left */}
            <div className="hidden items-center gap-6 lg:flex lg:justify-self-start">
              <Link to="#" className="transition-colors hover:text-[#2e2c2a]">
                Terms &amp; Conditions
              </Link>

              <Link to="#" className="transition-colors hover:text-[#2e2c2a]">
                Legal Notice
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-center lg:justify-self-center">
              © Copyright Ladurée Paris 2026
            </p>

            {/* Right */}
            <div className="hidden items-center gap-6 lg:flex lg:justify-self-end">
              <Link to="#" className="transition-colors hover:text-[#2e2c2a]">
                Data Protection Policy
              </Link>

              <Link to="#" className="transition-colors hover:text-[#2e2c2a]">
                Cookies Management
              </Link>

              <Link to="#" className="transition-colors hover:text-[#2e2c2a]">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Frise */}
      <div
        className="h-[23px] w-full bg-repeat-x"
        style={{ backgroundImage: "url(/assets/img/frise.png)" }}
      />
    </footer>
  );
}

export default Footer;
