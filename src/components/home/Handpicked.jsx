import React from "react";
import { products } from "../../assets/constants/constant";
import Typography from "../common/Typography";
import StarRating from "../common/StarRating";

const Handpicked = () => {
  const desktop = products.find((p) => p.category === "Desktop");
  const others = products.filter((p) => p.category !== "Desktop" && p.category !== "Tablet").slice(0, 5);

  const topTwo = others.slice(0, 2);
  const bottomThree = others.slice(2, 5);

  return (
    <div>
      <Typography variant="h3" className="text-center font-semibold">
        Handpicked by our techies
      </Typography>

      <div className="flex justify-center gap-6 mt-10">
        {/* Left side */}
        <div className="bg-[#F8F8F8] p-10 w-[500px] relative">
          <img
            src={desktop.image} alt={desktop.title}
            className="h-[300px] object-contain mx-auto"
          />
          <Typography variant="small">{desktop.category}</Typography>
          <Typography variant="h6">{desktop.title}</Typography>
          <StarRating value={5} />
          <Typography
            variant="h3"
            className="text-[#2196F3] font-semibold absolute top-4 left-4"
          >
            {desktop.currency} {desktop.price}
          </Typography>
        </div>

        {/* Right side */}
        <div className="flex flex-col gap-4">
          {/* Top two - bigger cards */}
          <div className="grid grid-cols-2 gap-4">
            {topTwo.map((product) => (
              <div
                key={product.id}
                className="bg-[#F8F8F8] p-4 w-[240px] relative rounded-md hover:shadow-md transition"
              >
                <Typography
                  variant="h6"
                  className="text-[#2196F3] font-semibold mt-1"
                >{`${product.currency} ${product.price}`}</Typography>
                <img
                  src={product.image} alt={product.title}
                  className="h-[130px] object-contain mx-auto"
                />
                <Typography variant="small">{product.category}</Typography>
                <Typography variant="h6">{product.title}</Typography>
                <StarRating value={4} />
              </div>
            ))}
          </div>

          {/* Bottom three - smaller cards */}
          <div className="grid grid-cols-3 gap-4">
            {bottomThree.map((product) => (
              <div
                key={product.id}
                className="bg-[#F8F8F8] p-4 w-[152px] relative rounded-md hover:shadow-md transition"
              >
                <Typography
                  variant="h6"
                  className="text-[#2196F3] font-semibold mt-1"
                >{`${product.currency} ${product.price}`}</Typography>
                <img
                  src={product.image} alt={product.title}
                  className="h-[80px] object-contain mx-auto"
                />
                <Typography variant="small">{product.category}</Typography>
                <Typography variant="h6">{product.title}</Typography>
                <StarRating value={4} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Handpicked;