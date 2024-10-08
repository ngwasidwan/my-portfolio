import { useState } from "react";
import Contact from "./Contact";

function Home() {
  const [showContact, setShowContact] = useState(false);

  return (
    <main>
      <Contact setShowContact={setShowContact} showContact={showContact} />
      <div className="grid grid-cols-2 items-center gap-20 max-h-[70vh] relative md:mt-0 mt-20 ">
        <div className="md:static absolute left-10 bottom-[-250px] text-stone-400 z-10 ">
          <h1 className="mb-4 sm:mb-6">
            Hello there! I&apos;m{" "}
            <span className=" uppercase text-3xl font-bold ">sidwan</span>,
          </h1>
          <p className="mb-10 ">
            A frontend web developer passionate about building highly user
            friendly and professional looking web apps
          </p>

          <button
            onClick={() => setShowContact(true)}
            className="font-semibold  px-3 py-1  rounded-lg border-2 hover:bg-stone-800  transition-all hover:opacity-70"
          >
            CONTACT
          </button>
        </div>

        <div className="md:w-4/5 md:h-[88%] rounded-full overflow-hidden w-[8rem] h-[8rem] md:ml-0  ml-10">
          <img
            src="boyz.jpg"
            alt="my image"
            className="  grayscale  opacity-50"
          />
        </div>
      </div>
    </main>
  );
}

export default Home;
