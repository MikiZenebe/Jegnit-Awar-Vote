import Logo from "../assets/logo.jpg";

export default function Loader() {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
      <img src={Logo} className="rounded-full h-28 w-28" />
    </div>
  );
}
