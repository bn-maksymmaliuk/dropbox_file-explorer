import { FC, useEffect, useState, useContext } from "react";
import { FilesTable } from "../../components/FilesTable";
import { Dropbox } from "dropbox";
import { Entries } from "../../types/Entries";
import { AuthContext } from "../../contexts/AuthContext";

export const AllFilesPage: FC = () => {
  const [entries, setEntries] = useState<Entries[]>([])

  const token = useContext(AuthContext)

  const dbx = new Dropbox({ accessToken: token });

  useEffect(() => {
    dbx.filesListFolder({ path: '' })
      .then((response) => {
        setEntries(response.result.entries)
      })
  }, []);

  return (
    <FilesTable entries={entries}/>
  )
}