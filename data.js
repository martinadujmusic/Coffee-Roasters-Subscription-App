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
    title: "Best quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    image: giftIcon,
    alt: "gift",
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    image: truckIcon,
    alt: "truck",
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];

export const steps = [
  {
    title: "Pick your coffee",
    description:
      "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
  },

  {
    title: "Choose the frequency",
    description:
      "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },

  {
    title: "Receive and enjoy!",
    description:
      "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
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
