import { createContext, useContext, useState } from "react";
import { fileTree } from "../utils/constants";

const AppContext = createContext();

const folders = Object.keys(fileTree);

function ContextApi({ children }) {
  const [cmdArr, setCmdArr] = useState([
    {
      command: "home",
      path: "",
      pathFound: true,
      id: 0,
    },
  ]);

  const [folderInfo, setFolderInfo] = useState([{ folders }]);
  const [directoryArr, setDirectoryArr] = useState([""]);
  const [fileData, setFileData] = useState([{ status: "", message: "" }]);

  return (
    <AppContext.Provider
      value={{
        cmdArr,
        setCmdArr,
        directoryArr,
        setDirectoryArr,
        folderInfo,
        setFolderInfo,
        fileData,
        setFileData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const {
    cmdArr,
    setCmdArr,
    directoryArr,
    setDirectoryArr,
    folderInfo,
    setFolderInfo,
    fileData,
    setFileData,
  } = useContext(AppContext);

  return {
    cmdArr,
    setCmdArr,
    directoryArr,
    setDirectoryArr,
    folderInfo,
    setFolderInfo,
    fileData,
    setFileData,
  };
}

export default ContextApi;
