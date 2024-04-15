"use client";

import { Upload, FolderOpenDot } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
function SideBar() {
  const [activeItem, setActiveItem] = useState(0);

  function activeItemHandler(id) {
    setActiveItem(id);
    console.log(activeItem);
  }

  const navbarItem = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 2,
      name: "Files",
      icon: FolderOpenDot,
      path: "/files",
    },
  ];

  return (
    <div className="shadow-sm border-r h-full">
      <div className="p-4 border-b">
        <Image src="/logo.svg" width={60} height={60} alt='logo'/>
      </div>
      <div className="flex flex-col float-left w-full">
        {navbarItem.map((item) => (
          <button key={item.id}
            className={`flex gap-2 p-4 px-6 hover:bg-gray-100 w-full text-gray-500 ${
              activeItem == item.id ? "bg-blue-50 text-primary" : null
            }`}
            onClick={() => activeItemHandler(item.id)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
