
export const getCls = (style, cls) => {
  return style._getContent().default.locals[cls];
};
