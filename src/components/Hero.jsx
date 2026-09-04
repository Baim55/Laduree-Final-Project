import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://laduree.com/cdn/shop/videos/c/vp/83d6a7cebc7a4937bcb073e0b4aa91fa/83d6a7cebc7a4937bcb073e0b4aa91fa.HD-1080p-7.2Mbps-85617215.mp4?v=0"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 flex flex-col h-full items-center justify-center px-4">
        <h1 className="garamond max-w-[600px] leading-15 md:leading-20 text-[50px] md:text-[74px] text-white uppercase text-center">
          Summer by Casablanca x Ladurée
        </h1>
        <Link
          to="/shop"
          className="garamond mt-[35px] bg-white px-30 py-3 text-[15px] uppercase tracking-wider text-[#2e2c2a] transition hover:bg-[#dce7c6]"
        >
          {t("discover")}
        </Link>
      </div>
    </section>
  );
}

export default Hero;