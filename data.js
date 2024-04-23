import coffeeGranEspressoImg from "./assets/home/desktop/image-gran-espresso.png";
import coffeePlanaltoImg from "./assets/home/desktop/image-planalto.png";
import coffeePiccolloImg from "./assets/home/desktop/image-piccollo.png";
import coffeeDancheImg from "./assets/home/desktop/image-danche.png";

import beanIcon from "./assets/home/desktop/icon-coffee-bean.svg";
import giftIcon from "./assets/home/desktop/icon-gift.svg";
import truckIcon from "./assets/home/desktop/icon-truck.svg";

import ukIcon from "./assets/about/desktop/illustration-uk.svg";
import canadaIcon from "./assets/about/desktop/illustration-canada.svg";
import australiaIcon from "./assets/about/desktop/illustration-australia.svg";

export const collection = [
  {
    image: coffeeGranEspressoImg,
    name: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience",
  },

  {
    image: coffeePlanaltoImg,
    name: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
  },

  {
    image: coffeePiccolloImg,
    name: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },

  {
    image: coffeeDancheImg,
    name: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
];

export const whyChoose = [
  {
    image: beanIcon,
    alt: "coffee bean",
    heading: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: giftIcon,
    alt: "gift",
    heading: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: truckIcon,
    alt: "truck",
    heading: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

export const instructions = [
  {
    heading: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },

  {
    heading: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },

  {
    heading: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provheadlinee a distinct tasting experience.",
  },
];

export const headquarters = [
  {
    icon: ukIcon,
    location: "United Kingdom",
    information: {
      street: "68 Ashfordby Rd",
      city: "Alcaston",
      region: "SY6 1YA",
      phone: "+44 1241 918425",
    },
  },

  {
    icon: canadaIcon,
    location: "Canada",
    information: {
      street: "1529 Eglington Avenue",
      city: "Toronto",
      region: "Ontario M4P 1A6",
      phone: "+1 416 485 2997",
    },
  },

  {
    icon: australiaIcon,
    location: "Australia",
    information: {
      street: "36 Swanston Street",
      city: "Kewell",
      region: "Victoria",
      phone: "+61 4 9928 3629",
    },
  },
];

export const orderOptions = [
  {
    id: "howToDrink",
    name: "Preferences",
    heading: "How do you drink your coffee?",
    options: [
      {
        type: "Capsule",
        description: "Compatible with Nespresso systems and similar brewers",
      },
      {
        type: "Filter",
        description:
          "For pour over or drip methods like Aeropress, Chemex, and V60",
      },
      {
        type: "Espresso",
        description:
          "Dense and finely ground beans for an intense, flavorful experience",
      },
    ],
  },
  {
    id: "beanType",
    name: "Bean Type",
    heading: "What type of coffee?",
    options: [
      {
        type: "Single Origin",
        description:
          "Distinct, high quality coffee from a specific family-owned farm",
      },
      {
        type: "Decaf",
        description:
          "Just like regular coffee, except the caffeine has been removed",
      },
      {
        type: "Blended",
        description:
          "Combination of two or three dark roasted beans of organic coffees",
      },
    ],
  },
  {
    id: "quantity",
    name: "Quantity",
    heading: "How much would you like?",
    options: [
      {
        type: "250g",
        description:
          "Perfect for the solo drinker. Yields about 12 delicious cups.",
      },
      {
        type: "500g",
        description:
          "Perfect option for a couple. Yields about 40 delectable cups.",
      },
      {
        type: "1000g",
        description:
          "Perfect for offices and events. Yields about 90 delightful cups.",
      },
    ],
  },
  {
    id: "grindOption",
    name: "Grind Option",
    heading: "Want us to grind them?",
    options: [
      {
        type: "Wholebean",
        description: "Best choice if you cherish the full sensory experience",
      },
      {
        type: "Filter",
        description:
          "For drip or pour-over coffee methods such as V60 or Aeropress",
      },
      {
        type: "Cafetiére",
        description:
          "Course ground beans specially suited for french press coffee",
      },
    ],
  },
  {
    id: "deliveries",
    name: "Deliveries",
    heading: "How often should we deliver?",
    options: [
      {
        type: "Every week",
        prices: {
          "250g": 7.2,
          "500g": 13.0,
          "1000g": 22.0,
        },
        multiplier: 4,
        description: "Includes free first-class shipping.",
      },
      {
        type: "Every two weeks",
        prices: {
          "250g": 9.6,
          "500g": 17.5,
          "1000g": 32.0,
        },
        multiplier: 2,
        description: "Includes free priority shipping.",
      },
      {
        type: "Every month",
        prices: {
          "250g": 12.0,
          "500g": 22.0,
          "1000g": 42.0,
        },
        multiplier: 1,
        description: "Includes free priority shipping.",
      },
    ],
  },
];
