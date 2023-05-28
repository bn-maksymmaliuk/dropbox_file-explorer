import { FC } from "react"
import { Entries } from "../../types/Entries"
import { Link } from "react-router-dom"
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { ArrowBackIcon } from '@chakra-ui/icons'
import { IconButton, ListIcon, ListItem } from "@chakra-ui/react"
import { FolderPath } from "../../types/FolderPath"

interface Props {
  file: Entries
  isRootDir: boolean
  onOpenDir: (path: string, pathToDisplay: string) => void
  rootPath: FolderPath | undefined
}

export const FilesTableItem: FC<Props> = ({ 
  file, 
  isRootDir, 
  onOpenDir, 
  rootPath 
}) => {
  const isFile = file[".tag"] === 'file' && ('url' in file)
  const isFolder = file[".tag"] === 'folder';
  
  return (
    <>
      {isFile 
      ? (
        <>
          <Link to={file.url as string}>
            <DescriptionIcon />
            {file.name}
          </Link>
        </> 
      ) : (
        <>
        {file.name}
        <IconButton
          colorScheme='blue'
          onClick={() => onOpenDir(
            file.path_lower || '', 
            file.path_display || ''
          )}
          aria-label='Search database'
          icon={<FolderIcon />}
        />
        </>
      )
      }

    </>
  )
}