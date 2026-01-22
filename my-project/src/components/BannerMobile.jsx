import banner from "../assets/banner.jpg";
export default function BannerMobile() {
  return (
    <div className="px-2">
      <img
        src={banner}
        alt="Banner"
        className="w-full"
      />
    </div>
  );
}
