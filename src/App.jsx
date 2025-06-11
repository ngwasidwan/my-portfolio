import Home from "./components/Home";
import User from "./components/User";
import Help from "./components/Help";
import NotFound from "./components/NotFound";
import { useAppContext } from "./lib/ContextApi";
import PrevCmd from "./components/PrevCmd";

function App() {
  const { cmdArr, folderInfo, fileData } = useAppContext();

  return (
    <main className="text-white font-mono text-sm tracking-wide flex flex-col ">
      {cmdArr.map((cmdObj, i) => {
        const { command: commandStr, pathFound, id } = cmdObj;

        const [command, ...others] = commandStr.split(" ");
        const path = others.join(" ");

        const { files, folders, found } = folderInfo.at(i);

        if (command === "clear") return null;

        if (command === "home") {
          if (id === 0) return <Home key={id} />;
          return (
            <div key={id} className="mb-2">
              <PrevCmd command={commandStr} id={id} />
              <Home />
            </div>
          );
        }

        if (command === "help")
          return (
            <div key={i} className="mb-2">
              <PrevCmd command={commandStr} id={id} />
              <Help />
            </div>
          );

        if (command === "cd")
          return (
            <div key={i}>
              <PrevCmd command={commandStr} id={id} />

              {pathFound ? null : !path || path === "." ? null : !pathFound &&
                path.includes(".") ? (
                <p>-bash: cd: {path}: Not a directory </p>
              ) : (
                <p>-bash: cd: {path}: No such file or directory</p>
              )}
            </div>
          );

        if (command === "ls") {
          return (
            <div key={i} className="mb-2">
              <PrevCmd command={commandStr} id={id} />
              {!found ? (
                <p>
                  ls: cannot access &apos;{path}&apos;: No such file or
                  directory
                </p>
              ) : (
                <div>
                  <div className="flex gap-8">
                    {files?.map((el, i) => {
                      return (
                        <p key={i} className=" ">
                          {el}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex gap-4">
                    {folders?.map((el, i) => (
                      <p key={i} className="text-blue-500">
                        {el}
                      </p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        }

        if (command === "cat") {
          const { status, message, data } = fileData.at(i);

          if (status === "fail")
            return (
              <div key={i} className="mb-2">
                <PrevCmd command={commandStr} id={id} />
                <p> {message}</p>
              </div>
            );

          if (status === "success")
            return (
              <div key={i} className="mb-2 flex flex-col gap-2">
                <PrevCmd command={commandStr} id={id} />

                <div className="flex gap-2">
                  <span>visit:</span>
                  <a
                    href={`${data.link}`}
                    target="_blank"
                    className=" border-b border-blue-500 text-blue-500"
                  >
                    {data.title}
                  </a>
                </div>

                <div className="flex gap-1  ">
                  <span>core technologies: </span>

                  <p className="flex text-green-800 ">
                    {data.stack.map((el, i) => (
                      <span key={i}>{el}|</span>
                    ))}
                  </p>
                </div>

                <div>
                  {data.features.map((el, i) => (
                    <p key={i} className="text-stone-500  ">
                      <span className="mr-2">#</span>
                      <span>{el}</span>
                    </p>
                  ))}
                </div>
              </div>
            );
        }

        return (
          <div key={i} className="mb-2">
            <PrevCmd command={commandStr} id={id} />
            <NotFound command={commandStr} />
          </div>
        );
      })}

      <User />
    </main>
  );
}

export default App;
