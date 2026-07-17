function LaMaison() {
  return (
    <section className="bg-[#fcf4e2]">
      <div className="container text-[#2e2c2a] px-3 py-20 lg:px-0 garamond flex items-center flex-col gap-10">
        <span className="text-[15px] uppercase">La maison ladurée</span>
        <h2 className="max-w-[550px] uppercase text-center  leading-15 text-[44px] lg:text-[52px]">
          The Art of Luxury <br />
          <i className="lowercase"> à la française</i>
        </h2>
        <p className="max-w-[550px] text-[20px] lg:text-[16px] text-center garamond">
          Born on Rue Royale in Paris, Ladurée celebrates the elegance of taste
          through its exceptional macarons and pastries, symbols of its
          craftsmanship and art of living.
        </p>
        <div className="text-center">
          <button className="garamond border border-[#2e2c2a] cursor-pointer px-15 lg:px-25 py-4 lg:py-3 text-[19px] hover:bg-[#2e2c2a] hover:text-white duration-150">
            Discover La Maison
          </button>
        </div>
      </div>
    </section>
  );
}

export default LaMaison;
