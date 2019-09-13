export const onEnter = cb => (event) => {
  if (event.key === 'Enter') {
    cb(event);
  }
};
