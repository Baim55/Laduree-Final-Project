function TailorMadeBox() {
  return (
    <>
      <section className="bg-[#faf6ec]">
        <div className="container text-[#2e2c2a] px-3 py-20 lg:px-0 garamond flex items-center flex-col">
          <span className="text-[15px] uppercase">Tailor-made box</span>
          <h2 className="lg:max-w-[900px] text-center mt-10 leading-15 lg:leading-30 italic text-[65px] lg:text-[140px]">
            Compose your macarons box
          </h2>
          <div className="text-center">
            <button className="garamond mt-[25px] lg:mt-[50px] border border-[#2e2c2a] cursor-pointer px-15 lg:px-25 py-4 lg:py-3 text-[19px] hover:bg-[#2e2c2a] hover:text-white duration-150">
              Compose yours
            </button>
            <img src="/assets/img/Macaron_FRAMBOISE_RASPBERRY-COMPOSE.webp" alt="" className="w-[430px]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default TailorMadeBox;
