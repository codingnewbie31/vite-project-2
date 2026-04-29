import React from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaFacebook, FaTwitter } from "react-icons/fa";
import { products } from "../../assets/constants/constant";
import StarRating from "../common/StarRating";
import Typography from "../common/Typography";

const ProductHero = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-8 py-4 border-b border-gray-100">
        <Link to="/" className="text-[#2196F3]">
          <Typography variant="small">Home</Typography>
        </Link>
        <Typography variant="small">/</Typography>
        <Link to="/store" className="text-[#2196F3]">
          <Typography variant="small">Laptops</Typography>
        </Link>
        <Typography variant="small">/</Typography>
        <Typography variant="small" className="text-gray-700">
          HP EliteBook 840 G6
        </Typography>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto flex gap-10 px-6 py-10">
        {/* Left — Images */}
        <div className="flex flex-col gap-4 w-[300px] shrink-0">
          <div className="bg-[#F8F8F8] rounded-[5px] p-6 flex items-center justify-center h-[320px]">
            <img
              src={products[1].image}
              alt="Product"
              className="h-full object-contain"
            />
          </div>
          <div className="flex gap-3">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-[72px] h-[72px] bg-[#F8F8F8] rounded border-2 flex items-center justify-center
            ${i === 2 ? "border-[#2196F3]" : "border-transparent"}`}
              >
                <img
                  src={products[1].image}
                  alt={`thumb-${i}`}
                  className="h-full object-contain p-1"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Middle — Product Info */}
        <div className="flex-1 max-w-[500px]">
          <Typography variant="h3" className="text-gray-900 font-bold mb-2">
            HP EliteBook 840 G6
          </Typography>

          <div className="flex items-center gap-1 mb-4">
            <StarRating value={4.5} />
            <Typography variant="small" className="text-gray-400">
              0 reviews
            </Typography>
            <Typography
              variant="small"
              className="text-[#2196F3] cursor-pointer"
            >
              Submit a review
            </Typography>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <Typography variant="h3" className="text-[#2196F3] font-bold">
              $999
            </Typography>
            <Typography variant="p" className="text-gray-400 line-through">
              $899
            </Typography>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-1">
              <Typography
                variant="p"
                className="font-semibold text-gray-700 w-24"
              >
                Availability:
              </Typography>
              <Typography variant="p" className="text-gray-600">
                In stock
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography
                variant="p"
                className="font-semibold text-gray-700 w-24"
              >
                Category:
              </Typography>
              <Typography variant="p" className="text-gray-600">
                Laptop
              </Typography>
            </div>
            <div className="flex gap-1">
              <Typography variant="p" className="font-semibold text-gray-700">
                Free shipping
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button className="px-3 py-2 text-gray-600 text-sm">−</button>
              <Typography variant="p" className="px-4 py-2 font-medium">
                2
              </Typography>
              <button className="px-3 py-2 text-gray-600 text-sm">+</button>
            </div>
            <button className="bg-gray-900 text-white px-8 py-2 rounded text-sm font-semibold">
              Buy Now
            </button>
            <button className="bg-[#2196F3] text-white px-8 py-2 rounded text-sm font-semibold">
              Add To Cart
            </button>
          </div>

          <div className="flex items-center gap-3">
            <Typography variant="p" className="text-gray-600">
              Share it on
            </Typography>
            <FaFacebook className="text-[#2196F3] text-xl cursor-pointer" />
            <FaTwitter className="text-[#2196F3] text-xl cursor-pointer" />
          </div>
        </div>

        {/* Right — Best Selling */}
        <div className="w-[260px] shrink-0">
          <Typography variant="h6" className="text-gray-700 mb-3">
            Best selling
          </Typography>
          <div className="bg-[#F8F8F8] rounded-[5px] p-5 flex flex-col items-center gap-3">
            <img
              src={products[1].image}
              alt="Best Seller"
              className="h-[160px] object-contain"
            />
            <Typography variant="h6" className="text-gray-900">
              Product Name
            </Typography>
            <StarRating value={4.5} />
            <div className="flex items-center gap-2">
              <Typography variant="p" className="text-[#2196F3] font-semibold">
                $499
              </Typography>
              <Typography
                variant="small"
                className="text-gray-400 line-through"
              >
                $399
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductHero;
