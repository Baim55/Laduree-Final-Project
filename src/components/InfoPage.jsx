import { useParams, Link } from "react-router";
import { menuData } from "../data/menuData";

function findInfoContent(slug) {
  for (const tab of Object.values(menuData)) {
    for (const section of tab) {
      const match = section.links.find((l) => l.slug === slug);
      if (match) {
        return { label: match.label, image: section.image };
      }
    }
  }
  return null;
}

function InfoPage() {
  const { slug } = useParams();
  const content = findInfoContent(slug);

  if (!content) {
    return <p className="pt-[150px] text-center">Səhifə tapılmadı.</p>;
  }

  return (
    <div className="garamond pt-[150px] text-center">
      <h1 className="mb-6 text-[48px]">{content.label}</h1>
      <p className="mx-auto mb-10 max-w-[600px] text-[16px] text-[#46413de3]">
        Discover more about {content.label.replace(/"/g, "")} — a celebration of
        craftsmanship and flavor from the Maison.
      </p>
      <Link
        to="/shop"
        className="border border-black px-8 py-3 text-[16px] hover:bg-black hover:text-white"
      >
        Explore products
      </Link>

      <img
        src={content.image}
        alt={content.label}
        className="mx-auto mt-16 w-full max-w-[800px] object-cover"
      />
    </div>
  );
}

export default InfoPage;
