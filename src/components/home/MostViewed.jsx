import React, { useState } from "react";
import { products } from "../../assets/constants/constant";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import StarRating from "../common/StarRating";

// for Pagiantion
const MostViewed = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const visibleProducts = products.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  );

  const newBadgeIds = [1, 3, 5, 7];

  return (
    <div className="px-20 py-6">

      {/* Header Row */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Most Viewed Products</h3>

        <div className="flex gap-2">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-gray-500 hover:bg-gray-100"
          >
            <FaChevronLeft className="text-xs" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
            className="w-8 h-8 flex items-center justify-center bg-[#2196F3] rounded text-white hover:bg-blue-600"
          >
            <FaChevronRight className="text-xs" />
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-4 gap-4">
        {visibleProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-[#F8F8F8] rounded-[5px] p-4 flex flex-col"
          >
            {/* New Badge */}
            {newBadgeIds.includes(product.id) && (
              <span className="absolute top-3 left-3 bg-[#2196F3] text-white text-xs font-semibold px-2 py-[2px] rounded-full z-10">
                New
              </span>
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
              <p className="text-sm font-bold text-gray-900">{product.title}</p>
              <StarRating value={product.rating} />
              <p className="text-[#2196F3] font-semibold text-sm">
                {product.currency}{product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MostViewed;