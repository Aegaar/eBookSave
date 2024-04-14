import React from "react";

function SideBarItem({ item }) {
  return (
    <button className="flex gap-2 p-4 px-0 hover:bg-gray-100 w-full text-gray-500">
      <item.icon />
      <h2>{item.name}</h2>
    </button>
  );
}

export default SideBarItem;
