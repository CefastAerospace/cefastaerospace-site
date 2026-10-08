export const pageUrl = (path = "") =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
export const assetUrl = (path: string) =>
  /^(?:https?:)?\/\//.test(path) || path.startsWith(import.meta.env.BASE_URL)
    ? path
    : pageUrl(path);
export const currentPath = window.location.pathname
  .replace(import.meta.env.BASE_URL, "")
  .replace(/(?:^|\/)index\.html$/, "")
  .replace(/^\/+|\/+$/g, "");
