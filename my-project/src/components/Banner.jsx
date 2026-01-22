export default function Banner() {
  return (
    <div className="relative bg-white border p-4">
      <img
        src="/banner.png"
        alt="Banner"
        className="w-full h-[320px] object-contain"
      />

      <div className="absolute top-8 right-10 text-red-600 text-sm italic max-w-xs">
        <h2 className="text-2xl font-bold text-red-700 mb-2">
          DTTC Linh Kiện Thành Công
        </h2>
        <p>Cung cấp linh kiện, phụ kiện điện tử</p>
        <p>Thiết bị, dụng cụ đo</p>
        <p>Thiết kế mạch theo yêu cầu</p>
        <p>Gia công mạch in chất lượng cao</p>
      </div>
    </div>
  );
}

