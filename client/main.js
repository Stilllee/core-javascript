import { getNode as $, loadStorage, saveStorage } from './lib/index.js';

const textField = $('#textField');
const deleteButton = $('input[value="삭제"]');

loadStorage('area').then((res) => {
  textField.value = res;
});

function inputHandler() {
  saveStorage('area', textField.value);
}

textField.addEventListener('input', inputHandler);
