import { renderFooter } from './src/components/footer/footer';
import { createHeader } from './src/components/header/header';

import { socials } from './src/data/socials';

import './style.css';
createHeader();
renderFooter(socials);
