import { useNavigate } from "react-router-dom";

export function ProductCardMobile({ product }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="
        border bg-white cursor-pointer active:scale-95
        flex flex-col
        h-[210px]
        p-2
      "
    >
      {/* IMAGE */}
      <div className="h-28 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      {/* NAME */}
      <div
        className="
          text-xs mt-5 line-clamp-2
          min-h-[32px] font-bold
        "
      >
        {product.name}
      </div>

      {/* PRICE – luôn nằm đáy */}
      <div className="text-red-600 font-bold text-sm mt-auto">
        {product.price.toLocaleString()} VND
      </div>
    </div>
  );
}
 //San Pham Sale
export function ProductSliderMobile({ products }) {
  // nhân đôi để tạo infinite loop
  const loopProducts = [...products, ...products];

  return (
    <div className="overflow-hidden px-2 py-4">
      <div className="flex gap-3 animate-scroll-x hover:[animation-play-state:paused">
        {loopProducts.map((p, index) => (
          <div
            key={`${p.id}-${index}`}
            className="min-w-[160px]"
          >
            <ProductCardMobile product={p} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductGridMobile({ products }) {
  return (
    <div className="grid grid-cols-2 gap-3 px-2 py-4">
      {products.map((p) => (
        <ProductCardMobile key={p.id} product={p} />
      ))}
    </div>
  );
}
