import React from "react";
import { ModalProps } from "./Modal.Interface";

import { icon } from "../../shared/icons";
import Overlay from "../Overlay";

const { IoClose } = icon;

export const Modal: React.FC<ModalProps> = ({ onClickClose, children }) => (
  <div className="absolute inset-0 w-full h-full flex justify-center items-center">
    <Overlay onClick={onClickClose} />
    <div className="relative z-50 backgroundColor rounded-lg dark:shadow-darkMDAllSides shadow-lightMDAllSides p-4">
      <button onClick={onClickClose} className="absolute right-2 top-2">
        <IoClose size={20} className="text-gray-300 hover:text-turquoise" />
      </button>
      {children}
    </div>
  </div>
);
