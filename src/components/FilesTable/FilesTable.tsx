import { FC } from "react"
import {
  Grid,
  GridItem,
  IconButton,
} from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid';
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Entries } from "../../types/Entries"
import { FilesTableItem } from "../FilesTableItem"
import { FolderPath } from "../../types/FolderPath";

interface Props {
  entries: Entries[];
  onOpenFolder: (path: string, pathToDisplay: string) => void;
  isRootDir: boolean;
  rootPath: FolderPath;
}

export const FilesTable: FC<Props> = ({ 
  entries, 
  onOpenFolder, 
  rootPath, 
  isRootDir 
}) => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {!isRootDir && (
      <GridItem key={uuidv4()}>
        <IconButton
          colorScheme='blue'
          onClick={() => onOpenFolder(
            rootPath.path, 
            rootPath.pathToDisplay
          )}
          aria-label='Search database'
          icon={<ArrowBackIcon />}
        />
      </GridItem>
      )}

      {entries.length 
      ? (
        <>
        {entries.map(element => (
        <GridItem key={uuidv4()}>
          <ul>
            <FilesTableItem 
              file={element} 
              isRootDir={isRootDir} 
              onOpenDir={onOpenFolder} 
              rootPath={rootPath}
            />
          </ul>
        </GridItem>
      ))}
        </>
      ) : (
        <div>No files</div>
      )}
    </Grid>
  )
}