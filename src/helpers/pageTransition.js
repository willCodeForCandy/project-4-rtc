export const fadeTransition = (current, next) => {
  current.classList.add('fade-out');
  setTimeout(next);
};
