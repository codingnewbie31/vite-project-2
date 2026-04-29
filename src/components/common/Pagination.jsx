import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="flex items-center justify-center gap-2 py-6">

      {/* Left Arrow */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
        className="text-[#2196F3] hover:text-blue-700"
      >
        <FaChevronLeft />
      </button>

      {/* Page Numbers */}
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition
              ${currentPage === page
                ? "bg-[#E3F2FD] text-[#2196F3] font-bold"
                : "text-gray-500 hover:text-[#2196F3]"
              }`}
          >
            {page}
          </button>
        );
      })}

      {/* Right Arrow */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
        className="text-[#2196F3] hover:text-blue-700"
      >
        <FaChevronRight />
      </button>

    </div>
  );
};

export default Pagination;