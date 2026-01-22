import { Search } from "lucide-react";

export default function SearchMobile() {
  return (
    <div className="px-3 py-2">
      <div className="flex">
        <input
          placeholder="Nhập từ khóa cần tìm kiếm..."
          className="flex-1 border border-blue-500 px-3 py-2 text-sm"
        />
        <button className="bg-blue-600 text-white px-4">
          <Search size={16} />
        </button>
      </div>

      <p className="text-xs mt-1 text-gray-600">
        Từ khóa: <i>Tụ điện, Điện trở, IGBT...</i>
      </p>
    </div>
  );
}
