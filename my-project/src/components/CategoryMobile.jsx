import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "IC CHỨC NĂNG",
    children: [
      "IC nguồn",
      "Vi điều khiển",
      "IC công suất",
      "IC họ 74xx",
      "IC họ 40xx",
      "OP-AMP",
      "OPTO - PHOTO QUANG",
      "IC AUDIO",
      "IC TRUYỀN THÔNG",
      "IC TẠO DAO ĐỘNG",
      "IC THỜI GIAN THỰC",
      "IC MEMORY",
      "IC CHỨC NĂNG KHÁC",
    ],
  },
  { name: "ĐIỆN TRỞ" },
  { name: "TỤ ĐIỆN" },
  { name: "DIODE" },
  { name: "LED" },
];

export default function CategoryMobile({ open, onClose }) {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  // 👉 hàm tạo slug từ tiếng Việt
  const toSlug = (text) =>
    text
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />

      {/* Drawer */}
      <aside className="fixed top-0 left-0 w-[260px] h-full bg-white z-50 overflow-y-auto">
        {/* Header */}
        <div className="bg-blue-600 text-white px-4 py-3 flex justify-between">
          <span>DANH MỤC SẢN PHẨM</span>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Category list */}
        <ul className="text-sm divide-y">
          {categories.map((cat, index) => {
            const isOpen = openIndex === index;
            const hasChildren = Array.isArray(cat.children);

            return (
              <li key={index}>
                {/* CATEGORY CẤP 1 */}
                <button
                  onClick={() => {
                    if (hasChildren) {
                      setOpenIndex(isOpen ? null : index);
                    } else {
                      navigate(`/category/${toSlug(cat.name)}`);
                      onClose();
                    }
                  }}
                  className="w-full px-4 py-3 flex justify-between items-center"
                >
                  <span>{cat.name}</span>

                  {hasChildren &&
                    (isOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    ))}
                </button>

                {/* CATEGORY CẤP 2 */}
                {isOpen && hasChildren && (
                  <ul className="bg-gray-50">
                    {cat.children.map((child, i) => (
                      <li
                        key={i}
                        onClick={() => {
                          navigate(
                            `/category/${toSlug(cat.name)}/${toSlug(child)}`,
                          );
                          onClose();
                        }}
                        className="
                          px-6 py-2 text-gray-700
                          hover:bg-gray-100 cursor-pointer
                        "
                      >
                        {child}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
}
