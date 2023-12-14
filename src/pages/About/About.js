import './About.css';

export const About = () => {
  const main = document.querySelector('#app');
  main.role = 'main';
  main.innerHTML = '<h1>About Me</h1>';
};
