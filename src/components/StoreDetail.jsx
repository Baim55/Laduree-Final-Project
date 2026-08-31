import { useState } from "react";
import { useParams, Link } from "react-router";
import { IoTimeOutline } from "react-icons/io5";
import { storesData } from "../data/storesData";
import Features from "./Features";
import { createSlug } from "../utils/createSlug";

function StoreDetail() {
  const { slug } = useParams();

  const store = storesData.find(
    (s) => createSlug(s.name) === slug || String(s.id) === String(slug),
  );

  const [selectedImage, setSelectedImage] = useState(0);

  if (!store) {
    return (
      <div className="garamond min-h-screen bg-[#fefbf4] pt-40 text-center">
        <h2 className="text-[32px] text-[#2e2c2a]">Store not found</h2>
        <Link to="/stores" className="mt-4 inline-block text-[16px] underline">
          Back to all stores
        </Link>
      </div>
    );
  }

  const googleMapsUrl =
    store.mapUrl ||
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      store.address.replace("\n", " "),
    )}`;

  return (
    <div className="min-h-screen bg-[#fefbf4] pt-[92px]">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="garamond flex flex-col items-center justify-center px-6 py-12 text-center sm:px-12">
          <div className="flex flex-col items-center">
            <span className="text-[20px] uppercase tracking-[0.25em] text-[#1d1a17] lg:text-[15px]">
              WELCOME TO
            </span>
            <h1 className="mt-3 text-[32px] font-semibold leading-[1.12] tracking-wide text-[#1d1a17] uppercase sm:text-[42px] lg:text-[40px]">
              {store.name}
            </h1>
            <div className="mt-6 flex flex-col items-center gap-2 text-[20px] sm:mt-8 lg:text-[16px]">
              <p className="flex items-center gap-2 font-medium text-[#2d7a4d]">
                <span className="h-2 w-2 rounded-full bg-[#2d7a4d]" />
                {store.openStatus}
              </p>
              <div className="flex items-start gap-2 text-center text-[#5a5651]">
                <IoTimeOutline size={18} className="mt-[3px] flex-shrink-0" />
                <span className="whitespace-pre-line leading-relaxed">
                  {store.hours}
                </span>
              </div>
            </div>
            <div className="mt-6 flex flex-col items-center text-[20px] text-[#5a5651] lg:text-[16px]">
              <p className="whitespace-pre-line leading-relaxed">
                {store.address}
              </p>
              <span className="laduree-dotted-v my-8 block h-[70px] w-4" />
            </div>
            {store.services && (
              <div className="flex flex-wrap items-center justify-center gap-x-2 text-[20px] text-[#5a5651] lg:text-[16px]">
                {store.services.map((service, idx) => (
                  <span key={service} className="flex items-center gap-2">
                    <span>{service}</span>
                    {idx < store.services.length - 1 && <span>•</span>}
                  </span>
                ))}
              </div>
            )}
            <p className="mt-8 text-[20px] leading-relaxed text-[#5a5651] lg:px-14 lg:text-[16px]">
              {store.description}
            </p>
            {store.phoneDisplay && (
              <div className="mt-6">
                <a
                  href={`tel:${store.phone}`}
                  className="text-[20px] text-[#5a5651] underline transition hover:opacity-75"
                >
                  {store.phoneDisplay}
                </a>
              </div>
            )}
            {(store.hasItinerary !== false ||
              store.hasPastryClass ||
              store.reservationUrl) && (
              <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row">
                {store.hasItinerary !== false && (
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center border border-[#2e2c2a] bg-transparent p-[20px] text-[20px] tracking-wide text-[#2e2c2a] transition hover:bg-[#2e2c2a] hover:text-white lg:p-[12px] lg:text-[16px]"
                  >
                    Itinerary
                  </a>
                )}
                {store.hasPastryClass && (
                  <button
                    type="button"
                    className="flex flex-1 cursor-pointer items-center justify-center border border-[#2e2c2a] bg-[#2e2c2a] p-[20px] text-[20px] tracking-wide text-white transition hover:border-[#2e2c2a] hover:bg-[#fefbf4] hover:text-[#2e2c2a] lg:p-[12px] lg:text-[16px]"
                  >
                    Book a Pastry Class
                  </button>
                )}
                {store.reservationUrl && (
                  <a
                    href={store.reservationUrl}
                    className="flex flex-1 items-center justify-center border border-[#2e2c2a] bg-[#2e2c2a] p-[20px] text-[20px] tracking-wide text-white transition hover:border-[#2e2c2a] hover:bg-[#fefbf4] hover:text-[#2e2c2a] lg:p-[12px] lg:text-[16px]"
                  >
                    Online Reservation
                  </a>
                )}
                {store.airportClickAndCollectUrl && (
                  <a
                    target="_blank"
                    href={store.airportClickAndCollectUrl}
                    className="flex flex-1 items-center justify-center border border-[#2e2c2a] bg-[#2e2c2a] p-[20px] text-[20px] tracking-wide text-white transition hover:border-[#2e2c2a] hover:bg-[#fefbf4] hover:text-[#2e2c2a] lg:p-[12px] lg:text-[16px]"
                  >
                    Airport Click & Collect
                  </a>
                )}
              </div>
            )}
            {store.menuUrl && (
              <div className="mt-8">
                <a
                  href={store.menuUrl}
                  className="text-[14px] text-[#2e2c2a] underline transition hover:opacity-75"
                >
                  Discover the menu
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="mt-4 flex w-full flex-col bg-[#fefbf4] px-4 pt-4 sm:px-6 lg:flex-row lg:items-stretch lg:gap-3 lg:px-0 lg:pt-0">
          <div className="mr-5 w-full overflow-hidden lg:h-[820px] lg:flex-1 lg:order-last">
            <img
              src={store.images?.[selectedImage] || store.image}
              alt={store.name}
              className="h-auto w-full object-cover transition duration-300 lg:h-full lg:object-center"
            />
          </div>
          {store.images && store.images.length > 1 && (
            <div className="mt-2 grid w-full grid-cols-6 gap-1.5 sm:gap-2 lg:order-first lg:mt-0 lg:flex lg:w-auto lg:flex-col lg:gap-2 lg:pl-4">
              {store.images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedImage(idx)}
                  className={`aspect-[3/4] w-full cursor-pointer overflow-hidden border transition duration-200 lg:h-[72px] lg:w-[54px] ${
                    selectedImage === idx
                      ? "border-[#2e2c2a] opacity-100"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Features />
    </div>
  );
}

export default StoreDetail;
