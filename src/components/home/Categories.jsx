import React, { useState } from "react";
import { products } from "../../assets/constants/constant";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FaLaptop } from "react-icons/fa";
import { LuPcCase, LuCpu, LuMouse } from "react-icons/lu";
import ProductCard from "../common/ProductCard";
import Typography from "../common/Typography";

const Categories = () => {
  // array for buttons
  const categories = [
    { name: "All", icon: FaComputer },
    { name: "Desktop", icon: HiOutlineDesktopComputer },
    { name: "Laptop", icon: FaLaptop },
    { name: "Accessories", icon: LuMouse },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <Typography variant="h2" className="">
        Categories
      </Typography>
      {/* CATEGORY BUTTONS */}
      <div className="flex justify-between gap-3 mt-4">
        {categories.map((cat) => {
          const Icon = cat.icon;

          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex items-center gap-1 px-3 py-1 rounded transition
          ${
            selectedCategory === cat.name
              ? "bg-blue-500 text-white"
              : "text-gray-600 hover:bg-gray-200"
          }`}
            >
              <Icon />
              <span>{cat.name}</span>
            </button>
          );
        })}
      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-4 gap-4 mt-6">
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            type={item.type}
            title={item.title}
            image={item.image}
            price={item.price}
            currency={item.currency}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
