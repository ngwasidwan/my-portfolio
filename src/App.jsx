import Home from "./components/Home";
import User from "./components/User";
import Help from "./components/Help";
import NotFound from "./components/NotFound";
import { useAppContext } from "./lib/ContextApi";
import PrevCmd from "./components/PrevCmd";

function App() {
  const { cmdArr, folderInfo } = useAppContext();

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
                  <div className="flex gap-4">
                    {files?.map((el, i) => {
                      return (
                        <a
                          key={i}
                          href="https://easy-travels-app.vercel.app"
                          target="_blank"
                          className=" border-b border-stone-100 "
                        >
                          {el}
                        </a>
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
          console.log(files);
          if (!files && folders.includes(path)) console.log("is a directory");
          if (!files?.includes(path)) console.log("no file");
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
