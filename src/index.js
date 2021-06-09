import './sass/main.scss';

import refs from './js/refs';
import countryList from './js/countryList';
import loading from './js/loading';

const debounce = require('debounce');

refs.countryNameInput.addEventListener('input', loading);
refs.countryNameInput.addEventListener('input', debounce(countryList, 500));