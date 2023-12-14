import { headerLinks } from '../../data/headerLinks';
import './header.css';

const highlighters = ['yellow', 'blue', 'pink'];

export const createHeader = () => {
  const $body = document.querySelector('body');
  const $header = document.createElement('header');
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  headerLinks.forEach((link, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = link.name;
    a.href = link.url;
    li.classList.add('highlighter', highlighters[index]);
    li.append(a);
    ul.append(li);
    li.addEventListener('click', link.page);
  });
  nav.append(ul);
  $header.append(nav);
  $body.prepend($header);
};
