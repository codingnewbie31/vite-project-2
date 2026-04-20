import Typography from "./Typography";
import StarRating from "./StarRating";

const ProductCard = ({ title, category, image, price, currency, type }) => {
  return (
    <div className="border p-3 rounded-lg shadow-sm">
      <img
        src={image}
        alt={title}
        className="h-[100px] object-contain mx-auto"
      />
      <Typography variant="small">{category}</Typography>
      <Typography variant="small">{type}</Typography>
      <Typography variant="h6">{title}</Typography>

      <StarRating value={4} />
        
      <Typography variant="h6" className="text-[#2196F3] font-semibold mt-1">
        {currency}
        {price}
      </Typography>
      
    </div>
  );
};

export default ProductCard;
