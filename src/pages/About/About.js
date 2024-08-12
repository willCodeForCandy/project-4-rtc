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
  <h2 class="pink">¡Hola!</h2>
  <p>Mi nombre es Virginia. Nací y crecí en la ciudad de Buenos Aires, Argentina, y en el año 2019 decidí sacudir un poco las cosas y me mudé a la Costa del Sol en España.</p>
  <p>En 2023, para profundizar el cambio, decidí también dedicarme a algo que me apasiona desde que tengo memoria: la programación. Sonará exagerado pero me acuerdo cuando aprendí el comando dir /p y encontré juegos guardados en las computadoras de la escuela, a los 8 años. Sentí que había burlado al sistema, que había descubierto un tesoro, que podía hacer lo que sea. Desde entonces hasta hoy pasaron muchísimas cosas, múltiples trabajos, distintas carreras. Por suerte, hoy el mundo de la tecnología es mucho más diverso y tengo la oportunidad de dedicarme a lo que me gusta.</p>
  <p>Cuando no estoy tecleando frenéticamente, me gusta jugar juegos de mesa, tejer amigurumis, consumir ciencia ficción en todos sus formatos, conocer lugares nuevos, y apretujar a mis compañeros gatunos Ragnar (en la foto) y El Capitán.</p>
    <div>
  `;
  main.innerHTML = '';
  main.append($aboutContainer);
  $aboutContainer.classList.add('fade-in');
};
