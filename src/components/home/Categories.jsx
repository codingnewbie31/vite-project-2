import React, { useState } from "react";
import { products } from "../../assets/constants/constant";
import { FaComputer } from "react-icons/fa6";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsPc } from "react-icons/bs";
import { FaLaptop, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
import { LuPcCase, LuCpu } from "react-icons/lu";
import ProductCard from "../common/ProductCard";

const Categories = () => {
  const categories = [
    { name: "All", icon: FaComputer },
    { name: "Desktop", icon: HiOutlineDesktopComputer },
    { name: "Laptop", icon: FaLaptop },
    { name: "Custom PCs", icon: BsPc },
    { name: "CPU", icon: LuCpu },
    { name: "Accessories", icon: LuMouse },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="px-20 py-6">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-semibold text-gray-900">Categories</h3>
        {/* Pagination buttons*/}
        <div className="flex gap-2">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-500 hover:bg-gray-100">
            <FaChevronLeft className="text-xs" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-[#2196F3] rounded text-white hover:bg-blue-600">
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>

      {/* Category Filter Buttons */}
      <div className="flex gap-1 mb-6 w-full">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded border text-sm font-medium transition
                ${selectedCategory === cat.name
                  ? "bg-[#2196F3] text-white border-[#2196F3]"
                  : "bg-white text-gray-700 border-gray-300 hover:border-[#2196F3] hover:text-[#2196F3]"
                }`}
            >
              <Icon />
              {cat.name}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.slice(0, 8).map((item) => (
          <ProductCard
            key={item.id}
            type={item.type}
            title={item.title}
            image={item.image}
            price={item.price}
            currency={item.currency}
            rating={item.rating}
          />
        ))}
      </div>

    </div>
  );
};

export default Categories;