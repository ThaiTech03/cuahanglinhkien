import { useParams } from "react-router-dom";
import { useState } from "react";
import products from "../data/promoProducts";

import HeaderSearchMobile from "../components/HeaderSearchMobile ";
import CategoryMobile from "../components/CategoryMobile";
import FooterMobile from "../components/FooterMobile";

import useProductSearch from "../hooks/useProductSearch";

export default function CategoryPage() {
  const { category, subcategory } = useParams();
  const [openCategory, setOpenCategory] = useState(false);

  // ✅ LẤY TẤT CẢ LOGIC TỪ HOOK
  const {
    keyword,
    setKeyword,
    sortType,
    setSortType,
    suggestions,
    getProducts,
  } = useProductSearch(products);

  // ✅ LẤY DANH SÁCH SẢN PHẨM
  const productList = getProducts({ category, subcategory });

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* HEADER */}
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
      <div className="px-3 py-2 text-xs text-gray-600 bg-white border-b">
        <span className="mr-1">🏠</span>
        <a href="/">Trang chủ /</a>
        <span className="font-medium">{category}</span>
        {subcategory && (
          <span className="font-medium"> / {subcategory}</span>
        )}
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        {/* TITLE */}
        <div className="px-3 py-3 bg-white flex">
          <h1 className="text-base uppercase text-black">
            {subcategory || category}
          </h1>
          <div className="text-xs text-gray-500 mt-1 ml-2.5">
            {productList.length} sản phẩm
          </div>
        </div>

        {/* SORT */}
        <div className="flex justify-end px-3 py-2 bg-white text-sm">
          <span className="text-gray-600 mr-2 mt-1">
            Sắp xếp:
          </span>

          <select
            className="border text-sm px-2 py-1 rounded"
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="default">Mặc định</option>
            <option value="price-asc">Giá tăng dần</option>
            <option value="price-desc">Giá giảm dần</option>
          </select>
        </div>

        {/* PRODUCT GRID */}
        <div className="grid grid-cols-2 gap-3 p-3">
          {productList.length === 0 ? (
            <div className="col-span-2 text-center text-sm text-gray-500 py-10">
              Không có sản phẩm
            </div>
          ) : (
            productList.map((p) => (
              <div
                key={p.id}
                className="bg-white border rounded shadow-sm p-2"
              >
                <div className="h-28 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full object-contain"
                  />
                </div>

                <div className="text-xs mt-2 line-clamp-2 min-h-[32px]">
                  {p.name}
                </div>

                <div className="text-red-600 font-bold text-sm mt-1">
                  {p.price.toLocaleString()} VND
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* FOOTER */}
      <FooterMobile />
    </div>
  );
}
