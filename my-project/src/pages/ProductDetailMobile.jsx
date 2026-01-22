import { useParams } from "react-router-dom";
import { useState } from "react";

import products from "../data/promoProducts";

import HeaderSearchMobile from "../components/HeaderSearchMobile ";
import CategoryMobile from "../components/CategoryMobile";
import FooterMobile from "../components/FooterMobile";

import useProductSearch from "../hooks/useProductSearch";

export default function ProductDetailMobile() {
  const { id } = useParams();
  const [openCategory, setOpenCategory] = useState(false);

  // 🔍 SEARCH LOGIC (DÙNG CHUNG)
  const {
    keyword,
    setKeyword,
    suggestions,
  } = useProductSearch(products);

  // 📦 PRODUCT DETAIL
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-4">Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* HEADER + SEARCH */}
      <HeaderSearchMobile
        onOpenCategory={() => setOpenCategory(true)}
        searchKeyword={keyword}
        onSearchChange={setKeyword}
        suggestions={suggestions}
      />

      {/* CATEGORY POPUP */}
      <CategoryMobile
        open={openCategory}
        onClose={() => setOpenCategory(false)}
      />

      {/* BREADCRUMB */}
      <div className="px-3 py-2 bg-gray-100 text-sm">
        <a href="/" className="text-blue-600">
          Trang chủ
        </a>{" "}
        / {product.name}
      </div>

      {/* IMAGE */}
      <div className="p-4 bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="w-full max-h-[260px] object-contain"
        />
      </div>

      {/* INFO */}
      <div className="p-4 bg-white space-y-3">
        <h1 className="font-bold text-lg">{product.name}</h1>

        <div className="text-xs text-gray-500">
          Mã SP: <b>{product.sku}</b> | {product.category}
          {product.subcategory && ` / ${product.subcategory}`}
        </div>

        <div className="flex items-center gap-3">
          <span className="text-red-600 text-xl font-bold">
            {product.price.toLocaleString()} đ
          </span>

          {product.oldPrice && (
            <span className="line-through text-gray-400 text-sm">
              {product.oldPrice.toLocaleString()} đ
            </span>
          )}
        </div>

        <div className="text-sm">
          {product.stock > 0 ? (
            <span className="text-green-600">
              ✔ Còn hàng ({product.stock})
            </span>
          ) : (
            <span className="text-red-600">✖ Hết hàng</span>
          )}
          <span className="ml-3 text-gray-500">
            Đã bán: {product.sold}
          </span>
        </div>

        <div className="text-sm">
          Thương hiệu: <b>{product.brand}</b> | Xuất xứ:{" "}
          <b>{product.origin}</b>
        </div>

        <div className="text-sm text-yellow-500">
          ⭐ {product.rating} / 5
        </div>

        {/* QUANTITY */}
        <div className="flex items-center gap-4">
          <span>Số lượng:</span>
          <div className="flex border">
            <button className="px-3">-</button>
            <span className="px-4">1</span>
            <button className="px-3">+</button>
          </div>
        </div>

        {/* ACTIONS */}
        <button className="w-full bg-blue-600 text-white py-3 rounded">
          THÊM VÀO GIỎ
        </button>

        <button className="w-full border border-blue-600 text-blue-600 py-3 rounded">
          MUA NGAY
        </button>
      </div>

      {/* DESCRIPTION */}
      <div className="p-4 bg-white mt-2">
        <h2 className="font-bold mb-2">MÔ TẢ SẢN PHẨM</h2>
        <p className="text-sm leading-relaxed whitespace-pre-line">
          {product.description ||
            "Đang cập nhật mô tả sản phẩm..."}
        </p>
      </div>

      {/* SPECS */}
      {product.specs && (
        <div className="p-4 bg-white mt-2">
          <h2 className="font-bold mb-2">
            THÔNG SỐ KỸ THUẬT
          </h2>
          <ul className="text-sm space-y-1">
            {Object.entries(product.specs).map(
              ([key, value]) => (
                <li key={key}>
                  • {key}: <b>{value}</b>
                </li>
              ),
            )}
          </ul>
        </div>
      )}

      {/* FOOTER */}
      <FooterMobile />
    </div>
  );
}
