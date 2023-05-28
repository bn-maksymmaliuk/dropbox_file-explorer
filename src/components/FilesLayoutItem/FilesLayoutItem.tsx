import { FC } from "react"
import { Entries } from "../../types/Entries"
import { Link } from "react-router-dom"
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import { Container } from "@chakra-ui/react"
import { FolderPath } from "../../types/FolderPath"
import { normalizeFileName } from "../../utils/helpers";

interface Props {
  file: Entries
  isRootDir: boolean
  onOpenDir: (path: string, pathToDisplay: string) => void
  rootPath: FolderPath | undefined
}

export const FilesTableItem: FC<Props> = ({ 
  file, 
  onOpenDir, 
}) => {
  const isFile = file[".tag"] === 'file' && ('url' in file)
  
  return (
    <>
      {isFile 
        ? (
            <Link to={file.url as string}>
              <Container 
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                cursor='pointer'
              >
                  <DescriptionIcon fontSize="large"/>
                  {normalizeFileName(file.name, 12)}
              </Container>
            </Link>
        ) : (
            <Container 
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              textAlign='center'
              cursor='pointer'
              onClick={
                () => onOpenDir(
                  file.path_lower || '', 
                  file.path_display || '')
              }
            >
                <FolderIcon
                  fontSize="large"
                />
                {normalizeFileName(file.name, 12)}
            </Container>
          )
        }
    </>
  )
};