import { Link } from "react-router";
import { useLanguage } from "../context/LanguageContext";

function LeClubConditions() {
  const { t } = useLanguage();

  const guarantees = [
    {
      title: t("homeDeliveryTitle"),
      desc: t("homeDeliveryText"),
    },
    {
      title: t("coldChainTitle"),
      desc: t("coldChainText"),
    },
    {
      title: t("protectedProductsTitle"),
      desc: t("protectedProductsText"),
    },
    {
      title: t("customerServiceTitle"),
      desc: t("customerServiceText"),
    },
  ];

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="garamond mx-auto max-w-[1000px] px-6 pt-16 pb-12 text-center">
        <h1 className="text-[34px] font-normal uppercase tracking-[0.12em] text-[#2e2c2a] sm:text-[46px] lg:text-[52px]">
          {t("termsConditionsClubTitle")}
        </h1>
      </div>
      <div className="garamond mx-auto max-w-[820px] px-6 pb-20 text-center text-[#5c5752] leading-relaxed">
        <div className="space-y-4">
          <h2 className="text-[17px] font-semibold uppercase tracking-wider text-[#2e2c2a]">
            {t("article1Title")}
          </h2>
          <p className="text-[14px]">
            1.1 PATISSERIE E. LADUREE, a société par actions simplifiée (simplified joint stock company) with capital of €372.584,80, registered in the Paris Trade and Companies Register under number 572 045 540, whose registered office is located at 84 avenue d'Iéna, 75116 Paris, FRANCE (hereinafter referred to as "LADUREE"), has created and manages a loyalty program called "the LADUREE Club" (hereinafter referred to as the "Program") intended for its customers making a purchase in one of the eligible Ladurée boutiques (see §1.2) or on the website www.laduree.fr (hereinafter referred to as the "Website").
          </p>
          <p className="text-[14px]">
            1.2 The purpose of these general terms and conditions relating to the Program (hereinafter the "General Terms and Conditions") is to set out the terms and conditions of membership and operation of the Program. Any person joining the Program is deemed to have read and accepted the General Terms and Conditions without reservation.
          </p>
          <p className="text-[14px] font-medium text-[#2e2c2a]">
            {t("programValidText")}
          </p>
          <div className="space-y-1 text-[13px] italic text-[#4a4540]">
            <p>Ladurée Paris Victor Hugo – 4 place Victor Hugo 75016</p>
            <p>Ladurée Paris Champs-Elysées – 75 avenue des Champs Elysées 75008</p>
            <p>Ladurée Paris Bonaparte – 21 rue Bonaparte 75006</p>
            <p>Ladurée Paris Jardin du Luxembourg – 4 place Edmond Rostand 75006</p>
            <p>Ladurée Paris Royale – 16-18 rue Royale 75008</p>
            <p>Ladurée Paris Carrousel du Louvre – 99 rue de Rivoli 75001</p>
            <p>Ladurée Paris Rue de Bretagne – 14 rue de Bretagne 75003</p>
            <p>Ladurée Paris Printemps – 62 boulevard Haussmann 75009</p>
            <p>Ladurée Paris Beaugrenelle – 15 rue Linois 75015</p>
            <p>Ladurée Paris Drugstore Publicis – 133 avenue des Champs Elysées 75008</p>
            <p>Ladurée Paris Rivoli – 232 rue de Rivoli 75001</p>
            <p>Ladurée Gare de Lyon – Traveler retail, place Louis Armand 75012</p>
            <p>Ladurée Gare Saint-Lazare – 1 cour de Rome 75008</p>
            <p>Ladurée Gare Montparnasse – 17 boulevard Vaugirard 75015</p>
            <p>Ladurée Saint-Tropez – 20 rue Gambetta 83990 Saint-Tropez</p>
            <p>Ladurée Cannes – 79 rue d’Antibes 06400 Cannes</p>
            <p>Ladurée Versailles – Château de Versailles, place d’armes 78000 Versailles</p>
            <p>Ladurée Vallée Village – 3 cours de la Garonne 77700 Serris</p>
            <p>Ladurée Giverny – Centre commercial MacArthur Glen 27120 Douains</p>
            <p>Ladurée Aéroport d’Orly – 94390 Orly</p>
            <p>Ladurée Aéroport de Roissy Charles de Gaulle – 95700 Roissy-en-France</p>
            <p>Ladurée Aéroport de Nice – rue Costes et Bellonte 06206 Nice</p>
            <p>Ladurée Nice CAP3000 – Avenue Eugène Donadeï 06700 Saint-Laurent-du-Var</p>
          </div>
          <p className="text-[14px]">
            1.3 As the General Terms and Conditions may be subject to subsequent modifications, the version applicable to the customer's purchase is that in force on the Internet Site on the date the order is placed.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          <h2 className="text-[17px] font-semibold uppercase tracking-wider text-[#2e2c2a]">
            {t("article2Title")}
          </h2>
          <p className="text-[14px]">
            The Program enables its members (hereinafter the "Member(s)") to benefit from advantages, services and/or offers proposed by LADUREE.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          <h2 className="text-[17px] font-semibold uppercase tracking-wider text-[#2e2c2a]">
            {t("article3Title")}
          </h2>
          <p className="text-[14px]">
            3.1. Membership is open to all individuals over the age of 18. It is not possible to benefit from the Program for a legal entity (company, professional organization, association...).
          </p>
          <p className="text-[14px]">
            3.2. Only one membership application per person will be considered.
          </p>
          <p className="text-[14px]">
            3.3. Enrolment in the Program is free of charge and is offered on the LADUREE website when an account is created.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          <h2 className="text-[17px] font-semibold uppercase tracking-wider text-[#2e2c2a]">
            {t("article4And5Title")}
          </h2>
          <p className="text-[14px]">
            4.1 The Program enables the Member to receive communications relating to the Maison Ladurée and the events it organizes. In addition, the Member will benefit from advantages such as a gift against purchase for his/her birthday and access to LADUREE private sales.
          </p>
          <p className="text-[14px]">
            5.1. Notification of advantage: The Member will receive an email indicating an advantage or a discount code to be used on the Website and/or in the Boutiques.
          </p>
        </div>
        <div className="mt-10 space-y-3">
          <h2 className="text-[17px] font-semibold uppercase tracking-wider text-[#2e2c2a]">
            {t("article7And8Title")}
          </h2>
          <p className="text-[14px]">
            7.1. Registration for the Program implies that the Member provides basic information (Name, Email, Date of Birth). All personal data is processed according to data protection regulations.
          </p>
          <p className="text-[14px]">
            8.1. Members may cancel their membership of the Program at any time, either by clicking on the unsubscribe link in emails or by contacting customer service.
          </p>
        </div>
      </div>
      <div className="border-t border-[#e5dfd5] bg-[#fefbf4] px-6 py-16 lg:px-16">
        <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item) => (
            <div key={item.title} className="garamond flex flex-col items-center">
              <h4 className="text-[16px] font-semibold uppercase tracking-[0.12em] text-[#2e2c2a]">
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
      <div className="garamond border-t border-[#e5dfd5] py-5 text-center text-[13px] text-[#706b66]">
        <Link to="/" className="hover:underline">
          {t("home")}
        </Link>
        <span className="mx-2">•</span>
        <span>{t("leClubConditionsTitle")}</span>
      </div>
    </div>
  );
}

export default LeClubConditions;