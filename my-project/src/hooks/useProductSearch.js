import { useMemo, useState } from "react";

export default function useProductSearch(products) {
  const [keyword, setKeyword] = useState("");
  const [sortType, setSortType] = useState("default");

  // 🔍 search suggestions
  const suggestions = useMemo(() => {
    if (!keyword) return [];

    return products
      .filter((p) =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
      )
      .slice(0, 6);
  }, [keyword, products]);

  // 📦 filter + sort products
  const getProducts = ({ category, subcategory }) => {
    let list = products.filter((p) => {
      if (!p.category) return false;

      if (category && p.category !== category) return false;
      if (subcategory && p.subcategory !== subcategory) return false;

      if (keyword) {
        return p.name
          .toLowerCase()
          .includes(keyword.toLowerCase());
      }

      return true;
    });

    if (sortType === "price-asc") {
      list = [...list].sort((a, b) => a.price - b.price);
    }

    if (sortType === "price-desc") {
      list = [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  };

  return {
    keyword,
    setKeyword,
    sortType,
    setSortType,
    suggestions,
    getProducts,
  };
}
