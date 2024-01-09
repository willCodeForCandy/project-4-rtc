import { highlighters } from '../components/header/header';
import { myExperience } from '../data/experience';
import { myProjects } from '../data/myProjects';
import { createProjectsSection } from '../pages/Projects/Projects';
import { renderSearchResults } from '../pages/searchResults/searchResults';

const searchEngine = (query) => {
  const searchResults = [];
  myProjects.forEach((project) => {
    for (const key in project) {
      if (typeof project[key] === 'string') {
        if (project[key].toLowerCase().includes(query.toLowerCase())) {
          if (!searchResults.includes(project)) {
            project['section'] = 'projects';
            searchResults.push(project);
          }
        }
      } else {
        if (project[key].includes(query.toLowerCase())) {
          if (!searchResults.includes(project)) {
            project['section'] = 'projects';
            searchResults.push(project);
          }
        }
      }
    }
  });
  myExperience.forEach((project) => {
    for (const key in project) {
      if (typeof project[key] === 'string') {
        if (project[key].toLowerCase().includes(query.toLowerCase())) {
          if (!searchResults.includes(project)) {
            project['section'] = 'experience';
            searchResults.push(project);
          }
        }
      } else {
        if (project[key].includes(query.toLowerCase())) {
          if (!searchResults.includes(project)) {
            project['section'] = 'experience';
            searchResults.push(project);
          }
        }
      }
    }
  });
  return searchResults;
};
export const search = (e) => {
  const app = document.querySelector('#app');
  const searchResults = searchEngine(e.target.value);
  const navItem = document.querySelector('header li.highlighted');
  navItem?.classList.remove('highlighted');
  const searchInfo = document.createElement('h3');
  searchInfo.classList.add('search-info');
  app.innerHTML = '';
  if (searchResults.length > 0) {
    searchInfo.innerHTML = `Resultados que coinciden con la búsqueda de: <b>${e.target.value}</b>`;
    console.log(searchResults);
    app.append(searchInfo, renderSearchResults(searchResults));
  } else {
    searchInfo.innerHTML = `No se encontraron resultados que coincidan con la búsqueda de: <b>${e.target.value}</b>`;
    app.append(searchInfo);
  }
  e.target.value = '';
};
