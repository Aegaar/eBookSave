import { Upload, FolderOpenDot } from "lucide-react";
import Image from "next/image";
import SideBarItem from "../_components/SideBarItem";
function SideBar() {
  const navbarItem = [
    {
      id: 1,
      name: "Upload",
      icon: Upload,
      path: "/upload",
    },
    {
      id: 3,
      name: "Files",
      icon: FolderOpenDot,
      path: "/files",
    },
  ];

  return (
    <div>
      <div className="p-5 border-b">
        <Image src="/logo.svg" width={100} height={100} />
      </div>
      <div className="flex flex-col float-left w-full">
        {navbarItem.map((item) => (
        //   <SideBarItem item={item}/>
        <button className="flex gap-2 p-4 px-6 hover:bg-gray-100  text-gray-500">
        <item.icon />
        <h2>{item.name}</h2>
      </button>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
