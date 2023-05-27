import { Td, Tr } from "@chakra-ui/table"
import { File } from "../../types/File"
import { FC } from "react"

interface Props {
  file: File
}

export const FilesTableItem: FC<Props> = ({ file }) => {
  const {
    name,
    size,
    client_modified
  } = file;

  return (
    <Tr>
      <Td>{name}</Td>
      <Td isNumeric>{size}</Td>
      <Td>{client_modified}</Td>
    </Tr>
  )
}