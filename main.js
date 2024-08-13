import { renderFooter } from './src/components/footer/footer';
import { createHeader } from './src/components/header/header';
import { socials } from './src/data/socials';
import { setRouter } from './src/helpers/router';
import { About } from './src/pages/About/About';

import './style.css';
document.body.className = localStorage.getItem('theme') || '';
createHeader();
renderFooter(socials);
About();
setRouter();
