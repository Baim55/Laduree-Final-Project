import { Link } from "react-router";
import Features from "./Features";
import { useLanguage } from "../context/LanguageContext";

function BasePageTemplate({ title, mainImage, description, sectionTitle, sectionDesc, items }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto container px-6 pt-16 pb-12 text-center">
        <h1 className="mt-1 text-[40px] uppercase tracking-wider text-[#2e2c2a] sm:text-[56px] lg:text-[72px]">
          {title}
        </h1>

        {mainImage && (
          <div className="mx-auto mt-10 max-w-[480px] overflow-hidden rounded-t-[240px] border-[6px] border-[#f9dcd8] bg-[#f9dcd8] p-1 shadow-xs">
            <img
              src={mainImage}
              alt={title}
              className="h-[550px] w-full rounded-t-[235px] object-cover object-center"
            />
          </div>
        )}

        {description && (
          <p className="mx-auto mt-10 max-w-[750px] text-[16px] leading-relaxed text-[#5c5752] sm:text-[18px]">
            {description}
          </p>
        )}
      </div>

      {sectionTitle && (
        <div className="garamond border-t border-[#e5dfd5] px-6 py-16 text-center">
          <h2 className="text-[32px] uppercase tracking-wider text-[#2e2c2a] sm:text-[48px]">
            {sectionTitle}
          </h2>
          {sectionDesc && (
            <p className="mx-auto mt-4 max-w-[750px] text-[16px] leading-relaxed text-[#5c5752]">
              {sectionDesc}
            </p>
          )}
        </div>
      )}

      {items && items.length > 0 && (
        <div className="garamond container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-6 sm:flex-row sm:items-center"
              >
                <div className="h-[220px] w-full flex-shrink-0 overflow-hidden bg-[#faf6ec] sm:w-[220px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 text-left font-semibold">
                  <h3 className="text-[28px] text-[#2e2c2a]">{item.title}</h3>
                  <p className="mt-3 text-[18px] leading-relaxed text-[#5c5752]">
                    {item.desc}
                  </p>
                  {item.showButton !== false && (
                    <div className="mt-6">
                      <Link
                        to={item.link || "/contact"}
                        className="inline-block border border-[#2e2c2a] px-8 py-2 text-[13px] uppercase tracking-wider text-[#2e2c2a] transition hover:bg-[#2e2c2a] hover:text-white"
                      >
                        {t("requestAQuote") || "Request a quote"}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <Features />

      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          {t("home")}
        </Link>
        <span className="mx-2">•</span>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default BasePageTemplate;