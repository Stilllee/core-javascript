import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  addClass,
  removeClass,
} from './lib/index.js';

import { jujeobData } from './data/data.js';

const submit = getNode('#submit');
const resultArea = getNode('.result');

function clickSubmitHandler(e) {
  e.preventDefault();

  let name = getInputValue('#nameField');
  let list = jujeobData(name);
  let pick = list[getRandom(list.length - 1)];

  if (!name) {
    console.log('이름을 입력해 주세요!');
    showAlert('.alert-error', '잘못된 정보입니다.!', 2000);
    return;
  }

  if (isNumericString(name)) {
    console.log('제대로된 이름을 입력해주세요.');
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

submit.addEventListener('click', clickSubmitHandler);
