import { isArray, isObject, isNumber, isString, isBoolean } from "lodash-es";
import { matchRoutes } from "react-router";
import { docs } from "./router/docs";

export const getEmptyValueByType = (value: any) => {
  if (isArray(value)) {
    return [];
  }
  if (isObject(value) && !isArray(value)) {
    return {};
  }
  if (isNumber(value)) {
    return 0;
  }
  if (isString(value)) {
    return "";
  }
  if (isBoolean(value)) {
    return false;
  }
  return null;
};

export const getPathString = (key: any[]) => {
  return key
    .filter(Boolean)
    .filter((k) => k !== "")
    .map((k) => (typeof k === "number" ? `[${k}]` : k))
    .join(".");
};

export const renemablePatterns = [
  /(?:http|tcp|udp)\.routers\.[\w_-]+$/,
  /(?:http|tcp)\.middlewares\.[\w_-]+$/,
  /(?:http|tcp|udp)\.services\.[\w_-]+$/,
  /(?:http|tcp)\.serversTransports\.[\w_-]+$/,
  /tls\.options\.[\w_-]+$/,
  /tls\.stores\.[\w_-]+$/,
  /http\.middlewares\.[\w_-]+\.plugin\.[\w_-]+$/,
];

export const originalPathPatterns = [
  /(?:http|tcp|udp)\.(?<source>router)s\.(?<target>[\w_-]+)/,
  /(?:http|tcp)\.middlewares\.(?<target>[\w_-]+).(?<source>\w+)/,
  /(?:http|tcp|udp)\.services\.(?<target>[\w_-]+).(?<source>\w+)/,
  /(?:http|tcp)\.(?<source>serversTransport)s\.([\w_-]+)/,
  /tls\.(?<source>option)s\.(?<target>[\w_-]+)/,
  /tls\.(?<source>store)s\.(?<target>[\w_-]+)/,
];

export const getOriginalPath = (path: string) => {
  for (const pattern of originalPathPatterns) {
    if (!pattern.test(path)) continue;

    return path.replace(pattern, (match, ...groups) => {
      const { source, target } = groups.pop();
      return match.replace(target, `{${source}}`);
    });
  }

  return path;
};

export const isRenamable = (path: string) => {
  return renemablePatterns.some((pattern) => pattern.test(path));
};

export const getDocLink = (path: string) => {
  const url = path.split(".").join("/");
  const matches = matchRoutes(docs, `/${url}`);

  if (!matches) return null;

  const match = matches.at(-1);

  if (!match) return null;

  let link = match.route.element as string;

  if (!match.params) return link;

  for (const key in match.params) {
    link = link.replace(new RegExp(`{${key}}`), match.params[key]!.toLocaleLowerCase());
  }

  return link;
};
