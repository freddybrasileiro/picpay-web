export default (r, g, b) =>
  new Array(100).fill(0).reduce(
    (obj, elem, i) => ({
      ...obj,
      [i]: `rgba(${r}, ${g}, ${b}, ${i / 100})`
    }),
    {}
  );
