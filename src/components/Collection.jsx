import Bundle1 from "../../public/assets/img/Casablanca_Bundle_big_2.webp";
import Bundle1Hover from "../../public/assets/img/Gift_box.webp";
import Bundle2 from "../../public/assets/img/Casablancaeugenie_2.webp";
import Bundle2Hover from "../../public/assets/img/Casablancaeugenie_3.webp";
import Bundle3 from "../../public/assets/img/Casablancamacaron.webp";
import Bundle3Hover from "../../public/assets/img/Casablancamac_1.webp";
import Bundle4 from "../../public/assets/img/CasablancaBundlemac.webp";
import Bundle4Hover from "../../public/assets/img/LADUREE_10-04-26_pmonetta-9419.webp";
import Bundle5 from "../../public/assets/img/CasablancaBundleEugenie_78e550e0-ae0f-4ab1-b4a6-866d9c16e655.webp";
import Bundle5Hover from "../../public/assets/img/Casablancaeugenie_3.webp";
import ImageCard from "./ImageCard";

function Collection() {
  return (
    <section className="bg-[#fefbf4] py-15">
      <div className="container garamond px-3 lg:px-0">
        <h2 className=" text-[#2e2c2a] text-[32px] md:text-[52px] text-center uppercase">
          Casablanca Collection
        </h2>
        <div className="overflow-x-auto scrollbar-hide px-3">
          <ul className=" mx-auto flex w-max items-center gap-2 whitespace-nowrap py-4 text-[16px] text-[#53504e] md:gap-4 md:text-[24px]">
            <li>Macarons</li>
            <li className="text-[#827e7b] text-[12px]">•</li>
            <li>Eugénie</li>
            <li className="text-[#827e7b] text-[12px]">•</li>
            <li>Chocolates</li>
            <li className="text-[#827e7b] text-[12px]">•</li>
            <li>Teas</li>
            <li className="text-[#827e7b] text-[12px]">•</li>
            <li>See all</li>
          </ul>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImageCard src={Bundle1} alt="Bundle 1" hoverSrc={Bundle1Hover} />
          <div className="grid grid-cols-2 gap-6">
            <ImageCard src={Bundle2} alt="Bundle 2" hoverSrc={Bundle2Hover} />
            <ImageCard src={Bundle3} alt="Bundle 3" hoverSrc={Bundle3Hover} />
            <ImageCard src={Bundle4} alt="Bundle 4" hoverSrc={Bundle4Hover} />
            <ImageCard src={Bundle5} alt="Bundle 5" hoverSrc={Bundle5Hover} />
          </div>
        </div>
        <div className="text-center">
          <button className="border border-[#2e2c2a] cursor-pointer px-35 py-3 my-10 hover:bg-[#2e2c2a] hover:text-white duration-150">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}

export default Collection;
