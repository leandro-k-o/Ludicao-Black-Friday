import '../styles/main.scss';
import './depoimentos';
import './countdown';
import './buttons';
import './comprar_modal';
import logo from '../assets/nos.webp';
import nosPraca from '../assets/nos-praca.webp';

const imgLogo = document.querySelector('[data-img]');
const imgNosPraca = document.querySelector('[data-img-nos]');
imgLogo.src = logo;
imgNosPraca.src = nosPraca;
