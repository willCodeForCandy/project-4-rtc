import './searchBar.css';

export const searchBar = () => {
  const searchBarContainer = document.createElement('div');
  searchBarContainer.id = 'search';
  searchBarContainer.className = 'flex-container';
  const searchIcon = document.createElement('img');
  searchIcon.src = '/assets/magnifier.png';
  searchIcon.alt = 'Search';
  const searchBar = document.createElement('input');
  searchBar.placeholder = '¿Qué buscas?';
  searchIcon.addEventListener('click', () => {
    searchBar.classList.toggle('visible');
  });
  // searchBar.addEventListener('click', search);
  searchBarContainer.append(searchIcon, searchBar);
  const body = document.querySelector('body');
  body.append(searchBarContainer);
};
