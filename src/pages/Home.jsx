import Banner from "../assets/baner.jpg";

export default function Home() {
  return (
    <div class="relative bg-gradient-to-r from-yellow-900 to-yellow-800 py-16 font-[sans-serif] mt-[5rem]">
      <div class="absolute inset-0">
        <img
          src={Banner}
          alt="Background Image"
          class="w-full h-full object-cover opacity-50"
        />
      </div>

      <div class="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Welcome to Our Award-Voting
        </h1>
        <p class="text-lg md:text-xl mb-12">
          With the help of this platform, you can vote your hero.
        </p>
      </div>
    </div>
  );
}
