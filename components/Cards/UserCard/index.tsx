import React from "react";
import { UserCardProps } from "./index.interface";

const DefaultCard: React.FC<UserCardProps> = ({
  avatarUrl,
  firstName,
  lastName,
}) => {
  //   const Icon = icon;
  return (
    <div className="flex items-center justify-between bg-lightSecondaryBackground dark:bg-darkSecondaryBackground rounded-md m-4 p-2 max-w-sm"></div>
  );
};

export default DefaultCard;
