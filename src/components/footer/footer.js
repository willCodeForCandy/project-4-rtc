import { socials } from '../../data/socials';
import './footer.css';

export const renderFooter = (arrayOfSocials) => {
  const $body = document.querySelector('body');
  const $footer = document.createElement('footer');
  for (const item of arrayOfSocials) {
    $footer.innerHTML += `
            <div>
                <a href=${item.url} target="_blank" rel="noopener">
                    <img src="${item.icon}" alt="My ${item.name}">
                </a>
            </div>`;
  }
  $body.append($footer);
};
