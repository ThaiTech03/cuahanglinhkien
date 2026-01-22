export default function PaginationMobile({
  current = 1,
  total = 60,
}) {
  return (
    <div className="flex justify-center gap-1 mt-6 flex-wrap">
      {/* Trang 1 */}
      <PageButton active={current === 1}>1</PageButton>
      <PageButton>2</PageButton>
      <PageButton>3</PageButton>

      {/* Dấu ... */}
      <span className="px-2 text-blue-600">...</span>

      {/* Trang cuối */}
      <PageButton>{total}</PageButton>

      {/* Sau */}
      <PageButton>Sau</PageButton>
    </div>
  );
}

function PageButton({ children, active }) {
  return (
    <button
      className={`
        min-w-[32px] h-[32px] px-2
        border text-sm
        ${
          active
            ? "bg-red-600 text-white border-red-600"
            : "border-blue-500 text-blue-600 hover:bg-blue-50"
        }
      `}
    >
      {children}
    </button>
  );
}
