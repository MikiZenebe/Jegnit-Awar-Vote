import { Link } from "react-router-dom";
import Banner from "../assets/baner.jpg";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-r from-yellow-900 to-yellow-800 py-16  font-[sans-serif] ">
      <div className="absolute inset-0">
        <img
          src={Banner}
          alt="Background Image"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Welcome to Our Award-Voting
        </h1>
        <p className="text-lg md:text-xl mb-12">
          The Women&apos;s Encouragement Award is all about celebrating women
          who inspire us. These are women who break barriers, make a difference
          in their communities, and show us what’s possible when we dream big
          and work hard. This award shines a light on their achievements and
          stories, reminding us all of the strength and determination it takes
          to create real change. It’s our way of saying “thank you” to the women
          who lead with heart and courage.
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
        >
          <Link to="/vote">Let&apos;s Vote</Link>
        </button>
      </div>
    </div>
  );
}
