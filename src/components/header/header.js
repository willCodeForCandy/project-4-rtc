import { headerLinks } from '../../data/headerLinks';
import { toggler } from '../mode-toggler/mode-toggler';
import { searchBar } from '../searchBar/searchBar';
import './header.css';

export const highlighters = ['yellow', 'blue', 'pink'];

export const createHeader = () => {
  const $body = document.querySelector('body');
  const $header = document.createElement('header');
  $header.classList.add('flex-container');
  const nav = document.createElement('nav');
  const extras = document.createElement('div');
  extras.classList.add('flex-container');
  const ul = document.createElement('ul');
  headerLinks.forEach((link, index) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.textContent = link.name;
    a.href = link.url;
    li.classList.add('highlighter', highlighters[index % highlighters.length]);
    li.append(a);
    ul.append(li);
  });
  nav.append(ul);
  $header.append(nav, extras);
  $body.prepend($header);
  searchBar(extras);
  toggler(extras);
};
