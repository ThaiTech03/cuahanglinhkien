import Sidebar from "../components/Sidebar";
import Banner from "../components/Banner";
import PromoSection from "../components/PromoSection";

export default function Home() {
  return (
    <div
      className="
        max-w-[1300px] mx-auto mt-4
        px-2 md:px-0
        md:ml-[260px]
      "
    >
      <div className="space-y-8">
        <Banner />
        <PromoSection title="SẢN PHẨM KHUYẾN MÃI" />
        <PromoSection title="SẢN PHẨM MỚI" />
      </div>
    </div>
  );
}



