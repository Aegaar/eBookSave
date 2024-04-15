import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";

function Header() {
  return (
    <header className="flex p-6 border-b items-center justify-between md:justify-end">
      <Menu className="md:hidden" />
      <Image src="/logo.svg" width={60} height={60} className="md:hidden" />
      <UserButton />
    </header>
  );
}

export default Header;
