import React from "react";
import { products } from "../../assets/constants/constant";
import Typography from "../common/Typography";
import StarRating from "../common/StarRating";

const RelatedProducts = () => {
  return (
    <div className="px-8 py-10">

      {/* Title */}
      <Typography variant="h5" className="text-center font-bold text-gray-900 mb-8">
        Related products
      </Typography>

      {/* 4 Column Grid */}
      <div className="grid grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="bg-[#F8F8F8] rounded-[5px] p-4 flex flex-col"
          >
            <div className="flex items-center justify-center h-[160px]">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-contain"
              />
            </div>

            <div className="mt-3 flex flex-col gap-1">
              <Typography variant="small" className="text-gray-400">{product.type}</Typography>
              <Typography variant="h6" className="text-gray-900">Product Name</Typography>
              <StarRating value={product.rating} />
              <Typography variant="p" className="text-[#2196F3] font-semibold">
                {product.currency}{product.price}
              </Typography>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default RelatedProducts;