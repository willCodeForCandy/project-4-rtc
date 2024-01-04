import { highlighters } from '../components/header/header';
import { myProjects } from '../data/myProjects';
import { createProjectsSection } from '../pages/Projects/Projects';

export const search = (e) => {
  const app = document.querySelector('#app');
  const query = e.target.value;
  const filteredProjects = myProjects.filter(
    (project) =>
      project.technologies.includes(query.toLowerCase()) ||
      project.description.toLowerCase().includes(query.toLowerCase()) ||
      project.title.toLowerCase().includes(query.toLowerCase())
  );
  const navItem = document.querySelector('header li.highlighted');
  navItem.classList.remove('highlighted');
  const searchInfo = document.createElement('h3');
  searchInfo.classList.add('search-info');
  if (filteredProjects.length > 0) {
    searchInfo.innerHTML = `Resultados que coinciden con la búsqueda de: <b>${query}</b>`;
    createProjectsSection(filteredProjects, highlighters);
    app.prepend(searchInfo);
  } else {
    searchInfo.innerHTML = `No se encontraron resultados que coincidan con la búsqueda de: <b>${query}</b>`;
    app.innerHTML = '';
    app.append(searchInfo);
  }
  e.target.value = '';
};
