import { useState } from "react";
import { Link } from "react-router";
import { IoAdd, IoRemove } from "react-icons/io5";
import { FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    // Sadə email validasiyası
    if (!email.trim()) {
      setError("Email address is required.");
      setSuccess(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setSuccess(false);
      return;
    }

    setError("");
    setSuccess(true);
    setEmail("");

    // 4 saniyə sonra uğur mesajını təmizləyirik
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };

  const footerLinks = [
    {
      title: "Ladurée",
      items: [
        { label: "Macarons boxes", to: "/shop/macarons" },
        { label: "Eugénie boxes", to: "/shop/eugenie" },
        { label: "Chocolates", to: "/shop/chocolates" },
      ],
    },
    {
      title: "More information",
      items: [
        { label: "Our collections", to: "/shop" },
        { label: "Ladurée history", to: "/la-maison" },
        { label: "Flavor Guide", to: "/pages/macarons-flavors" },
      ],
    },
    {
      title: "Corporate",
      items: [
        { label: "Corporate gifts", to: "/shop/gifts" },
        { label: "Events & receptions", to: "/shop" },
      ],
    },
    {
      title: "Help",
      items: [
        { label: "Contact us", to: "/contact" },
        { label: "FAQ", to: "/faq" },
        { label: "Le Club Ladurée conditions", to: "/le-club-conditions" },
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
          <div>
            <h3 className="garamond mb-5 text-[15px] uppercase tracking-wide">
              Join our newsletter
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
                placeholder="Email address*"
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
            {success && (
              <p className="mt-2 text-[12px] text-[#2e2c2a] font-medium">
                Thank you for subscribing!
              </p>
            )}

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

        {/* Mobile Accordion */}
        <div className="lg:hidden">
          {footerLinks.map((section, index) => (
            <div
              key={section.title}
              className="border-b border-[#2e2c2a]/20 py-4"
            >
              <button
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
              Join our newsletter
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
                placeholder="Email address*"
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
            {success && (
              <p className="mt-2 text-[12px] text-[#2e2c2a] font-medium">
                Thank you for subscribing!
              </p>
            )}

            <label className="mt-4 flex cursor-pointer items-start gap-2 text-[13px] text-[#2e2c2a]/80">
              <input type="checkbox" className="mt-1 accent-[#2e2c2a]" />I agree
              to receive news and exclusive creations from Ladurée via email,
              phone, WhatsApp, and Wallet.
            </label>
          </div>
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
          <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-3">
            <div className="hidden items-center gap-6 lg:flex lg:justify-self-start">
              <Link
                to="/contact"
                className="transition-colors hover:text-[#2e2c2a]"
              >
                Terms &amp; Conditions
              </Link>
            </div>
            <p className="text-center lg:justify-self-center">
              © Copyright Ladurée Paris 2026
            </p>
            <div className="hidden items-center gap-6 lg:flex lg:justify-self-end">
              <Link
                to="/faq"
                className="transition-colors hover:text-[#2e2c2a]"
              >
                FAQ
              </Link>
            </div>
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
