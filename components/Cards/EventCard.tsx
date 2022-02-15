import React from "react";

const EventCard = () => {
  return (
    <div
      onClick={() => alert("User press plan card")}
      className="w-32 h-20 bg-red-200 m-2"
    ></div>
  );
};

export default EventCard;
