import { useEffect, useState } from "react";
import Caret from "./Caret";
import {
  excludedKeys,
  fileTree,
  NEXT_CARET_POSITION,
  dataObj,
} from "../utils/constants";
import { useAppContext } from "../lib/ContextApi";

const curPathArr = [];
const textArr = [];
const allCommands = [];

let pathFound = true;
let caretIndex = 0;
let commandAt;

const getCurDir = (pathArr, path) => {
  const curDir = pathArr.reduce((acc, cur) => {
    return acc[cur];
  }, fileTree);

  return path ? curDir[path] : curDir;
};

const nextPosition = (caretIndex) =>
  (!caretIndex ? 0 : caretIndex === 1 ? 1 : caretIndex) * NEXT_CARET_POSITION;
function User() {
  const [inputText, setInputText] = useState("");
  const [moveCaretTo, setMoveCaretTo] = useState(0);
  const {
    setCmdArr,
    setDirectoryArr,
    directoryArr,
    cmdArr,
    folderInfo,
    setFolderInfo,
    setFileData,
    fileData,
  } = useAppContext();

  ////// TO EXECUTE ONLY ON INITIAL PAGE LOAD
  useEffect(() => {
    const listener = (ev) => {
      ev.preventDefault();
      const { key } = ev;
      if (key === "Enter") {
        const command = textArr.join("").trim();

        const [_, ...others] = command.split(" ");

        const path = others?.join("") || "";

        /////////
        // #CODE REFACTORING LOADING ...
        ///////////

        //CAT COMMANDS
        ////////////

        if (command.startsWith("cat")) {
          const curDir = getCurDir(curPathArr);
          if (Array.isArray(curDir)) {
            const found = curDir.find((el) => el === path);

            if (!found) {
              setFileData((cur) => [
                ...cur,
                {
                  status: "fail",
                  message: `cat: ${path}: No such file or directory`,
                },
              ]);
            } else {
              setFileData((cur) => [
                ...cur,
                { status: "success", data: dataObj[found] },
              ]);
            }
          }

          if (!Array.isArray(curDir) && curDir instanceof Object) {
            const isDir = curDir[path];

            if (isDir) {
              setFileData((cur) => [
                ...cur,
                {
                  status: "fail",
                  message: `cat: ${path}: Is a directory`,
                },
              ]);
            }

            if (!isDir) {
              setFileData((cur) => [
                ...cur,
                {
                  status: "fail",
                  message: `cat: ${path}: No such file or directory`,
                },
              ]);
            }
          }

          setFolderInfo((cur) => {
            console.log(cur);
            return [...cur, cur.at(-1)];
          });

          setDirectoryArr((cur) => {
            return [...cur, cur.at(-1)];
          });

          setCmdArr((cur) => [
            ...cur,
            {
              command,
              path,
              pathFound,
              id: cur.at(-1).id + 1,
            },
          ]);
        }

        ////////
        ///CD COMMANDS
        ///////
        if (command === "cd ..") {
          const elInPathArr = curPathArr.at(-1);
          curPathArr.pop();
          pathFound = true;

          if (!elInPathArr) {
            setFolderInfo((cur) => [...cur, cur.at(-1)]);
          }

          if (elInPathArr) {
            const curDir = curPathArr.reduce((acc, cur) => {
              return acc[cur];
            }, fileTree);

            console.log(elInPathArr, curPathArr, curDir);

            if (Array.isArray(curDir)) {
              setFolderInfo((cur) => [...cur, { files: curDir }]);
            }

            if (!Array.isArray(curDir)) {
              const folders = Object.keys(curDir);

              setFolderInfo((cur) => [...cur, { folders }]);
            }
          }

          setCmdArr((cur) => {
            console.log(cur);
            return [
              ...cur,
              {
                command,
                path,
                pathFound,
                id: cur.at(-1).id + 1,
              },
            ];
          });

          // const absPath = curPathArr.join("/");
          const absPath = curPathArr.join("/");
          console.log(absPath);

          // setDirectoryArr((cur) => [...cur, cur.at(-1)]);
          setDirectoryArr((cur) => [...cur, absPath ? `/${absPath}` : absPath]);
          setFileData((cur) => [...cur, cur.at(-1)]);
        }

        if (command !== "cd .." && command.startsWith("cd")) {
          const elInPathArr = curPathArr.at(-1);

          if (!elInPathArr) {
            const curDir = fileTree[path];

            console.log(curDir);

            if (Array.isArray(curDir)) {
              curPathArr.push(path);

              pathFound = true;
              setFolderInfo((cur) => {
                return [...cur, { files: curDir }];
              });
            }

            if (!Array.isArray(curDir) && curDir instanceof Object) {
              const folders = Object.keys(curDir);
              curPathArr.push(path);
              pathFound = true;

              console.log("found and object");

              console.log(curPathArr, curDir, folders);
              setFolderInfo((cur) => [...cur, { folders }]);
            }

            if (!curDir) {
              pathFound = false;
              setFolderInfo((cur) => {
                console.log(cur);
                return [...cur, cur.at(-1)];
              });
              console.log("not found");
            }

            const absPath = curPathArr.join("/");
            setDirectoryArr((cur) => [
              ...cur,
              absPath ? `/${absPath}` : absPath,
            ]);
            setCmdArr((cur) => [
              ...cur,
              {
                command,
                path,
                pathFound,
                id: cur.at(-1).id + 1,
              },
            ]);
          }

          if (elInPathArr) {
            const curDir = getCurDir(curPathArr, path);

            if (Array.isArray(curDir)) {
              curPathArr.push(path);

              pathFound = true;
              setFolderInfo((cur) => {
                return [...cur, { files: curDir }];
              });

              const absPath = curPathArr.join("/");
              setDirectoryArr((cur) => [
                ...cur,
                absPath ? `/${absPath}` : absPath,
              ]);
            }

            if (!Array.isArray(curDir) && curDir instanceof Object) {
              const folders = Object.keys(curDir);
              curPathArr.push(path);
              pathFound = true;

              console.log(curPathArr, curDir, folders);
              setFolderInfo((cur) => [...cur, { folders }]);

              const absPath = curPathArr.join("/");
              setDirectoryArr((cur) => [
                ...cur,
                absPath ? `/${absPath}` : absPath,
              ]);
            }

            if (!curDir) {
              pathFound = false;
              setFolderInfo((cur) => {
                console.log(cur);
                return [...cur, cur.at(-1)];
              });

              setDirectoryArr((cur) => {
                return [...cur, cur.at(-1)];
              });
            }

            setCmdArr((cur) => [
              ...cur,
              {
                command,
                path,
                pathFound,
                id: cur.at(-1).id + 1,
              },
            ]);
          }

          setFileData((cur) => [...cur, cur.at(-1)]);
        }

        /////////////
        // LS COMMANDS
        ///////////
        if (command === "ls" || command === "ls .") {
          const elInPathArr = curPathArr.at(-1);

          if (!elInPathArr) {
            // const curDir = fileTree;
            const folders = Object.keys(fileTree);

            console.log("found and object");

            // console.log(curPathArr, curDir, folders);
            setFolderInfo((cur) => [...cur, { folders, found: true }]);
          }

          if (elInPathArr) {
            const curDirInfo = curPathArr.reduce((acc, cur) => {
              return acc[cur];
            }, fileTree);

            console.log(curDirInfo);
            if (Array.isArray(curDirInfo)) {
              setFolderInfo((cur) => [
                ...cur,
                { files: curDirInfo, found: true },
              ]);
            }

            if (!Array.isArray(curDirInfo)) {
              const folders = Object.keys(curDirInfo);

              setFolderInfo((cur) => {
                return [...cur, { folders, found: true }];
              });
            }
          }

          setDirectoryArr((cur) => {
            console.log(cur);
            return [...cur, cur.at(-1)];
          });

          setCmdArr((cur) => [
            ...cur,
            {
              command,
              path,
              pathFound,
              id: cur.at(-1).id + 1,
            },
          ]);
          setFileData((cur) => [...cur, cur.at(-1)]);
        }

        if (command.startsWith("ls") && path !== "." && path) {
          const elInPathArr = curPathArr.at(-1);

          if (!elInPathArr) {
            const curDir = fileTree[path];

            if (Array.isArray(curDir)) {
              console.log(curDir.filter((el) => el === path));
              setFolderInfo((cur) => {
                return [
                  ...cur,
                  { files: curDir.filter((el) => el === path), found: true },
                ];
              });
            }

            if (!Array.isArray(curDir) && curDir instanceof Object) {
              const folders = Object.keys(curDir);

              console.log("found and object");

              setFolderInfo((cur) => [...cur, { folders, found: true }]);
            }

            if (!curDir) {
              pathFound = false;
              setFolderInfo((cur) => {
                console.log(cur);
                return [...cur, { ...cur.at(-1), found: false }];
              });
            }
          }

          if (elInPathArr) {
            const curDir = getCurDir(curPathArr);
            if (Array.isArray(curDir)) {
              const found = curDir.includes(path);
              console.log(found);

              setFolderInfo((cur) => {
                return [
                  ...cur,
                  found
                    ? { files: curDir.filter((el) => el === path), found, path }
                    : { ...cur.at(-1), found, path },
                ];
              });
            }

            if (!Array.isArray(curDir) && curDir instanceof Object) {
              const nextFiles = curDir[path];

              if (Array.isArray(nextFiles) && nextFiles) {
                setFolderInfo((cur) => [
                  ...cur,
                  { files: nextFiles, found: true },
                ]);
              }

              if (!Array.isArray(nextFiles) && nextFiles) {
                const folders = Object.keys(nextFiles);

                setFolderInfo((cur) => [...cur, { folders, found: true }]);
              }
              if (!nextFiles) {
                pathFound = false;
                setFolderInfo((cur) => {
                  console.log(cur);
                  return [...cur, { ...cur.at(-1), found: false }];
                });
              }
            }
          }

          setCmdArr((cur) => {
            console.log(cur);
            return [
              ...cur,
              {
                command,
                path,
                pathFound,
                id: cur.at(-1).id + 1,
              },
            ];
          });

          setDirectoryArr((cur) => {
            return [...cur, cur.at(-1)];
          });
          setFileData((cur) => [...cur, cur.at(-1)]);
        }

        //CLEAR COMMAND
        if (command === "clear") {
          pathFound = true;
          setCmdArr([
            {
              command,
              pathFound,
              path,
              id: 0,
            },
          ]);

          setDirectoryArr((cur) => [cur.at(-1)]);
          setFolderInfo((cur) => [cur.at(-1)]);
          setFileData((cur) => [cur.at(-1)]);
        }

        if (command === "help" || command === "home") {
          pathFound = true;
          setCmdArr((cur) => [
            ...cur,
            {
              command,
              pathFound,
              path,
              id: cur.at(-1).id + 1,
            },
          ]);

          setDirectoryArr((cur) => [...cur, cur.at(-1)]);
          setFolderInfo((cur) => [...cur, cur.at(-1)]);
          setFileData((cur) => [...cur, cur.at(-1)]);
        }

        textArr.splice(0, textArr.length);

        commandAt = Number.isFinite(commandAt) ? commandAt + 1 : 0;

        allCommands.push(command);

        caretIndex = 0;
        setMoveCaretTo(caretIndex);
        setInputText("");
      }

      //ARROW_UP COMMAND
      if (key === "ArrowUp") {
        if (!Number.isFinite(commandAt)) return;
        const commandStr = allCommands.at(commandAt);
        setInputText(commandStr);

        textArr.splice(0, textArr.length, ...commandStr);
        caretIndex = commandStr?.length;
        setMoveCaretTo(caretIndex * NEXT_CARET_POSITION);

        commandAt = commandAt ? (commandAt -= 1) : 0;
      }

      //ARROW_DOWN COMMAND
      if (key === "ArrowDown") {
        if (!Number.isFinite(commandAt)) return;
        const commandStr = allCommands.at(commandAt - 1);
        setInputText(commandStr);

        textArr.splice(0, textArr.length, ...commandStr);
        caretIndex = commandStr?.length;
        setMoveCaretTo(caretIndex * NEXT_CARET_POSITION);

        commandAt =
          commandAt >= allCommands.length - 1 ? commandAt : (commandAt += 1);
      }

      //BACKSPACE COMMAND
      if (key === "Backspace") {
        if (caretIndex < 1) return;

        textArr.splice(caretIndex - 1, 1);
        caretIndex -= 1;

        setInputText(textArr.join(""));

        setMoveCaretTo((cur) => (cur ? cur - NEXT_CARET_POSITION : cur));

        return;
      }

      //ARROW RIGHT COMMAND
      if (key === "ArrowRight") {
        caretIndex = caretIndex >= textArr.length ? caretIndex : caretIndex + 1;

        setMoveCaretTo((cur) =>
          cur >= textArr.length * NEXT_CARET_POSITION
            ? cur
            : cur + NEXT_CARET_POSITION
        );
        return;
      }

      //ARROW LEFT COMMAND
      if (key === "ArrowLeft") {
        caretIndex = caretIndex ? caretIndex - 1 : 0;
        setMoveCaretTo((cur) => (cur ? cur - NEXT_CARET_POSITION : cur));

        return;
      }

      if (
        excludedKeys.includes(key) ||
        (textArr[caretIndex - 1] === " " && key === " ")
      )
        return;

      if (textArr.length) {
        textArr.splice(caretIndex, 0, key);
      } else {
        textArr.push(key);
      }

      setInputText(textArr.join(""));

      caretIndex += 1;

      setMoveCaretTo(nextPosition(caretIndex));
    };

    document.addEventListener("keydown", listener);

    return () => document.removeEventListener("keydown", listener);
  }, [setCmdArr, setDirectoryArr, setFolderInfo, setFileData]);

  useEffect(() => {
    console.log(cmdArr, directoryArr, folderInfo, fileData);
  }, [cmdArr, directoryArr, folderInfo, fileData]);

  return (
    <div className="max-w-full tracking-wider">
      <span className="text-primary ">
        sabipikin@njaka<span className="text-white">:</span>
        <span className="text-blue-500">~</span>
        <span className="text-blue-500 ml-2">
          <span>{directoryArr.at(directoryArr.length - 1)}</span>
        </span>
        <span className="text-white pr-1">$</span>
        <span className="relative">
          <span className="text-white">{inputText}</span>
          <Caret moveCaretTo={moveCaretTo} />
        </span>
      </span>
    </div>
  );
}

export default User;
