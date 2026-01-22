import { Menu, ShoppingCart, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function HeaderSearchMobile({
  onOpenCategory,
  searchKeyword,
  onSearchChange,
  suggestions = [],
}) {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-50 bg-white border-b">
      {/* HEADER */}
      <div className="flex items-center justify-between px-3 py-2">
        <button onClick={onOpenCategory}>
          <Menu size={24} />
        </button>

        <a href="/">
          <img src={logo} alt="DTTC" className="h-8" />
        </a>

        <div className="flex gap-3">
          <ShoppingCart size={22} />
          <User size={22} />
        </div>
      </div>

      {/* SEARCH */}
      <div className="px-3 pb-2 relative">
        <div className="flex">
          <input
            value={searchKeyword}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Nhập từ khóa cần tìm kiếm..."
            className="flex-1 border border-blue-500 px-3 py-2 text-sm"
          />
          <button className="bg-blue-600 text-white px-4">
            <Search size={16} />
          </button>
        </div>

        {/* POPUP GỢI Ý */}
        {suggestions.length > 0 && (
          <div className="absolute left-3 right-3 top-full bg-white border shadow-md z-50">
            {suggestions.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  navigate(`/product/${p.id}`);
                  onSearchChange("");
                }}
                className="flex gap-2 p-2 hover:bg-gray-100 cursor-pointer"
              >
                <img
                  src={p.image}
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <div className="text-sm line-clamp-1">
                    {p.name}
                  </div>
                  <div className="text-xs text-red-600">
                    {p.price.toLocaleString()} đ
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs mt-1 text-gray-600">
          Từ khóa: <i>Tụ điện, Điện trở, IGBT...</i>
        </p>
      </div>
    </div>
  );
}
