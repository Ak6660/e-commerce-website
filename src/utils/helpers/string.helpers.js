export const normalToKebab = (str = "") => {
  return str.replace(" ", "-").toLowerCase();
};

export const capitalize = (str) => {
  return str
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};
