import { useState } from "react";

import products from "../data/promoProducts";

import HeaderSearchMobile from "../components/HeaderSearchMobile ";
import CategoryMobile from "../components/CategoryMobile";
import BannerMobile from "../components/BannerMobile";
import FooterMobile from "../components/FooterMobile";

import {
  ProductSliderMobile,
  ProductGridMobile,
} from "../components/ProductMobile";

import PaginationMobile from "../components/PaginationMobile";

import useProductSearch from "../hooks/useProductSearch";

export default function HomeMobile() {
  const [openCategory, setOpenCategory] = useState(false);

  // 🔍 SEARCH LOGIC DÙNG CHUNG
  const {
    keyword,
    setKeyword,
    suggestions,
  } = useProductSearch(products);

  return (
    <div className="min-h-screen bg-gray-100">
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

      {/* BANNER */}
      <BannerMobile />

      {/* PROMO PRODUCTS */}
      <h2 className="bg-blue-600 text-white px-4 py-2 mx-2 mt-4 rounded">
        SẢN PHẨM KHUYẾN MÃI
      </h2>

      <ProductSliderMobile products={products.slice(0, 6)} />

      {/* NEW PRODUCTS */}
      <h2 className="bg-blue-600 text-white px-4 py-2 mx-2 mt-4 rounded">
        SẢN PHẨM MỚI
      </h2>

      <ProductGridMobile products={products.slice(6, 14)} />

      {/* PAGINATION */}
      <PaginationMobile current={1} total={products.length} />

      {/* FOOTER */}
      <FooterMobile />
    </div>
  );
}
