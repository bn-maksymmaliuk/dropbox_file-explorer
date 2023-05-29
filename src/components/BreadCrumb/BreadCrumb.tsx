import { BreadcrumbItem, BreadcrumbLink, Breadcrumb } from "@chakra-ui/react";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import { FolderPath } from "../../types/FolderPath";
import React from "react";

interface Props {
  dirPaths: FolderPath[];
  onOpenFolder: (path: string, pathToDisplay: string) => void;
}

export const BreadCrumb: FC<Props> = React.memo(({ onOpenFolder, dirPaths }) => {
  const handleClick = (path: string, pathToDisplay: string) => {
    onOpenFolder(path, pathToDisplay);
  };

  return (
    <Breadcrumb pb="25px" flexWrap="wrap">
      {dirPaths.map((element, index) => {
        const { path, pathToDisplay } = element;
        const isLastElement = index === dirPaths.length - 1;

        return (
          <BreadcrumbItem key={uuidv4()} isCurrentPage={isLastElement}>
            <BreadcrumbLink
              onClick={() => handleClick(path, pathToDisplay)}
              fontSize="20px"
              fontWeight={isLastElement ? "bold" : "normal"}
              color={isLastElement ? "blue.500" : "gray.500"}
              _hover={{ textDecoration: "underline" }}
              cursor='pointer'
            >
              {pathToDisplay}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
});
