import { useEffect, useState } from "react";
import Caret from "./Caret";
import {
  excludedKeys,
  fileTree,
  NEXT_CARET_POSITION,
} from "../utils/constants";
import { useAppContext } from "../lib/ContextApi";

const curPathArr = [];
let pathFound = true;

let caretIndex = 0;
const textArr = [];
const allCommands = [];
let commandAt;

const nextPosition = (caretIndex) =>
  (!caretIndex ? 0 : caretIndex === 1 ? 1 : caretIndex) * NEXT_CARET_POSITION;
function User() {
  const [inputText, setInputText] = useState("");
  const [moveCaretTo, setMoveCaretTo] = useState(0);
  const {
    setCmdArr,
    setDirectoryArr,
    directoryArr,
    // cmdArr,
    // folderInfo,
    setFolderInfo,
  } = useAppContext();

  ////// TO EXECUTE ONLY ON INITIAL PAGE LOAD
  useEffect(() => {
    const listener = (ev) => {
      ev.preventDefault();
      const { key } = ev;
      if (key === "Enter") {
        const command = textArr.join("").trim();

        const path = command.split(" ").at(1) || "";

        if (path === "..") {
          const lastFolder = curPathArr.at(-1);
          curPathArr.pop();
          pathFound = true;

          if (lastFolder) {
            const curDir = curPathArr.reduce((acc, cur) => {
              return acc[cur];
            }, fileTree);

            console.log(lastFolder, curPathArr, curDir);

            if (Array.isArray(curDir)) {
              setFolderInfo((cur) => [...cur, { files: curDir }]);
            } else {
              const folders = Object.keys(curDir);

              setFolderInfo((cur) => [...cur, { folders }]);
            }
          } else {
            setFolderInfo((cur) => [...cur, cur.at(-1)]);
          }
        } else {
          const lastFolder = curPathArr.at(-1);

          const curDir = !lastFolder
            ? fileTree[path]
            : curPathArr.reduce((acc, cur) => {
                return acc[cur];
              }, fileTree);

          if (!lastFolder && curDir) {
            curPathArr.push(path);
            pathFound = true;

            if (Array.isArray(curDir)) {
              // filesArr.splice(0, filesArr.length, ...curDir);

              setFolderInfo((cur) => {
                return [...cur, { files: curDir }];
              });
            } else {
              const folders = Object.keys(curDir);
              // foldersArr.splice(0, foldersArr.length, ...folders);
              setFolderInfo((cur) => [...cur, { folders }]);
            }
          } else if (lastFolder && curDir[path]) {
            curPathArr.push(path);
            pathFound = true;

            if (Array.isArray(curDir[path])) {
              setFolderInfo((cur) => [...cur, { files: curDir[path] }]);

              // foldersArr.splice(0, foldersArr.length);
            } else {
              const folders = Object.keys(curDir[path]);

              setFolderInfo((cur) => [...cur, { folders }]);
            }
          } else {
            pathFound = false;

            setFolderInfo((cur) => [...cur, cur.at(-1)]);
          }
        }

        //CLEAR COMMAND
        if (command === "clear") {
          pathFound = true;
          setCmdArr((cur) => {
            return [
              {
                command,
                pathFound,
                path,
                id: cur.at(-1).id,
              },
            ];
          });

          setFolderInfo((cur) => [...cur, cur.at(-1)]);
        } else {
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

          const absPath = curPathArr.join("/");

          setDirectoryArr((cur) => [...cur, absPath ? `/${absPath}` : absPath]);
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
  }, [setCmdArr, setDirectoryArr, setFolderInfo]);

  // useEffect(() => {
  //   console.log(cmdArr, directoryArr, folderInfo);
  // }, [cmdArr, directoryArr, folderInfo]);

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
