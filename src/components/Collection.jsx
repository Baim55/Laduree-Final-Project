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
          <ImageCard
            src="/assets/img/Casablanca_Bundle_big_2.webp"
            alt="Bundle 1"
            hoverSrc="/assets/img/Gift_box.webp"
          />
          <div className="grid grid-cols-2 gap-6">
            <ImageCard
              src="/assets/img/Casablancaeugenie_2.webp"
              alt="Bundle 2"
              hoverSrc="/assets/img/Casablancaeugenie_3.webp"
            />
            <ImageCard
              src="/assets/img/Casablancamacaron.webp"
              alt="Bundle 3"
              hoverSrc="/assets/img/Casablancamac_1.webp"
            />
            <ImageCard
              src="/assets/img/CasablancaBundlemac.webp"
              alt="Bundle 4"
              hoverSrc="/assets/img/LADUREE_10-04-26_pmonetta-9419.webp"
            />
            <ImageCard
              src="/assets/img/CasablancaBundleEugenie_78e550e0-ae0f-4ab1-b4a6-866d9c16e655.webp"
              alt="Bundle 5"
              hoverSrc="/assets/img/Casablancaeugenie_3.webp"
            />
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
