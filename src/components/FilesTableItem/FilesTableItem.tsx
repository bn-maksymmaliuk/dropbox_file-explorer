import { Td, Tr } from "@chakra-ui/table"
import { File } from "../../types/File"
import { FC } from "react"
import { Entries } from "../../types/Entries"

interface Props {
  file: Entries
}

export const FilesTableItem: FC<Props> = ({ file }) => {
  const {
    name,

  } = file;

  return (
      <div>{name}</div>
  )
}