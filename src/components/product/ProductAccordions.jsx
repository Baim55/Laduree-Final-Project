import { useState } from "react";
import AccordionSection from "./AccordionSection";
import ProductDetailsContent from "./ProductDetailsContent";
import ProductStorageContent from "./ProductStorageContent";

function ProductAccordions({ product, showDescription = false }) {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  const details = product.details;

  return (
    <div className="border-t border-gray-400">
      {/* Description — yalnız showDescription=true olanda görünür (Bundle üçün) */}
      {showDescription && product.description && (
        <AccordionSection
          title="Description"
          isOpen={openSection === "description"}
          onToggle={() => toggleSection("description")}
        >
          <p>{product.description}</p>
        </AccordionSection>
      )}

      {/* Usage tips — yalnız details.usageTips varsa görünür */}
      {details?.usageTips && (
        <AccordionSection
          title="Usage tips"
          isOpen={openSection === "usage"}
          onToggle={() => toggleSection("usage")}
        >
          <p>{details.usageTips}</p>
        </AccordionSection>
      )}

      {details && (
        <AccordionSection
          title="Ingredients & allergens"
          isOpen={openSection === "ingredients"}
          onToggle={() => toggleSection("ingredients")}
        >
          <ProductDetailsContent details={details} />
        </AccordionSection>
      )}

      {details?.storage && (
        <AccordionSection
          title="Storage"
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
