import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="garamond flex min-h-[80vh] flex-col items-center justify-center bg-[#fcf6ed] px-4 text-center pt-[100px]">
      <h1 className="text-[80px] md:text-[120px] font-light leading-none tracking-widest text-[#2e2c2a]">
        404
      </h1>
      <h2 className="mt-4 text-[24px] md:text-[30px] uppercase tracking-wider text-[#2e2c2a]">
        {t("pageNotFoundTitle") || "Page Not Found"}
      </h2>
      <p className="mt-3 max-w-md text-[16px] text-[#706c67] leading-relaxed">
        {t("pageNotFoundDesc") || "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
      </p>
      <Link
        to="/"
        className="mt-8 inline-block bg-[#2e2c2a] px-8 py-3 text-[16px] uppercase tracking-widest text-white transition hover:bg-[#1d1a17]"
      >
        {t("backToHome") || "Back to Home"}
      </Link>
    </div>
  );
}

export default NotFound;