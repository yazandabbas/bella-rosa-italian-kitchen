export const restaurant = {
  name: "Bella Rosa Italian Kitchen",
  address: "1842 Maple Avenue, Charlotte, NC 28203",
  phone: "(704) 555-2819",
  email: "info@bellarosakitchen.com",
  managerEmail: "manager@bellarosakitchen.com",
  hours: {
    monThu: "11:00 AM – 9:00 PM",
    friSat: "11:00 AM – 10:30 PM",
    sunday: "12:00 PM – 8:00 PM",
  },
  reservation: {
    buttonLabel: "Reserve Your Table",
    // Replace the widget URL with your live OpenTable widget URL/ID.
    openTableWidgetUrl: "https://www.opentable.com/widget/reservation/placeholder?rid=PLACEHOLDER",
    openTableButtonUrl: "https://www.opentable.com/r/bella-rosa-italian-kitchen-reservations-charlotte",
  },
  ordering: {
    toastUrl: "https://www.toasttab.com/bellarosakitchen-online-ordering",
    giftCardUrl: "https://bellarosakitchen.com/gift-cards",
  },
  links: {
    googleMapsQuery: "https://www.google.com/maps?q=1842+Maple+Avenue,+Charlotte,+NC+28203",
    googleMapEmbed:
      "https://www.google.com/maps?q=1842+Maple+Avenue,+Charlotte,+NC+28203&output=embed",
    googleReviews: "https://www.google.com/search?q=Bella+Rosa+Italian+Kitchen+Charlotte+reviews",
    yelp: "https://www.yelp.com/search?find_desc=Bella+Rosa+Italian+Kitchen&find_loc=Charlotte,+NC",
    instagram: "https://www.instagram.com/bellarosakitchen",
    facebook: "https://www.facebook.com/bellarosakitchen",
  },
  seo: {
    city: "Charlotte, NC",
    neighborhoods: ["South End", "Dilworth"],
    keywords:
      "Italian restaurant Charlotte, Italian food South End, pasta Charlotte, date night restaurant Charlotte",
  },
};

export const menuItems = [
  {
    section: "Antipasti & Small Plates",
    items: [
      {
        name: "Crispy Fried Artichoke Hearts",
        price: "$15",
        description:
          "Whole artichokes roasted with lemon-herb aioli and a touch of lemon zest.",
        tags: ["Popular", "Vegetarian"],
        image: "/assets/generated/bella-catering.png",
      },
      {
        name: "Bruschetta Classica",
        price: "$12",
        description:
        "Toasted focaccia, vine-ripened tomatoes, basil, and extra virgin olive oil.",
        tags: ["Vegetarian"],
        image: "/assets/generated/bella-chef.png",
      },
      {
        name: "Prosciutto and Melon",
        price: "$13",
        description:
          "Thinly sliced prosciutto with chilled cantaloupe and house ricotta, finished with cracked black pepper.",
        tags: ["Gluten-Free"],
        image: "/assets/generated/bella-hero.png",
      },
    ],
  },
  {
    section: "Pasta & Risotto",
    items: [
      {
        name: "Truffle Tagliatelle",
        price: "$28",
        description:
          "House-made tagliatelle with wild mushrooms, butter, white wine, and shaved black truffle.",
        tags: ["Popular"],
        image: "/assets/generated/bella-tagliatelle.png",
      },
      {
        name: "Lemon Risotto Primavera",
        price: "$24",
        description:
          "Creamy seasonal risotto with spring peas, asparagus, and lemon zest.",
        tags: ["Vegetarian", "Gluten-Free"],
        image: "/assets/generated/bella-chef.png",
      },
      {
        name: "Spicy Sausage Pappardelle",
        price: "$30",
        description:
          "House-made pappardelle with San Marzano tomato, house sausage, chili oil, and aged pecorino.",
        tags: ["Popular"],
        image: "/assets/generated/bella-tagliatelle.png",
      },
    ],
  },
  {
    section: "Mains",
    items: [
      {
        name: "Chicken Saltimbocca",
        price: "$34",
        description:
          "Chicken breast wrapped with Serrano ham, sage, and a buttered caper pan sauce.",
        tags: ["Popular"],
        image: "/assets/generated/bella-catering.png",
      },
      {
        name: "Braised Short Ribs al Vino Rosso",
        price: "$38",
        description:
          "Slow-braised short ribs over creamy polenta with roasted carrots and gremolata.",
        tags: [],
        image: "/assets/generated/bella-hero.png",
      },
      {
        name: "Eggplant Parmigiana",
        price: "$26",
        description:
          "Crispy eggplant, tomato-simmered sauce, baked mozzarella, and herb breadcrumbs.",
        tags: ["Vegetarian"],
        image: "/assets/generated/bella-chef.png",
      },
    ],
  },
];

export const featuredDishes = menuItems
  .flatMap((section) => section.items)
  .filter((item) => item.tags.includes("Popular"))
  .slice(0, 3);

export const galleryImages = [
  {
    src: "/assets/generated/bella-hero.png",
    alt: "Warm Bella Rosa dining room with Italian plates and candlelight",
  },
  {
    src: "/assets/generated/bella-tagliatelle.png",
    alt: "Fresh tagliatelle with mushrooms, herbs, and parmesan",
  },
  {
    src: "/assets/generated/bella-catering.png",
    alt: "Private dining table with family-style Italian dishes",
  },
  {
    src: "/assets/generated/bella-chef.png",
    alt: "Chef finishing fresh pasta at the kitchen pass",
  },
];

export const testimonials = [
  {
    quote:
      "The risotto was perfectly creamy and the room has such a warm, relaxed feeling. Perfect for our anniversary.",
    name: "Elena M.",
    source: "Dinner guest",
  },
  {
    quote:
      "They helped us plan the entire company dinner from menu to timing. Service was thoughtful and seamless.",
    name: "David R.",
    source: "Catering event",
  },
  {
    quote:
      "The food tastes like the best kind of old-school Sunday in Italy—without losing anything modern about presentation.",
    name: "Priya K.",
    source: "Regular visitor",
  },
];
