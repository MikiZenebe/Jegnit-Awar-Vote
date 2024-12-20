import { Link } from "react-router-dom";
import Banner from "../assets/baner.jpg";
import HeroImg from "../assets/hero.jpg";

export default function Home() {
  return (
    <div>
      {" "}
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
            who inspire us. These are women who break barriers, make a
            difference in their communities, and show us what’s possible when we
            dream big and work hard. This award shines a light on their
            achievements and stories, reminding us all of the strength and
            determination it takes to create real change. It’s our way of saying
            “thank you” to the women who lead with heart and courage.
          </p>
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            <Link to="/vote">Let&apos;s Vote</Link>
          </button>
        </div>
      </div>
      <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl my-[10rem]">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src={HeroImg}
            alt="Winding mountain road"
          />
        </div>

        <div className="max-w-lg bg-[white] md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
          <div className="flex flex-col p-12 md:px-16">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">
              Jegnit Award
            </h2>
            <p className="mt-4 text-[#161106]">
              The Women&apos;s Encouragement Award is all about celebrating
              women who inspire us. These are women who break barriers, make a
              difference in their communities, and show us what’s possible when
              we dream big and work hard. This award shines a light on their
              achievements and stories, reminding us all of the strength and
              determination it takes to create real change. It’s our way of
              saying “thank you” to the women who lead with heart and courage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
