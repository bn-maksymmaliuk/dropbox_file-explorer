import { 
  useState, 
  useEffect, 
  useCallback 
} from 'react';
import { Dropbox } from 'dropbox';
import { Entries } from '../../types/Entries';
import { FolderPath } from '../../types/FolderPath';

export const useDropbox = (token: string) => {
  const basePath = {
    path: '',
    pathToDisplay: 'Root directory'
  }
  const [entries, setEntries] = useState<Entries[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [dirPaths, setDirPaths] = useState<FolderPath[]>([basePath]);
  const [rootPath, setRootPath] = useState<FolderPath>(basePath);
  const [isRootDir, setIsRootDir] = useState(false);

  const dbx = new Dropbox({ accessToken: token });

  const processEntries = (entries: Entries[]) => {
    const BASE_FILE_URL = 'https://www.dropbox.com/home';
    const PREVIEW_PREFIX = '?preview=';
    const preparedEntries = entries.map((element) => {
      if (element['.tag'] === 'folder') {
        return element;
      }

      const newUrl = BASE_FILE_URL 
      + element.path_lower 
      + PREVIEW_PREFIX 
      + element.name;

      return { ...element, url: newUrl };
    });

    setEntries(preparedEntries);
  };

  const openFolder = useCallback((path: string, pathToDisplay: string) => {
    const normalizedPath = pathToDisplay.slice(
      pathToDisplay.lastIndexOf('/') + 1
    );

    setIsLoading(true);

    dbx.filesListFolder({ path })
      .then((res) => {
        processEntries(res.result.entries);
        setDirPaths((prev) => {
          const newPath = {
            path,
            pathToDisplay: normalizedPath,
          };

          const parentPath = {
            path: path.split('/').slice(0, -1).join('/'),
            pathToDisplay:
              pathToDisplay.split('/').slice(0, -1).join('/') 
                || 'Root directory',
          };

          setRootPath(parentPath);

          const existingPathIndex = prev.findIndex((element) => element.path === path);

          if (existingPathIndex === 0) {
            setIsRootDir(true);
          } else {
            setIsRootDir(false);
          }

          if (existingPathIndex !== -1) {
            return prev.slice(0, existingPathIndex + 1);
          }

          return [...prev, newPath];
        });
      })
      .catch((error) => {
        setErrorMessage('An error occurred');
        throw new Error(error)
      })
      .finally(() => {
        setIsLoading(false);
        setIsDataLoaded(true);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);

    dbx.filesListFolder({ path: '' })
      .then((res) => processEntries(res.result.entries))
      .catch((error) => {
        console.log(error);
        setErrorMessage('An error occurred');
      })
      .finally(() => {
        setIsLoading(false);
        setIsDataLoaded(true);
        setIsRootDir(true);
      });
  }, []);

  return {
    entries,
    isLoading,
    isDataLoaded,
    errorMessage,
    dirPaths,
    rootPath,
    isRootDir,
    openFolder,
  };
};