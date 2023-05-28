import { FC, useContext } from "react";
import { FilesTable } from "../../components/FilesTable";
import { AuthContext } from "../../contexts/AuthContext";
import { useDropbox } from "../../utils/hooks/useDropbox";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";
import { Loader } from "../../components/Loader/Loader";

export const AllFilesPage: FC = () => {
  const token = useContext(AuthContext)

  const {
    entries,
    isLoading,
    isDataLoaded,
    dirPaths,
    rootPath,
    isRootDir,
    openFolder
  } = useDropbox(token)

  const dataLoaded = isDataLoaded && !isLoading;
  return (
    <> 
      {dataLoaded && (
        <BreadCrumb onOpenFolder={openFolder} dirPaths={dirPaths}  />
      )}

      {isLoading 
        ? <Loader />
        : <FilesTable 
            entries={entries} 
            onOpenFolder={openFolder} 
            isRootDir={isRootDir}
            rootPath={rootPath}
          />
        }
    </>
  )
}