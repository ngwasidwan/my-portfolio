import { BiPlay } from "react-icons/bi";

function projects() {
  return (
    <div className="grid md:grid-cols-2 md:gap-10 gap-20 flex-col md:flex-row  my-12 grid-cols-1  pb-5 text-stone-100">
      <div className="z-10">
        <img src="img-4.png" alt="projects" />

        <h1 className="text-lg mt-4 font-semibold mb-4">
          Queen Mother&apos;s Cuisine
        </h1>
        <button className="flex items-center gap-2  px-2 py-1 rounded-md text-sm  cursor-pointer bg-none bg-stone-800 hover:bg-stone-900 border hover:border-stone-100 border-stone-600 transition-all">
          <span>Demo</span>
          <BiPlay />
        </button>
      </div>
      <figure>
        <img src="img-1.png" alt="projects" />

        <figcaption className="text-lg mt-4 font-semibold">
          City Tours
        </figcaption>
      </figure>
      <figure>
        <img src="img-2.png" alt="projects" />

        <figcaption className="text-lg mt-4 font-semibold">
          Entertainment App
        </figcaption>
      </figure>
      <figure>
        <img src="img-3.png" alt="projects" />

        <figcaption className="text-lg mt-4 font-semibold">
          Frontend Quiz
        </figcaption>
      </figure>
    </div>
  );
}

export default projects;
