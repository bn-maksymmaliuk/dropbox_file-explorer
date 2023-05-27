import { FC } from "react"
import {
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { Entries } from "../../types/Entries"
import { FilesTableItem } from "../FilesTableItem"

interface Props {
  entries: Entries[]
}

export const FilesTable: FC<Props> = ({ entries }) => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {entries.map(element =>(
        <GridItem>
          <FilesTableItem file={element} />
        </GridItem>
      ))}
    </Grid>
  )
}