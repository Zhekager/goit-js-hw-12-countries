import renderCountries from '../templates/list-coutries.hbs'
import renderCountry from '../templates/one-country.hbs'
import debounce from 'lodash.debounce'
import fetchCountries from './fetchCountry'


import { error } from '@pnotify/core'
import "@pnotify/core/dist/PNotify.css";
import { defaultModules } from '@pnotify/core'
import * as PNotifyBootstrap4 from '@pnotify/bootstrap4'
// import '@pnotify/bootstrap4/dist/PNotifyBootstrap4.css';

const containerCountries = document.querySelector('.js-countries');
const inputNameCountry = document.querySelector('#input-name-country');

inputNameCountry.addEventListener('input', debounce(onSearch, 500));

defaultModules.set(PNotifyBootstrap4, {});

function onSearch() {
    containerCountries.innerHTML = '';
    if (!inputNameCountry.value) {
        return;
    };

    fetchCountries(inputNameCountry.value)
        .then(contentOutput)
        .catch(error => alert(error));
}

// функция отрисовки контента
function contentOutput(countries) {
    if (countries.length >= 2 && countries.length <= 10) {
        containerCountries.innerHTML = renderCountries(countries);
        // inputNameCountry.value = '';
    }
    
    if (countries.length === 1) {
        containerCountries.innerHTML = renderCountry(countries);
        // inputNameCountry.value = '';
    }

    if (countries.length > 10) {
        // console.log('Введите запрос точнее');
        error({
            title: "Error:",
            text: "Too many matches found. Please enter a more specific query!"
        });
    }
}