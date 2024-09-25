export type TProducts = {
  img: string;
  title: string;
  description: string;
  price: string;
  category: string;
};

export type TOption = {
  key: string;
  label: string;
};

export const products: TProducts[] = [
  {
    img: "https://i.ibb.co.com/wyT2kjz/newedits-180.webp",
    title: "Itty Bitty Heart Necklace",
    price: "160",
    category: "Best Selling",
    description:
      "14k gold fill or sterling silver, 1.5mm cable chain with adjustable length 14'' - 16''",
  },
  {
    img: "https://i.ibb.co.com/wdgFw2p/Luna-Moon-Necklace.webp",
    title: "Luna Moon Necklace",
    price: "150",
    category: "New",
    description:
      "Waterproof, tarnish proof, and hypoallergenic, crafted from brass with a durable 10k gold PVD coating",
  },

  {
    img: "https://i.ibb.co.com/mcJ1ddK/Cowgirl-Dreams-Necklace.webp",
    title: "Cowgirl Dreams Necklace",
    price: "190",
    category: "Best Setting",
    description:
      "Waterproof, tarnish proof, and hypoallergenic, crafted from brass with a durable 10k gold or silver PVD coating.",
  },
  {
    img: "https://i.ibb.co.com/59RvYHX/Two-Fish-Necklace.webp",
    title: "Long Fish Friends Necklace",
    price: "210",
    category: "New",
    description:
      "12k gold plated over brass. 30mm long small fish, 46mm long large fish",
  },
];

export const categoryOptions: TOption[] = [
  {
    key: "Best Selling",
    label: "Best Selling",
  },
  {
    key: "New",
    label: "New",
  },
];

export const priceOptions: TOption[] = [
  {
    key: "150",
    label: "$150",
  },
  {
    key: "160",
    label: "$160",
  },

  {
    key: "190",
    label: "$190",
  },
  {
    key: "210",
    label: "$210",
  },
];
