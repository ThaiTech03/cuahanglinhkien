import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const categories = [
    { name: "COMBO LINH KIỆN", slug: "combo-linh-kien" },
    { name: "IC CHỨC NĂNG", slug: "ic-chuc-nang" },
    { name: "ĐIỆN TRỞ", slug: "dien-tro" },
    { name: "TỤ ĐIỆN", slug: "tu-dien" },
    { name: "DIODE", slug: "diode" },
    { name: "LED", slug: "led" },
    { name: "THẠCH ANH", slug: "thach-anh" },
    { name: "SÒ THÁO MÁY", slug: "so-thao-may" },
    { name: "MOSFET", slug: "mosfet" },
    { name: "TRANSISTOR", slug: "transistor" },
    { name: "THYRISTOR (SCR)", slug: "scr" },
    { name: "IGBT", slug: "igbt" },
    { name: "DIAC - TRIAC", slug: "triac" },
    { name: "CẢM BIẾN", slug: "cam-bien" },
    { name: "TRIẾT ÁP - BIẾN TRỞ", slug: "bien-tro" },
    { name: "CUỘN CẢM - CUỘN LỌC", slug: "cuon-cam" },
    { name: "RELAY", slug: "relay" },
  ];

  return (
    <aside className="w-64 border-r">
      <div className="bg-blue-600 text-white px-4 py-3 font-semibold">
        ☰ DANH MỤC SẢN PHẨM
      </div>

      <ul className="text-sm">
        {categories.map((item, index) => (
          <li
            key={index}
            onClick={() => navigate(`/category/${item.slug}`)}
            className="
              px-4 py-2 cursor-pointer
              hover:bg-gray-100
              flex justify-between
            "
          >
            <span>{index + 1}. {item.name}</span>
            <span>›</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
