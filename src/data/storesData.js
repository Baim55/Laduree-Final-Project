export const getRegions = (t) => [
  {
    name: t("regionFrance"),
    subRegions: [
      { label: t("centralParis"), value: "Central Paris" },
      { label: t("ileDeFrance"), value: "Ile de France" },
      { label: t("normandy"), value: "Normandy" },
      { label: t("south"), value: "South" },
      { label: t("airport"), value: "Airport" },
    ],
  },
  {
    name: t("regionWorld"),
    subRegions: [
      { label: t("canada"), value: "Canada" },
      { label: t("mexico"), value: "Mexico" },
      { label: t("greece"), value: "Greece" },
      { label: t("japan"), value: "Japan" },
      { label: t("monaco"), value: "Monaco" },
      { label: t("singapore"), value: "Singapore" },
      { label: t("taiwan"), value: "Taiwan" },
    ],
  },
];
