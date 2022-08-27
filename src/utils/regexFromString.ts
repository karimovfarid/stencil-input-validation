export const regexFromString = (str) => {
  const {
    body,
    flags,
  } = String(str)
    // ts-ignore
    .match(/^\/(?<body>.*)\/(?<flags>[gimsuy]*)$/)?.groups || {};

  return RegExp(body, (body && flags));
}
