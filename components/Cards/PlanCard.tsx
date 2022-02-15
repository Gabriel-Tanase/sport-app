import React from "react";

const PlanCard = () => {
  return (
    <div
      onClick={() => alert("User press plan card")}
      className="w-20 h-32 bg-red-200 m-2"
    >
      plan card
    </div>
  );
};

export default PlanCard;
