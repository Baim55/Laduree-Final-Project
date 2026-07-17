import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const features = [
  {
    title: "HOME DELIVERY",
    text: "In France and Europe. Free over 75€ in Métropolitain France (see conditions).",
  },
  {
    title: "COLD CHAIN",
    text: "Orders shipped fresh the day before the delivery.",
  },
  {
    title: "PROTECTED PRODUCTS",
    text: "Packaging made from recyclable materials for perfect preservation and protection.",
  },
  {
    title: "CUSTOMER SERVICE",
    text: "Monday to Friday, from 9 a.m to 5 p.m.\nMail to contact@laduree.com\nForm on our website",
  },
];

function Features() {
  return (
    <section className="bg-[#fefbf4]  border-[#bfb7ab]">
      <div className="dotted-line w-full"></div>
      <div className="container pt-16 pb-9 lg:py-22">
        <div className="hidden md:grid grid-cols-4 gap-3">
          {features.map((item) => (
            <div key={item.title} className="text-center garamond px-10">
              <h3 className="uppercase text-[15 px] text-[#2e2c2a]">
                {item.title}
              </h3>

              <div className="my-2 text-[15px]">•</div>

              <p className="text-[15px] text-[#5a5651] leading-8 whitespace-pre-line">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {features.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="garamond text-center px-8 pb-10">
                  <h3 className="uppercase text-[19px] mb-5">{item.title}</h3>
                  <p className="text-[19px] leading-8 whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Features;
