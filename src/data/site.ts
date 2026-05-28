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
        image:
          "https://images.unsplash.com/photo-1550966871-3ed5b5f9aeb1?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Bruschetta Classica",
        price: "$12",
        description:
        "Toasted focaccia, vine-ripened tomatoes, basil, and extra virgin olive oil.",
        tags: ["Vegetarian"],
        image:
          "https://images.unsplash.com/photo-1523987355523-c7b5b0723c4c?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Prosciutto and Melon",
        price: "$13",
        description:
          "Thinly sliced prosciutto with chilled cantaloupe and house ricotta, finished with cracked black pepper.",
        tags: ["Gluten-Free"],
        image:
          "https://images.unsplash.com/photo-1608039755392-a9d7f3b3f6f2?auto=format&fit=crop&w=1200&q=80",
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
        image:
          "https://images.unsplash.com/photo-1553163147-622ab57be1c7?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Lemon Risotto Primavera",
        price: "$24",
        description:
          "Creamy seasonal risotto with spring peas, asparagus, and lemon zest.",
        tags: ["Vegetarian", "Gluten-Free"],
        image:
          "https://images.unsplash.com/photo-1603360946369-dc2f9c2f7ca2?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Spicy Sausage Pappardelle",
        price: "$30",
        description:
          "House-made pappardelle with San Marzano tomato, house sausage, chili oil, and aged pecorino.",
        tags: ["Popular"],
        image:
          "https://images.unsplash.com/photo-1551248429-40975aa4de74?auto=format&fit=crop&w=1200&q=80",
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
        image:
          "https://images.unsplash.com/photo-1626200925761-5d5f3c6f8d8b?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Braised Short Ribs al Vino Rosso",
        price: "$38",
        description:
          "Slow-braised short ribs over creamy polenta with roasted carrots and gremolata.",
        tags: [],
        image:
          "https://images.unsplash.com/photo-1571407970349-3d2f0f3b8d2f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        name: "Eggplant Parmigiana",
        price: "$26",
        description:
          "Crispy eggplant, tomato-simmered sauce, baked mozzarella, and herb breadcrumbs.",
        tags: ["Vegetarian"],
        image:
          "https://images.unsplash.com/photo-1555992336-2f4f4f1c1f8f?auto=format&fit=crop&w=1200&q=80",
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
    src: "https://images.unsplash.com/photo-1612874742237-6526221588a6?auto=format&fit=crop&w=1200&q=80",
    alt: "Wood-fired pizza with cheese and basil on a rustic table",
  },
  {
    src: "https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1200&q=80",
    alt: "Cozy candlelit interior seating with warm lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1200&q=80",
    alt: "Close-up of hand-tossed pasta being plated",
  },
  {
    src: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=1200&q=80",
    alt: "Restaurant entrée service and wine pairing",
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
