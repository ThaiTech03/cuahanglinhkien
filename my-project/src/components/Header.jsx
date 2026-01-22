import { Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="bg-white border-b">
        <div className="px-4 py-3 flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Menu size={26} />
          </button>

          <img src="/logo.png" alt="DTTC" className="h-10" />
        </div>
      </header>

      {/* SIDEBAR DUY NHẤT */}
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </>
  );
}
