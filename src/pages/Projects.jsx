function projects() {
  return (
    <div>
      <div className="flex gap-10 flex-col md:flex-row  my-12 grid-cols-1  pb-5">
        <figure>
          <img src="/Screenshot-3.png" alt="projects" />

          <figcaption className="text-lg mt-4 font-semibold">
            City-Tours
          </figcaption>
        </figure>
        <figure>
          <img src="/Screenshot-1.png" alt="projects" />

          <figcaption className="text-lg mt-4 font-semibold">
            Entertainment-App
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default projects;
