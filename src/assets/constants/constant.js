import PC2 from "../../assets/Images/Home/PC2.png";
import Laptop from "../../assets/Images/Home/Laptop.png";
import Monitor from "../../assets/Images/Home/Monitor.png";
import Mouse from "../../assets/Images/Home/Mouse.png";
import Keyboard from "../../assets/Images/Home/Keyboard.png";
import Headphones from "../../assets/Images/Home/Headphones.png";
import Tablet from "../../assets/Images/Home/Tablet.png";
import Speakers from "../Images/Home/Speakers.jpg";

export const products = [
  {
    id: 1,
    category: "Desktop",
    type: "Desktop",
    title: "High End Gaming Pc",
    image: PC2,
    price: 1800,
    originalPrice: 2200,
    currency: "$",
    rating: 4.5,
  },
  {
    id: 2,
    category: "Laptop",
    type: "Laptop",
    title: "Gaming Laptop",
    image: Laptop,
    price: 999,
    originalPrice: 1299,
    currency: "$",
    rating: 4,
  },
  {
    id: 3,
    category: "Monitor",
    type: "Monitor",
    title: "UHD Display",
    image: Monitor,
    price: 800,
    originalPrice: 1000,
    currency: "$",
    rating: 4.5,
  },
  {
    id: 4,
    category: "Accessories",
    type: "Mouse",
    title: "G502 Wireless Mouse",
    image: Mouse,
    price: 80,
    originalPrice: 120,
    currency: "$",
    rating: 3.5,
  },
  {
    id: 5,
    category: "Accessories",
    type: "Keyboard",
    title: "G502 Wireless Keyboard",
    image: Keyboard,
    price: 120,
    originalPrice: 160,
    currency: "$",
    rating: 4,
  },
  {
    id: 6,
    category: "Accessories",
    type: "Headphones",
    title: "G502 Wireless Headphones",
    image: Headphones,
    price: 150,
    originalPrice: 200,
    currency: "$",
    rating: 4.5,
  },
  {
    id: 7,
    category: "Accessories",
    type: "Speakers",
    title: "Redragon Gaming Speaker",
    image: Speakers,
    price: 60,
    originalPrice: 90,
    currency: "$",
    rating: 4,
  },
  {
    id: 8,
    category: "Tablet",
    type: "Tablet",
    title: "Gaming Tablet",
    image: Tablet,
    price: 500,
    originalPrice: 650,
    currency: "$",
    rating: 3.5,
  },
];


// features object array used in home/Bannerfeatures.jsx

export const features = [
  {
    id: 1,
    icon: "FaTruck",
    title: "FREE SHIPPING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 2,
    icon: "FaUndoAlt",
    title: "100% REFUND",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
  {
    id: 3,
    icon: "FaHeadset",
    title: "SUPPORT 24/7",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
  },
];

//contact info used in contactUs page

export const contactInfo = [
  {
    id: 1,
    icon: "FaPhone",
    label: "Phone Number",
    value: "+44 123 456 789",
  },
  {
    id: 2,
    icon: "FaEnvelope",
    label: "Email Address",
    value: "Myemail@email.com",
  },
  {
    id: 3,
    icon: "FaMapMarkerAlt",
    label: "Our Store",
    value: "Street 7, new Café, London, UK",
  },
];

// categories used in Shop page sidebar
export const categories = [
  { id: 1, name: "Desktop", count: 1 },
  { id: 2, name: "Laptop", count: 1 },
  { id: 3, name: "Monitor", count: 1 },
  { id: 4, name: "Accessories", count: 4 },
  { id: 5, name: "Tablet", count: 1 },
];
