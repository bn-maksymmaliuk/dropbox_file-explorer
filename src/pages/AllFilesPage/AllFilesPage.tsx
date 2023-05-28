import { FC, useContext } from "react";
import { FilesTable } from "../../components/FilesTable";
import { AuthContext } from "../../contexts/AuthContext";
import { useDropbox } from "../../utils/hooks/useDropbox";
import { Spinner } from "@chakra-ui/react";
import { BreadCrumb } from "../../components/BreadCrumb/BreadCrumb";

export const AllFilesPage: FC = () => {
  const token = useContext(AuthContext)

  const {
    entries,
    isLoading,
    isDataLoaded,
    errorMessage,
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
        ? <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
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