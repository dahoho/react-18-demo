import React from "react";

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick: (member: string) => void;
};

const MemberButton = ({ children, onClick, isActive = false }: Props) => {
  return (
    <button
      className={`bg-gray-600 text-white py-2 px-4 inline-block text-2xl cursor-pointer ${
        isActive ? "bg-green-600" : ""
      }`}
      onClick={() => onClick(`${children}`)}
    >
      {children}
    </button>
  );
};

export default MemberButton;
