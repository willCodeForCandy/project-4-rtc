import { About } from '../pages/About/About';
import { Experience } from '../pages/Experience/Experience';
import { Projects } from '../pages/Projects/Projects';

const route = () => {
  const hash = window.location.hash;
  switch (hash) {
    case '#aboutMe':
      About();
      break;
    case '#Projects':
      Projects();
      break;
    case '#Experience':
      Experience();
      break;
    default:
      About();
  }
};

export const setRouter = () => {
  window.addEventListener('hashchange', () => {
    route();
  });

  document.addEventListener('DOMContentLoaded', () => {
    route();
  });
};
