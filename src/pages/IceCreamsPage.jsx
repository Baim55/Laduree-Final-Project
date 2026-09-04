import { useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

function IceCreamsPage() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[130px] pb-20 garamond text-[#2e2c2a]">
      <div className="text-center px-4 max-w-4xl mx-auto pt-10 pb-16">
        <p className="text-[15px] uppercase tracking-[0.2em] text-[#706b66] mb-3">
          {t("maisonLaduree")}
        </p>
        <p className="italic text-[22px] md:text-[26px] text-[#53504e] mb-2 font-serif">
          {t("summer2026Edition")}
        </p>
        <h1 className="text-[38px] md:text-[64px] lg:text-[76px] uppercase tracking-wide font-normal mb-8 leading-none">
          {t("iceCreamsTitle")}
        </h1>
        <p className="text-[16px] md:text-[18px] text-[#53504e] leading-relaxed max-w-2xl mx-auto">
          {t("iceCreamsDesc1")}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[28px] md:text-[40px] uppercase tracking-wide mb-6">
            {t("craftedCareTitle")}
          </h2>
          <p className="text-[16px] text-[#53504e] leading-relaxed mb-6">
            {t("craftedCareDesc1")}
          </p>
          <p className="text-[16px] text-[#53504e] leading-relaxed mb-6">
            {t("craftedCareDesc2")}
          </p>
          <p className="text-[16px] text-[#53504e] leading-relaxed mb-8">
            {t("craftedCareDesc3")}
          </p>
        </div>
        <div>
          <img
            src="/assets/img/Vanille2.webp"
            alt="Vanilla Ice Cream"
            className="w-full h-auto object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16 text-center">
        <div className="mb-8">
          <img
            src="/assets/img/GLACES_FONDBLEU_LADUREEFR_22_ETE0660-1.webp" 
            alt="Ice Cream Cups"
            className="w-full max-h-[450px] object-cover mx-auto shadow-sm"
          />
        </div>
        <p className="text-[13px] uppercase tracking-[0.2em] text-[#706b66] mb-2">
          {t("expressDeliverySub")}
        </p>
        <h2 className="text-[28px] md:text-[42px] uppercase tracking-wide mb-6">
          {t("expressDeliveryTitle")}
        </h2>
        <p className="text-[16px] text-[#53504e] leading-relaxed max-w-2xl mx-auto">
          {t("expressDeliveryDesc")}
        </p>
      </div>
    </div>
  );
}

export default IceCreamsPage;