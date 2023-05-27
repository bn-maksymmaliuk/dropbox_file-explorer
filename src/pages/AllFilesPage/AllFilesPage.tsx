import { FC, useEffect, useState } from "react";
import { Dropbox, DropboxResponse, files } from "dropbox";
import { FilesTable } from "../../components/FilesTable";
import { File } from "../../types/File";

export const AllFilesPage: FC = () => {

  return (
    <FilesTable files={[]}/>
  )
}