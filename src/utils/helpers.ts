export const normalizeFileName = (fileName: string, lastIndex: number) => {
  if (fileName.length > lastIndex) {
    const extensionIndex = fileName.lastIndexOf('.');
    const fileNameWithoutExtension = fileName.slice(0, extensionIndex);
    const shortenedFileName = `${fileNameWithoutExtension
      .slice(0, lastIndex)}... `;
    const extension = fileName.slice(extensionIndex);

    return shortenedFileName + extension;
  }
  
  return fileName;
};