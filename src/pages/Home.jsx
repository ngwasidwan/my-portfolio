import GithubLink from "../components/GithubLink";

function Home() {
  return (
    <main>
      <div className="grid grid-cols-2 items-center gap-20 max-h-[70vh] relative md:mt-0 mt-20 ">
        <div className="md:static absolute left-10 bottom-[-200px] text-stone-400 z-10">
          <h1 className="mb-6 ">
            Hello there! I&apos;m{" "}
            <span className="md:block inline uppercase text-3xl font-bold mt-2">
              sidwan ,
            </span>
          </h1>
          <p className="mb-10">
            A frontend web developer passionate about building highly user{" "}
            <br />
            friendly and professional looking web apps
          </p>
          <GithubLink />
        </div>

        <img
          src="/boyz.jpg"
          alt="my image"
          className="md:w-3/4 md:h-3/4 object-cover grayscale  rounded-full opacity-50 h-[100px] w-[100px] ml-10 md:ml-0"
        />
      </div>
    </main>
  );
}

export default Home;
