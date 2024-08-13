import { myExperience } from '../../data/experience';
import { decorateLinks } from '../../helpers/decorateLinks';
import './Experience.css';

const experienceCard = experienceInfo => {
  const container = document.createElement('article');
  container.classList.add('flex-container', 'experience');
  const title = document.createElement('h2');
  const duration = document.createElement('p');
  const description = document.createElement('p');
  title.innerText = experienceInfo.title;
  duration.innerText = experienceInfo.description;
  description.innerText = experienceInfo.company;
  container.style.backgroundImage = `url(${experienceInfo.image})`;
  container.append(title, duration, description);

  return container;
};

const createExperienceSection = experienceList => {
  const main = document.querySelector('#app');
  const $experienceContainer = document.createElement('section');
  $experienceContainer.id = 'experiencia';
  $experienceContainer.classList.add('flex-container');

  experienceList.forEach(element => {
    $experienceContainer.append(experienceCard(element));
  });
  main.innerHTML = '';
  main.append($experienceContainer);
  $experienceContainer.classList.add('fade-in');
};

export const Experience = () => {
  decorateLinks();
  const experienceNav = document.querySelector('a[href="#Experience"]');
  experienceNav.parentElement.classList.add('highlighted');
  return createExperienceSection(myExperience);
};
