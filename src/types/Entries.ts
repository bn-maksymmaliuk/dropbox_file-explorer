import { files } from "dropbox";
import { File } from "./File";
import { Folder } from "./Folder";

export type Entries = 
  File 
  | Folder 
  | files.FileMetadataReference 
  | files.FolderMetadataReference
  | files.DeletedMetadataReference;