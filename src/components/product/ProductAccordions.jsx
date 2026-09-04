import { useState } from "react";
import AccordionSection from "./AccordionSection";
import ProductDetailsContent from "./ProductDetailsContent";
import ProductStorageContent from "./ProductStorageContent";
import { useLanguage } from "../../context/LanguageContext";

function ProductAccordions({ product, showDescription = false }) {
  const { t } = useLanguage();
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  const details = product.details;

  return (
    <div className="border-t border-gray-400">
      {showDescription && product.description && (
        <AccordionSection
          title={t("description")}
          isOpen={openSection === "description"}
          onToggle={() => toggleSection("description")}
        >
          <p>{product.description}</p>
        </AccordionSection>
      )}
      {details?.usageTips && (
        <AccordionSection
          title={t("usageTips")}
          isOpen={openSection === "usage"}
          onToggle={() => toggleSection("usage")}
        >
          <p>{details.usageTips}</p>
        </AccordionSection>
      )}
      {details && (
        <AccordionSection
          title={t("ingredientsAllergens")}
          isOpen={openSection === "ingredients"}
          onToggle={() => toggleSection("ingredients")}
        >
          <ProductDetailsContent details={details} />
        </AccordionSection>
      )}
      {details?.storage && (
        <AccordionSection
          title={t("storage")}
          isOpen={openSection === "storage"}
          onToggle={() => toggleSection("storage")}
        >
          <ProductStorageContent details={details} />
        </AccordionSection>
      )}
    </div>
  );
}

export default ProductAccordions;
