function Images({ src, title, link = "" }) {
  return (
    <div>
      <img src={src} alt="project images" />
      <h1 className="text-base mt-4">{title}</h1>
      {link ? (
        <a
          target="_black"
          href={link}
          className="text-sm hover:underline tracking-wide text-blue-400"
        >
          visit app
        </a>
      ) : null}
    </div>
  );
}

export default Images;
