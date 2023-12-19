import { decorateLinks } from '../../components/header/header';
import './About.css';

export const About = () => {
  decorateLinks();
  const aboutNav = document.querySelector('a[href="#aboutMe"]');
  aboutNav.parentElement.classList.add('highlighted');
  const profilePic = '/assets/IMG_20221005_145041312.jpg';
  const main = document.querySelector('#app');
  const $aboutContainer = document.createElement('section');
  $aboutContainer.id = 'main-section';
  $aboutContainer.innerHTML = `
  <div class="polaroid"><img src="${profilePic}" alt="Ragnar y yo"></div>
  <div class="description">
  <h2 class="pink">Hey!</h2>
  <p>Mi nombre es Virginia. Nací y crecí en la bellísima ciudad de Buenos Aires, Argentina, y en el año 2019 decidí sacudir un poco las cosas y me mudé a la Costa del Sol en España.</p>
  <p>Ahora, para profundizar el cambio, decidí también dedicarme a algo que me apasiona desde que tengo memoria: la programación. Sonará exagerado pero me acuerdo cuando encontré juegos guardados en las computadoras de la escuela cuando tenía 8 años porque aprendí el comando dir /p. Sentí que había burlado al sistema, que había descubierto un tesoro, que podía hacer lo que sea. Desde entonces hasta hoy pasaron muchísimas cosas, la vida misma. Por suerte, hoy el mundo de la tecnología es mucho más diverso y tengo la oportunidad de dedicarme a lo que me gusta.</p>
  <p>Cuando no estoy tecleando frenéticamente, me gusta jugar juegos de mesa, consumir ciencia ficción en todos sus formatos, caminar por la playa, y apretujar a mis compañeros gatunos Ragnar (en la foto) y El Capitán.</p>
    <div>
  `;
  main.innerHTML = '';
  main.append($aboutContainer);
  $aboutContainer.classList.add('fade-in');
};
