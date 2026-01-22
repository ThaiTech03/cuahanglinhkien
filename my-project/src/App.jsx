import { Routes, Route } from "react-router-dom";
import HomeMobile from "./pages/HomeMobile";
import ProductDetailMobile from "./pages/ProductDetailMobile";
import CategoryPage from "./pages/CategoryPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeMobile />} />
      <Route path="/product/:id" element={<ProductDetailMobile />} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/category/:category/:subcategory" element={<CategoryPage />} />


    </Routes>
  );
}
