import React from "react";

function BackArrow() {
  return (
    <svg
      style={{ width: "2rem", marginRight: ".5rem" }}
      width="24"
      height="24"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.5 12H6M6 12L12 6M6 12L12 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BackArrow;
