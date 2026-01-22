export default function ProductCard({ product }) {
  return (
    <div className="border p-3 bg-white hover:shadow transition">
      <div className="h-36 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="max-h-full object-contain"
        />
      </div>

      <h3 className="text-sm mt-2 line-clamp-2 min-h-[40px]">
        {product.name}
      </h3>

      <p className="text-red-600 font-bold mt-1">
        {product.price.toLocaleString()} VND
      </p>
    </div>
  );
}

