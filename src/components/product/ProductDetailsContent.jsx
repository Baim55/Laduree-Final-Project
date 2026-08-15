function ProductDetailsContent({ details }) {
  if (!details) return null;

  return (
    <>
      {details.nutrition && (
        <div className="mb-8">
          <h3 className="mb-5 text-[15px]">
            Average nutritional values per 100g:
          </h3>
          <div className="grid grid-cols-2 border-t border-dotted border-gray-300">
            <div className="space-y-2 py-3 pr-5">
              <div className="flex justify-between gap-4">
                <span>Energy</span>
                <span>{details.nutrition.energy}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Carbohydrate</span>
                <span>{details.nutrition.carbohydrate}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Sugars</span>
                <span>{details.nutrition.sugars}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Salt</span>
                <span>{details.nutrition.salt}</span>
              </div>
            </div>
            <div className="space-y-2 border-l border-dotted border-gray-300 py-3 pl-5">
              <div className="flex justify-between gap-4">
                <span>Fat</span>
                <span>{details.nutrition.fat}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Saturated fat</span>
                <span>{details.nutrition.saturatedFat}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>Protein</span>
                <span>{details.nutrition.protein}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {details.ingredients?.length > 0 && (
        <div className="mb-8">
          <h3 className="mb-4 text-[15px]">Ingredient list:</h3>
          {details.ingredients.map((ingredient, index) => (
            <div key={index} className="mb-6">
              <p className="mb-2 font-medium">{ingredient.product}:</p>
              <p>{ingredient.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Bəzi məhsullarda ingredients array yox, tək obyekt kimi gəlir */}
      {details.ingredients && !Array.isArray(details.ingredients) && (
        <div className="mb-8">
          <h3 className="mb-4 text-[15px]">Ingredient list:</h3>
          <p>{details.ingredients.text}</p>
        </div>
      )}

      {details.allergens?.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-3 text-[15px]">Allergen list:</h3>
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
          <h3 className="mb-2 text-[15px]">May contain traces of:</h3>
          <p>{details.mayContain}</p>
        </div>
      )}

      {details.netWeight && (
        <div className="mt-6">
          <p>
            <strong>Net weight:</strong> {details.netWeight}
          </p>
        </div>
      )}

      {details.pricePerKg && (
        <div className="mt-1">
          <p>
            <strong>Price per kg:</strong> {details.pricePerKg}
          </p>
        </div>
      )}
    </>
  );
}

export default ProductDetailsContent;