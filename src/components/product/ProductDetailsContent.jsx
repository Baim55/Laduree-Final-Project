import { useLanguage } from "../../context/LanguageContext";

function ProductDetailsContent({ details }) {
  const { t } = useLanguage();
  if (!details) return null;

  return (
    <>
      {details.nutrition && (
        <div className="mb-8">
          <h3 className="mb-5 text-[15px]">
            {t("averageNutritionalValues")}
          </h3>
          <div className="grid grid-cols-2 border-t border-dotted border-gray-300">
            <div className="space-y-2 py-3 pr-5">
              <div className="flex justify-between gap-4">
                <span>{t("energy")}</span>
                <span>{details.nutrition.energy}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t("carbohydrate")}</span>
                <span>{details.nutrition.carbohydrate}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t("sugars")}</span>
                <span>{details.nutrition.sugars}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t("salt")}</span>
                <span>{details.nutrition.salt}</span>
              </div>
            </div>
            <div className="space-y-2 border-l border-dotted border-gray-300 py-3 pl-5">
              <div className="flex justify-between gap-4">
                <span>{t("fat")}</span>
                <span>{details.nutrition.fat}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t("saturatedFat")}</span>
                <span>{details.nutrition.saturatedFat}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>{t("protein")}</span>
                <span>{details.nutrition.protein}</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {details.ingredients?.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-4 text-[15px]">{t("ingredientList")}</h3>
          {details.ingredients.map((ingredient, index) => (
            <div key={index} className="mb-6">
              <p className="mb-2 font-medium">{ingredient.product}:</p>
              <p>{ingredient.text}</p>
            </div>
          ))}
        </div>
      )}
      {details.ingredients && !Array.isArray(details.ingredients) && (
        <div className="mb-8">
          <h3 className="mb-4 text-[15px]">{t("ingredientList")}</h3>
          <p>{details.ingredients.text}</p>
        </div>
      )}
      {details.allergens?.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-3 text-[15px]">{t("allergenList")}</h3>
          <ol className="grid grid-cols-1 pl-5 md:grid-cols-2">
            {details.allergens.map((allergen, index) => (
              <li key={index} className="list-decimal">
                {allergen}
              </li>
            ))}
          </ol>
        </div>
      )}
      {details.mayContain && (
        <div className="mt-6">
          <h3 className="mb-2 text-[15px]">{t("mayContainTraces")}</h3>
          <p>{details.mayContain}</p>
        </div>
      )}
      {details.netWeight && (
        <div className="mt-6">
          <p>
            <strong>{t("netWeight")}</strong> {details.netWeight}
          </p>
        </div>
      )}
      {details.pricePerKg && (
        <div className="mt-1">
          <p>
            <strong>{t("pricePerKg")}</strong> {details.pricePerKg}
          </p>
        </div>
      )}
    </>
  );
}

export default ProductDetailsContent;