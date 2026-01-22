export default function FooterMobile() {
  return (
    <footer className="bg-blue-700 text-white mt-8 pb-2">
      <div className="px-4 py-6 space-y-3 text-sm">
        <h3 className="font-bold text-base">
          Cửa Hàng Linh Kiện Điện Tử Thành Công
        </h3>

        <p className="italic">
          Chuyên cung cấp, phân phối các sản phẩm linh kiện điện tử
          thiết bị, dụng cụ đo, chất lượng cao, uy tín, hài lòng
        </p>

        <p>📍 Địa chỉ: 142 Giáp Nhị - Hoàng Mai - Hà Nội</p>
        <p>📞 ĐT: 0982692463</p>
        <p>✉ Email: dientuthanhcongvn@gmail.com</p>
      </div>

      {/* Zalo / Chat */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-2 z-50">
        <a
            href="https://zalo.me/0982692463"
            target="_blank"
            rel="noopener noreferrer"
            className="relative
    animate-float animate-pulse-ring
    bg-blue-500 text-white
    px-5 py-2
    rounded-full shadow-lg
    font-semibold
    text-center"
            >
            Zalo
            </a>

       
      </div>
    </footer>
  );
}
