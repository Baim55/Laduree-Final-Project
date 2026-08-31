import { Link } from "react-router";
import Features from "../components/Features";

function Corporate() {
  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto max-w-[850px] px-6 pt-16 pb-12 text-center">
        <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66]">
          Maison Ladurée
        </p>
        <h1 className="mt-2 text-[44px] uppercase tracking-wide text-[#2e2c2a] sm:text-[56px]">
          CORPORATE OFFERS
        </h1>
        <p className="mx-auto mt-6 text-[16px] leading-relaxed text-[#5c5752] sm:text-[18px]">
          Elevate your corporate gifting, private events, and celebrations with bespoke Ladurée boxes, customized macarons, and exceptional French gastronomy.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/contact"
            className="border border-[#2e2c2a] bg-[#2e2c2a] px-8 py-3 text-[14px] uppercase tracking-wider text-white transition hover:bg-transparent hover:text-[#2e2c2a]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-[1100px] px-6 pb-20">
        <div className="h-[450px] w-full overflow-hidden bg-[#faf6ec] shadow-sm sm:h-[550px]">
          <img
            src="/assets/img/atelier.jpg"
            alt="Corporate Gifts"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <Features />
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">Home</Link>
        <span className="mx-2">•</span>
        <span>Corporate</span>
      </div>
    </div>
  );
}

export default Corporate;