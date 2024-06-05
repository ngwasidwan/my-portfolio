function projects() {
  return (
    <div>
      <div className="grid md:grid-cols-2 md:gap-10 gap-20 flex-col md:flex-row  my-12 grid-cols-1  pb-5">
        <figure>
          <img src="/Screenshot-3.png" alt="projects" />

          <figcaption className="text-lg mt-4 font-semibold">
            CityTours
          </figcaption>
        </figure>
        <figure>
          <img src="/Screenshot-1.png" alt="projects" />

          <figcaption className="text-lg mt-4 font-semibold">
            EntertainmentApp
          </figcaption>
        </figure>
        <figure>
          <img src="/Screenshot-2.png" alt="projects" />

          <figcaption className="text-lg mt-4 font-semibold">
            Frontend Quiz
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default projects;
