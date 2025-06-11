function Home() {
  return (
    <div>
      <div className="flex gap-1 items-center mb-4">
        <p>kubectl create deployment I.T --image=ideas</p>
      </div>

      <div className="flex gap-1 flex-col mb-4 ml-2">
        <div className="flex">
          <p className="w-24 ">* Role:</p>
          <h1>Software Engineer</h1>
        </div>
        <div className="flex ">
          <p className="w-24 ">* Email:</p>
          <p>sabipikinboyz.njaka@gmail.com</p>
        </div>
        <div className="flex">
          <p className="w-24 ">* Author:</p>
          <h1>sabipikin@njaka</h1>
        </div>

        <div className="flex ">
          <p className="w-24 ">* GitHub:</p>
          <a
            href="https://github.com/ngwasidwan"
            target="_blank"
            className="border-b border-blue-500 text-blue-500"
          >
            https://github.com/ngwasidwan
          </a>
        </div>

        <div className="flex ">
          <p className="w-24 ">* LinkedIn:</p>
          <a
            href="https://linkedin.com/ngwasidwan"
            target="_blank"
            className="border-b border-blue-500 text-blue-500"
          >
            https://linkedin.com/in/ngwasidwan
          </a>
        </div>
      </div>
      <p className="mb-1">
        Njaka&apos;s Information as of {new Date().toDateString()}
      </p>
      <p className="mb-2">
        Type &apos;help&apos; to see a list of help commands.
      </p>
      <p className="text-stone-500 font-semibold mb-2">
        N.B: This terminal app functions properly only on desktop clients
      </p>
    </div>
  );
}

export default Home;
