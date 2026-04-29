import React, { useState } from "react";
import { products, categories } from "../assets/constants/constant";
import ComputerAccessories from "../assets/Images/Home/ComputerAccessories.png";
import StarRating from "../components/common/StarRating";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Pagination from "../components/common/Pagination";

// at the bottom of your product grid
<Pagination totalPages={5} />

const newBadgeIds = [1, 3, 5, 7];

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Banner Image */}
      <div className="p-6">
        <img
          src={ComputerAccessories}
          alt="Computer Accessories"
          className="h-[276px] w-full object-cover mx-auto rounded"
        />
      </div>

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 px-14 mb-6">
        <span className="text-[#2196F3] cursor-pointer">Home</span>
        <span>/</span>
        <span className="text-[#2196F3] cursor-pointer">Laptops</span>
        <span>/</span>
        <span className="text-gray-700">HP EliteBook 840 G6</span>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 px-14">
        {/* Left Sidebar */}
        <div className="w-[240px] shrink-0 flex flex-col gap-6">
          {/* All Categories */}
          <div className="bg-[#F8F8F8] rounded-[5px] p-5">
            <h4 className="text-sm font-bold text-gray-900 mb-4">
              All Categories
            </h4>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setSelectedCategory(selectedCategory === cat.name ? "All" : cat.name)}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      defaultChecked={selectedCategory === cat.name}
                      className="accent-[#2196F3]"
                    />
                    <span
                      className={`text-sm ${selectedCategory === cat.name ? "text-[#2196F3] font-semibold" : "text-gray-700"}`}
                    >
                      {cat.name}
                    </span>
                  </div>
                  <span
                    className={`text-sm ${selectedCategory === cat.name ? "text-[#2196F3] font-semibold" : "text-gray-400"}`}
                  >
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Prices */}
          <div className="bg-[#F8F8F8] rounded-[5px] p-5">
            <h4 className="text-sm font-bold text-gray-900 mb-4">PRICES</h4>
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Ranger:</span>
              <span>$599 - $999</span>
            </div>
            <input
              type="range"
              min={0}
              max={1000}
              className="w-full accent-[#2196F3]"
            />
          </div>

          {/* Brand */}
          <div className="bg-[#F8F8F8] rounded-[5px] p-5">
            <h4 className="text-sm font-bold text-gray-900">BRAND</h4>
            <div className="flex flex-col gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => setSelectedCategory(cat.name)}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm ${selectedCategory === cat.name ? "text-[#2196F3] font-semibold" : "text-gray-700"}`}
                    >
                      {cat.name}
                    </span>
                  </div>
                  <span
                    className={`text-sm ${selectedCategory === cat.name ? "text-[#2196F3] font-semibold" : "text-gray-400"}`}
                  >
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1">
          {/* Sort Bar */}
          <div className="flex items-center justify-between bg-[#F8F8F8] rounded-[5px] px-5 py-3 mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-semibold text-gray-900">
                {filteredProducts.length}
              </span>
              <span>Items</span>
              <span className="ml-4 text-gray-400">Sort By</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none bg-white">
                <option>Name</option>
                <option>Price</option>
                <option>Rating</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Show</span>
              <select className="border border-gray-300 rounded px-2 py-1 text-sm outline-none bg-white">
                <option>12</option>
                <option>24</option>
                <option>48</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative rounded-[5px] p-4 flex flex-col transition-colors duration-200
                  ${hoveredId === product.id ? "bg-[#E3F2FD]" : "bg-[#F8F8F8]"}`}
              >
                {/* New Badge */}
                {newBadgeIds.includes(product.id) && (
                  <span className="absolute top-3 left-3 bg-[#2196F3] text-white text-xs font-semibold px-2 py-[2px] rounded-full z-10">
                    New
                  </span>
                )}

                {/* Hover Icons */}
                {hoveredId === product.id && (
                  <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
                    <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                      <FaHeart className="text-xs text-gray-400" />
                    </button>
                    <button className="w-7 h-7 bg-white rounded-full flex items-center justify-center shadow">
                      <FaShoppingCart className="text-xs text-gray-400" />
                    </button>
                  </div>
                )}

                {/* Image */}
                <div className="flex items-center justify-center h-[160px]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="mt-3 flex flex-col gap-1">
                  <p className="text-xs text-gray-400">{product.type}</p>
                  <p className="text-sm font-bold text-gray-900">
                    {product.title}
                  </p>
                  <StarRating value={product.rating} />
                  <p className="text-[#2196F3] font-semibold text-sm">
                    {product.currency}
                    {product.price}
                  </p>
                </div>
                
              </div>
            ))}
          </div>

          <Pagination totalPages={5} />


        </div>
      </div>
    </div>
  );
};

export default Store;
