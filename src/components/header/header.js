import { headerLinks } from '../../data/headerLinks';
import { toggler } from '../mode-toggler/mode-toggler';
import './header.css';

export const highlighters = ['yellow', 'blue', 'pink'];

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
    li.classList.add('highlighter', highlighters[index % highlighters.length]);
    li.append(a);
    ul.append(li);
    li.addEventListener('click', link.page);
  });
  nav.append(ul);
  $header.append(nav);
  $body.prepend($header);
  toggler($header);
};

export const decorateLinks = () => {
  const links = document.querySelectorAll('li.highlighter');
  for (const link of links) {
    link.classList.remove('highlighted');
  }
  // activeLink.target.parentElement.classList.add('highlighted');
};
