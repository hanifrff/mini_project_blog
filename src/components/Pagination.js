import React from "react";
import { Pagination as FBP } from "flowbite-react";

const Pagination = ({ onPageChange, currentPage, totalPages }) => {
  return (
    <div className="flex items-center justify-center text-center">
      <FBP
        currentPage={currentPage}
        layout="pagination"
        onPageChange={onPageChange}
        showIcons={true}
        totalPages={totalPages}
        previousLabel="Go back"
        nextLabel="Go forward"
      />
    </div>
  );
};

export default Pagination;
