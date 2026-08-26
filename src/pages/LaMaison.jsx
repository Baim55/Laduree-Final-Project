import { Link } from "react-router";

function LaMaison() {
  const sections = [
    {
      id: "patisserie",
      title: "PATISSERIE KNOW-HOW\nSINCE 1862",
      link: "/e-shop",
      image: "/assets/img/house.jpg",
    },
    {
      id: "legacy",
      title: "LEGACY",
      link: "/stores",
      image: "/assets/img/atelier.jpg",
    },
    {
      id: "creations",
      title: "ICONIC CREATIONS",
      link: "/e-shop",
      image: "/assets/img/NUMBER_CAKE_ENTREMETS_4_Pierre_Monetta_2025.jpg",
    },
    {
      id: "experiences",
      title: "EXPERIENCES",
      link: "/stores",
      image: "/assets/img/LADUREE_20-02-25_pmonetta-6301.jpg",
    },
  ];

  const guarantees = [
    {
      title: "HOME DELIVERY",
      desc: "In France and Europe. Free over 75€ in Métropolitain France (see conditions).",
    },
    {
      title: "COLD CHAIN",
      desc: "Orders shipped fresh the day before the delivery.",
    },
    {
      title: "PROTECTED PRODUCTS",
      desc: "Packaging made from recyclable materials for perfect preservation and protection.",
    },
    {
      title: "CUSTOMER SERVICE",
      desc: "Monday to Friday, from 9 a.m to 5 p.m by :\n- Mail to contact@laduree.com\n- Form on our website",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      {/* FULL WIDTH BANNER SECTIONS */}
      <div className="flex flex-col">
        {sections.map((section) => (
          <div
            key={section.id}
            className="group relative flex h-[100vh] min-h-[500px] w-full items-center justify-center overflow-hidden"
          >
            {/* Background Image */}
            <img
              src={section.image}
              alt={section.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/30" />

            {/* Center Content */}
            <div className="garamond relative z-10 mx-auto flex max-w-[900px] flex-col items-center px-6 text-center text-white">
              <h2 className="whitespace-pre-line text-[48px] font-normal uppercase tracking-[0.15em] text-white drop-shadow-sm  lg:text-[72px]">
                {section.title}
              </h2>

              <Link
                to={section.link}
                className="mt-8 border border-white/40 bg-[#fefbf4] px-12 py-3 text-[15px] font-normal uppercase tracking-[0.15em] text-[#2e2c2a] shadow-md transition duration-300 hover:bg-[#2e2c2a] hover:text-white"
              >
                Discover
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* GUARANTEES / INFO SECTION */}
      <div className="border-t border-[#e5dfd5] bg-[#fefbf4] px-6 py-20 lg:px-16">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
            <div
              key={item.title}
              className="garamond flex flex-col items-center"
            >
              <h4 className="text-[17px] font-semibold uppercase tracking-[0.12em] text-[#2e2c2a]">
                {item.title}
              </h4>
              <span className="my-2 text-[14px] text-[#8c857f]">•</span>
              <p className="whitespace-pre-line text-[14px] leading-relaxed text-[#5c5752]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* BREADCRUMB FOOTER */}
      <div className="garamond border-t border-[#e5dfd5] py-6 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">•</span>
        <span>La Maison</span>
      </div>
    </div>
  );
}

export default LaMaison;
