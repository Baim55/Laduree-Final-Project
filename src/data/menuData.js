export const getMenuData = (t) => ({
  delivery: [
    {
      id: 1,
      title: t("summerEditions"),
      slug: "summer-editions",
      image: "/assets/img/casablanca.avif",
      links: [
        {
          label: t("collectorsDays"),
          slug: "collectors-days-collection",
          type: "collection",
        },
        {
          label: t("iceCreams"),
          slug: "laduree-ice-creams-sorbets",
          type: "info",
        },
      ],
    },
    {
      id: 2,
      title: t("macarons"),
      slug: "macarons",
      image: "/assets/img/macarons.avif",
      links: [
        {
          label: t("macaronGiftBoxesLink"),
          slug: "macarons",
          type: "collection",
        },
        {
          label: t("flavorGuideLink"),
          slug: "macarons-flavors",
          type: "info",
        },
      ],
    },
    {
      id: 3,
      title: t("eugenie"),
      slug: "eugenie",
      image: "/assets/img/eugenie.avif",
      links: [
        {
          label: t("eugenieGiftBoxesLink"),
          slug: "eugenie",
          type: "collection",
        },
        {
          label: t("flavorGuideLink"),
          slug: "eugenie-flavors",
          type: "info",
        },
      ],
    },
    {
      id: 4,
      title: t("chocolatesMenu"),
      slug: "chocolates",
      image: "/assets/img/chocolates.avif",
      links: [
        {
          label: t("chocolatesConfectioneriesLink"),
          slug: "chocolates",
          type: "collection",
        },
        {
          label: t("chocolatePearlsLink"),
          slug: "chocolate-pearls",
          type: "info",
        },
        {
          label: t("marshmallowBearsLink"),
          slug: "marshmallow-bears",
          type: "info",
        },
      ],
    },
    {
      id: 5,
      title: t("teaTime"),
      slug: "tea-time",
      image: "/assets/img/teaTime.avif",
      links: [
        {
          label: t("signatureTeasLink"),
          slug: "tea-time",
          type: "collection",
        },
        {
          label: t("biscuitsDelicaciesLink"),
          slug: "biscuits",
          type: "collection",
        },
        {
          label: t("jamsHoneysLink"),
          slug: "jams-honeys",
          type: "collection",
        },
      ],
    },
    {
      id: 6,
      title: t("gifts"),
      slug: "gifts",
      image: "/assets/img/gifts.avif",
      links: [
        {
          label: t("assortmentsReadyLink"),
          slug: "gifts",
          type: "collection",
        },
        {
          label: t("accessoriesLink"),
          slug: "accessories",
          type: "collection",
        },
      ],
    },
  ],
  pickup: [
    {
      id: 1,
      title: t("macaronsPyramids"),
      slug: "macarons-pyramids",
      image: "/assets/img/pyramidas.avif",
      links: [
        {
          label: t("allPyramidsLink"),
          slug: "macarons-pyramids",
          type: "collection",
        },
      ],
    },
    {
      id: 2,
      title: t("pastriesToShare"),
      slug: "pastries-to-share",
      image: "/assets/img/patisserie.avif",
      links: [
        {
          label: t("allPastriesLink"),
          slug: "pastries-to-share",
          type: "collection",
        },
      ],
    },
  ],
});
