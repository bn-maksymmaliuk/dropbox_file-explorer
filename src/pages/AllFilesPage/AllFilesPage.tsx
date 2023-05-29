import { FC, useContext } from "react";
import { FilesLayout } from "../../components/FilesLayout";
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
        <BreadCrumb
          onOpenFolder={openFolder} 
          dirPaths={dirPaths} 
        />
      )}

      {isLoading 
        ? <Loader />
        : <FilesLayout
            entries={entries} 
            onOpenFolder={openFolder} 
            isRootDir={isRootDir}
            rootPath={rootPath}
          />
        }
    </>
  )
}