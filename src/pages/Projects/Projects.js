import { decorateLinks, highlighters } from '../../components/header/header';
import { myProjects } from '../../data/myProjects';
import './Projects.css';

const createProjectTemplate = (project, color) => `
<article class="project-container">
  <h2 class="project-name ${color} slidein">${project.title}</h2>
  <div class="project-description">
    <div class="polaroid project-image-container">
      <img src="${project.screenshot}" alt="${project.imgDescription}">
      <div class="overlay">
          <a href="${project.liveUrl}" target="_blank" rel="noopener">Ver live</a>
      </div>
      <div class="drawer">
          <a href="${project.gitHubUrl}" class="view-code"  target="_blank" rel="noopener"><img src="/assets/icons8-code-100.png">Ver código</a>
      </div>
    </div>
    <div class="project-details">
      ${project.description}
    </div>
  </div>
</article>
`;

const createProjectsSection = (projectList, colorList) => {
  const main = document.querySelector('#app');
  const $projectsContainer = document.createElement('section');
  $projectsContainer.id = 'proyectos';
  $projectsContainer.classList.add('article-container');

  projectList.forEach((element, index) => {
    const colorIndex = index % colorList.length;
    $projectsContainer.innerHTML += createProjectTemplate(
      element,
      colorList[colorIndex]
    );
  });
  main.innerHTML = '';
  main.append($projectsContainer);
};

export const Projects = (ev) => {
  decorateLinks(ev);
  return createProjectsSection(myProjects, highlighters);
};
