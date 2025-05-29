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

        const [command, path] = commandStr.split(" ");

        const files = folderInfo.at(i).files;
        const folders = folderInfo.at(i).folders;

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

              <div className="flex gap-4">
                {files?.map((el, i) => (
                  <a
                    key={i}
                    href="#"
                    target="_blank"
                    className=" border-b border-stone-100 "
                  >
                    {el}
                  </a>
                ))}
              </div>
              <div className="flex gap-4">
                {folders?.map((el, i) => (
                  <p key={i} className="text-blue-500">
                    {el}
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
