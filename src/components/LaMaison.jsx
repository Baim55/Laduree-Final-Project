function LaMaison() {
  return (
    <>
      <section className="bg-[#fcf4e2]">
        <div className="container text-[#2e2c2a] px-3 py-20 lg:px-0 garamond flex items-center flex-col gap-10">
          <span className="text-[15px] uppercase">La maison ladurée</span>
          <h2 className="max-w-[550px] uppercase text-center  leading-15 text-[44px] lg:text-[52px]">
            The Art of Luxury <br />
            <i className="lowercase"> à la française</i>
          </h2>
          <p className="max-w-[550px] text-[20px] lg:text-[16px] text-center garamond">
            Born on Rue Royale in Paris, Ladurée celebrates the elegance of
            taste through its exceptional macarons and pastries, symbols of its
            craftsmanship and art of living.
          </p>
          <div className="text-center">
            <button className="garamond border border-[#2e2c2a] cursor-pointer px-15 lg:px-25 py-4 lg:py-3 text-[19px] hover:bg-[#2e2c2a] hover:text-white duration-150">
              Discover La Maison
            </button>
          </div>
        </div>
      </section>
      <section className="relative h-[90vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
        >
          <source
            src="https://laduree.com/cdn/shop/videos/c/vp/52f05b95eaf6476b80f9e15eb35e2907/52f05b95eaf6476b80f9e15eb35e2907.HD-1080p-4.8Mbps-43751471.mp4?v=0"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-black/10"></div>
      </section>
      <section className="bg-[#fefbf4]">
        <div className="container text-[#2e2c2a] px-3 py-30 lg:px-0 garamond flex items-center flex-col gap-10">
          <span className="text-[19px] lg:text-[15px] uppercase">
            Since 1862, Maison Ladurée
          </span>
          <h2 className="max-w-[950px]  text-center leading-10 lg:leading-15 text-[35px] lg:text-[52px]">
            Since 1862, Maison Ladurée has embodied indulgence within the French
            art of living. An iconic institution, it rises to the challenge each
            day of blending tradition and innovation with excellence through its
            creations.
          </h2>
        </div>
      </section>
    </>
  );
}

export default LaMaison;
