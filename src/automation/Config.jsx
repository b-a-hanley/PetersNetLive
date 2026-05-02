
export function altFromPath(path) {
  if (!path) return "Image";

  return path
    .split("/")
    .pop()                  // get file name
    .replace(/\.[^/.]+$/, "") // remove extension
    .replace(/[-_]+/g, " ")   // replace - and _ with spaces
    .replace(/\b\w/g, c => c.toUpperCase()); // capitalize each word
}