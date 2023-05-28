import { BreadcrumbItem, BreadcrumbLink, Breadcrumb } from "@chakra-ui/react"
import { FC } from "react"
import { v4 as uuidv4} from 'uuid'
import { FolderPath } from "../../types/FolderPath"
import React from "react";

interface Props {
  dirPaths: FolderPath[];
  onOpenFolder: (path: string, pathToDisplay: string) => void
}

export const BreadCrumb: FC<Props> = React.memo((
  { onOpenFolder, dirPaths }
  ) => {
  return (
    <Breadcrumb pb='25px'>
      {dirPaths.map(element => {
        const { path, pathToDisplay } = element;
        
        const handleClick = () => {
          onOpenFolder(path, pathToDisplay);
        };
        return (
        <BreadcrumbItem key={uuidv4()}>
          <BreadcrumbLink 
            onClick={handleClick}
            fontSize='20px'
            isCurrentPage
          >
            {pathToDisplay}
          </BreadcrumbLink>
        </BreadcrumbItem>
      )})}
    </Breadcrumb>    
  )
});