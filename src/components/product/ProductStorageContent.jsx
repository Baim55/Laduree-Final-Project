function ProductStorageContent({ details }) {
  if (!details?.storage) return null;
  if (Array.isArray(details.storage)) {
    if (details.storage.length === 0) return null;

    return (
      <>
        {details.storage.map((storage, index) => (
          <div key={index} className="mb-6">
            {storage.product && (
              <p className="mb-1 font-medium">{storage.product}:</p>
            )}
            <p>{storage.text}</p>
          </div>
        ))}
        {details.defrosting && <p className="mt-6">{details.defrosting}</p>}
      </>
    );
  }

  return (
    <>
      <p>{details.storage.text}</p>
      {details.defrosting && <p className="mt-6">{details.defrosting}</p>}
    </>
  );
}

export default ProductStorageContent;