import { FC } from "react"
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { File } from "../../types/File"
import { FilesTableItem } from "../FilesTableItem"

interface Props {
  files: File[]
}

export const FilesTable: FC<Props> = ({ files }) => {
  return (
    <TableContainer>
    <Table variant='striped' colorScheme='teal'>
      <TableCaption>Imperial to metric conversion factors</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Size</Th>
          <Th isNumeric>Updated At</Th>
        </Tr>
      </Thead>
      <Tbody>
        {files.map(file => (
          <FilesTableItem file={file} />
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  )
}