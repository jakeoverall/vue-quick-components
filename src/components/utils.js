export const debounce = (callback, timeout) => {
  let id;
  return (...args) => {
    clearTimeout(id);
    return id = setTimeout(() => callback(...args), timeout);
  };
};