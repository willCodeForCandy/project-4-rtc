import { highlighters } from '../../components/header/header';
import { myProjects } from '../../data/myProjects';
import { decorateLinks } from '../../helpers/decorateLinks';
import './Projects.css';

const createProjectTemplate = (project, color) => `
<li class="project-container flex-container">
  <h2 class="project-name ${color} slidein">${project.title}</h2>
  <div class="project-description flex-container">
    <div class="polaroid project-image-container">
      <div>
        <img src="${project.screenshot}" alt="${project.imgDescription}">
        <a href="${project.liveUrl}" class="overlay" target="_blank" rel="noopener">
          <span>Ver live</span>
        </a>
      </div>
      <div class="drawer">
          <a href="${project.gitHubUrl}" class="view-code"  target="_blank" rel="noopener">
            <img src="/assets/icons8-code-100.png">
            Ver código
          </a>
      </div>
    </div>
    <div class="project-details">
      <p>${project.description}</p>
    </div>
  </div>
</article>
`;

export const createProjectsSection = (projectList, colorList) => {
  const main = document.querySelector('#app');
  const $descriptionSection = document.createElement('section');
  const $descriptionText = document.createElement('p');
  $descriptionText.innerHTML =
    'Del más reciente al más antiguo, en esta sección se encuentran algunos de los proyectos que hice desde que comencé mi camino en el mundo de la programación. Empezando por maquetaciones sencillas usando solo html y css, pasando por js vanilla, hasta projectos completos back to front con Node.js y React.<br>Este portfolio nació poco después de comenzado ese camino, y está hecho integramente con js vanilla.<br>Si estás buscando algo concreto, podés usar el buscador que se encuentra arriba a la izquierda.';
  $descriptionSection.append($descriptionText);
  $descriptionSection.classList.add('description');

  const $projectsContainer = document.createElement('section');
  const $projectsList = document.createElement('ul');
  $projectsContainer.id = 'proyectos';
  $projectsContainer.classList.add('article-container', 'flex-container');
  $projectsContainer.append($projectsList);

  projectList.forEach((element, index) => {
    const colorIndex = index % colorList.length;
    $projectsList.innerHTML += createProjectTemplate(
      element,
      colorList[colorIndex]
    );
  });
  main.innerHTML = '';
  main.append($descriptionSection, $projectsContainer);
  $projectsContainer.classList.add('fade-in');
};

export const Projects = () => {
  decorateLinks();
  return createProjectsSection(myProjects, highlighters);
};
