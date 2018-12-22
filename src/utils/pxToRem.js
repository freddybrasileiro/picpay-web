export const DEFAULT_FONT_SIZE = 16;

export default (size = DEFAULT_FONT_SIZE) => {
  if (size === 0) return "1rem";

  return `${size / DEFAULT_FONT_SIZE}rem`;
};
