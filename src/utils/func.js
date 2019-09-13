export function debounce(fn, delay = 300) {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

export function throttle(fn, limit = 300) {
  let canRun = true;

  return (...args) => {
    if (canRun) {
      fn(...args);

      canRun = false;

      setTimeout(() => {
        canRun = true;
      }, limit);
    }
  };
}
