import React from "react";
import { SectionDividerProps } from "./index.interface";
import { icon } from "../../shared/icons";

const { MdOutlineModeEditOutline } = icon;

const SectionDivider: React.FC<SectionDividerProps> = ({
  sectionName,
  onClickEditButton,
  displayEditButton = false,
}) => {
  return (
    <div className="w-full flex items-end pl-2px mb-1 mt-2">
      <span className="whitespace-nowrap text-xxxs text-disabled dark:text-darkDisabled leading-[5px] font-germania tracking-wider">
        {sectionName}
      </span>
      <span className="relative block w-full border-t border-disabled dark:border-darkDisabled ml-[2px]">
        {displayEditButton && (
          <button
            onClick={onClickEditButton}
            className="absolute backgroundColor right-3 -bottom-2.5 shadow-md rounded-full p-1 transition-all hover:scale-105 text-black dark:text-white border border-disabled dark:border-darkDisabled"
          >
            <MdOutlineModeEditOutline size={14} />
          </button>
        )}
      </span>
    </div>
  );
};

export default SectionDivider;
