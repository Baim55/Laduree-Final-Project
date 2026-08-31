import { Link } from "react-router";
import Features from "../components/Features";

function Club() {
  const privileges = [
    {
      id: 1,
      title: "A birthday present",
      desc: "Maison Ladurée is taking part in the festivities with a special surprise for the occasion.",
      image: "assets/img/Club-Laduree-Cadeaux.webp",
    },
    {
      id: 2,
      title: "Exclusive private sales",
      desc: "Enjoy exclusive offers during our private sales reserved, in-stores and on laduree.com.",
      image: "assets/img/Club-Laduree-Cadeaux_2.webp",
    },
    {
      id: 3,
      title: "Special attentions",
      desc: "Dedicated ordering service, sneak previews of new creations... Exclusive privileges await you in-stores and on the laduree.com website.",
      image:
        "assets/img/Club-Laduree-Fidelite.webp",
    },
    {
      id: 4,
      title: "Unique experiences",
      desc: "Musical brunch, masterclass, themed tea time... Indulge into Ladurée experiences by being the first to be informed about our events and news.",
      image:
        "assets/img/LADUREE_20-02-25_pmonetta-6423_2.webp",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto container px-6 pt-16 pb-12 text-center">
        <p className="text-[14px] uppercase tracking-[0.2em] text-[#706b66]">
          Discover our exclusive privileges
        </p>
        <p className="mt-4 font-serif text-[28px] italic text-[#4a2e35] sm:text-[52px]">
          Welcome to
        </p>
        <h1 className="mt-1 text-[44px] uppercase tracking-wider text-[#4a2e35] sm:text-[64px] lg:text-[120px]">
          Le Club Ladurée
        </h1>
        <div className="mx-auto mt-10 max-w-[480px] overflow-hidden rounded-t-[240px] border-[6px] border-[#f9dcd8] bg-[#f9dcd8] p-1 shadow-xs">
          <img
            src="assets/img/LADUREE_20-02-25_pmonetta-6423.webp"
            alt="Le Club Ladurée"
            className="h-[550px] w-full rounded-t-[235px] object-cover object-center"
          />
        </div>
        <p className="mx-auto mt-10 max-w-[650px] text-[16px] text-[#5c5752] sm:text-[18px]">
          Experience the elegance of Ladurée with exclusive privileges reserved
          for our Club members.
        </p>
      </div>
      <div className="garamond container mx-auto  px-6 py-16">
        <h2 className="mb-14 text-center text-[36px] uppercase tracking-wider text-[#2e2c2a] sm:text-[48px]">
          Your Privileges
        </h2>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {privileges.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-6 sm:flex-row sm:items-center"
            >
              <div className="h-[220px] w-full flex-shrink-0 overflow-hidden bg-[#faf6ec] sm:w-[220px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 text-left font-semibold">
                <h3 className="text-[28px] text-[#2e2c2a]">{item.title}</h3>
                <p className="mt-3 text-[18px] leading-relaxed text-[#5c5752]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="garamond mx-auto container px-6 py-16">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Sol Tərəf: Təlimat */}
          <div className="text-center lg:text-left">
            <h2 className="text-[36px] uppercase tracking-wider text-[#2e2c2a] sm:text-[44px]">
              How to become a member?
            </h2>
            <div className="laduree-dotted-v my-8 hidden h-[60px] w-4 lg:block" />
            <div className="mt-6 space-y-6 text-[#5c5752]">
              <p className="text-[15px] uppercase tracking-widest text-[#2e2c2a] font-semibold">
                Two options:
              </p>
              <p className="text-[15px] leading-relaxed">
                <strong>In-store:</strong> register with our team the next time
                you visit our stores. You’ll receive your Ladurée card by email.
              </p>
              <p className="text-[15px] leading-relaxed">
                <strong>On laduree.com:</strong>{" "}
                <Link to="/login" className="underline hover:text-black">
                  create an account
                </Link>{" "}
                to join "Le Club Ladurée".
              </p>
              <p className="text-[14px] italic text-[#706b66]">
                Go directly to your e-mail box to consult your gourmet
                privileges.
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-[#faf6ec] shadow-sm">
            <img
              src="assets/img/LADUREE_20-02-25_pmonetta-6618_1.webp"
              alt="Ladurée bag and member"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      <Features />
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <span className="mx-2">•</span>
        <span>Le Club Ladurée</span>
      </div>
    </div>
  );
}

export default Club;
