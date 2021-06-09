import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { info, success, error } from '@pnotify/core';

const noticeError = function () {
  error({
    text: 'Too many matches found. Please enter a more specific quary!',
    sticker: false,
    delay: 2000,
  });
};
const noticeInfo = function () {
  info({
    text: 'Country list found. Please enter a more specific quary!',
    sticker: false,
    delay: 2000,
  });
};
const noticeSuccess = function () {
  success({
    text: 'Country found!',
    sticker: false,
    delay: 2000,
  });
};
const valueError = function () {
  error({
    text: 'No such country or wrong value. Try again!',
    sticker: false,
    delay: 3000,
  });
};
export default { noticeError, noticeInfo, noticeSuccess, valueError };