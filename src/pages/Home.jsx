import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      {" "}
      <div className="relative w-full mb-1 md:mb-[5.3rem]  font-[sans-serif] ">
        <div className="absolute inset-0">
          <img
            src="https://framerusercontent.com/images/cOftoM665vb1meUfDnmoINSi2Q.jpg"
            alt="Background Image"
            className="w-full h-[80vh] md:h-auto object-cover "
          />
        </div>

        <div className="relative max-w-screen-xl mx-auto z-10 text-center text-white flex flex-col justify-center items-center">
          <div className="md:mt-[18rem] mt-[8rem]">
            <h1 className="text-2xl flex flex-col gap-4 md:text-5xl font-extrabold  mb-6 ">
              ወደ ሽልማት ምርጫ ድህረገጻችን{" "}
              <span className="text-[#FFB001]">እንኳን በሰላም መጡ!</span>
            </h1>
            <p className="text-sm md:text-xl mb-12 max-w-5xl mx-auto">
              ይህ ጀግኒት የሴቶች ማበረታቻ ሽልማት እኛን የሚያበረቱ ሴቶችን ለማክበር የተሰናዳ ልዩ መሰናዶ ነው።
              እነኚህ ሴቶች እንቅፋቶችን በጽናት ያለፉ፣ በማህበረሰባችን ዘንድ ዘላቁ ለውጥን ያደረጉ እንዲሁም ትልቅ
              ህልምን ሰንቀው በመጓዝ በህይወታቸው ውጤት በማምጣታቸው አርአያ መሆን እንደሚቻል ያሳዩን ድንቅ ምሳሌ
              ናቸው። ይህ የሽልማት መርሃግብር፤ በውጤታቸው እና ታሪካቸው ላይ ተመስርተን ለሁላችንም ጥንካሬ እና
              ብርታትን ከቁርጠኝነት ጋር ያጎናጽፉናል። ለዚህም ተግባራቸው እና ምግባራቸው እናመሰግናለን የምንልበት
              መንገዳችንን እነሆ ጀግኒት ብለን ሰንቀናል። እነኚህን ድንቅ እና ጀግና ሴቶች በመምረጥ የበኩሎን ያላሰለሰ
              አስተዋጽኦ ስላደረጉ እናመሰግናለን።
            </p>
            <button
              type="button"
              className="bg-[#FFB001] font-medium hover:bg-[#9b7628] text-black text-base tracking-wide px-8 py-2 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
              <Link to="/vote">ይምረጡ</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl my-[10rem]">
        <div className="w-full h-64 lg:w-1/2 lg:h-auto">
          <img
            className="h-full w-full object-cover"
            src={"HeroImg"}
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
      </div> */}
    </div>
  );
}
