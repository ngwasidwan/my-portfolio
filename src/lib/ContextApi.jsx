import { createContext, useContext, useState } from "react";
import { fileTree } from "../utils/constants";

const AppContext = createContext();

const folders = Object.keys(fileTree);
// const files = [];

function ContextApi({ children }) {
  const [cmdArr, setCmdArr] = useState([
    {
      command: "home",
      path: "",
      pathFound: true,
      // homeDir: true,
      // files,
      // folders,
      id: 0,
    },
  ]);

  const [folderInfo, setFolderInfo] = useState([{ folders }]);
  const [directoryArr, setDirectoryArr] = useState([""]);

  // const [folderInfo, setFolderInfo] = useState(false);

  return (
    <AppContext.Provider
      value={{
        cmdArr,
        setCmdArr,
        directoryArr,
        setDirectoryArr,
        folderInfo,
        setFolderInfo,
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
  } = useContext(AppContext);

  return {
    cmdArr,
    setCmdArr,
    directoryArr,
    setDirectoryArr,
    folderInfo,
    setFolderInfo,
  };
}

export default ContextApi;
