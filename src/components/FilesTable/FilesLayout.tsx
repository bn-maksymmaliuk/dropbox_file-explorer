import { FC } from "react"
import {
  Center,
  Grid,
  Heading,
} from '@chakra-ui/react'
import { useBreakpointValue } from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid';
import { ArrowBackIcon } from '@chakra-ui/icons'
import { Entries } from "../../types/Entries"
import { FilesTableItem } from "../FilesLayoutItem"
import { FolderPath } from "../../types/FolderPath";
import { StyledGridItem } from "./StyledItems/StyledGridItem";

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
  const columns = useBreakpointValue({
    base: "repeat(1, 1fr)",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
    lg: "repeat(4, 1fr)",
    xl: "repeat(6, 1fr)",
  });

  return (
    <>
<Grid 
      templateColumns={columns} 
      gap={6}
    >
      {!isRootDir && (
        <StyledGridItem
          onClick={() => onOpenFolder(
            rootPath.path, 
            rootPath.pathToDisplay
          )} 
          key={uuidv4()}
        >
        <ArrowBackIcon />
        To parent directory
      </StyledGridItem>
      )}

      {entries.length ? (
        <>
        {entries.map(element => (
          <StyledGridItem key={uuidv4()}>
            <FilesTableItem 
              file={element} 
              isRootDir={isRootDir} 
              onOpenDir={onOpenFolder} 
              rootPath={rootPath}
            />
          </StyledGridItem>
        ))}
        </>
      ): <></>}
    </Grid>

    {!entries.length &&
    <Center>
      <Heading>Folder is empty</Heading>
    </Center>
    }
    </>
  )
}
