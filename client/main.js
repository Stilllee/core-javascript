/* global gsap */

import {
  clearContents,
  getInputValue,
  getNode,
  getRandom,
  insertLast,
  isNumericString,
  addClass,
  removeClass,
  toggleClass,
  showAlert,
  copy,
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

    // GSAP
    gsap.fromTo(
      resultArea,
      0.01,
      { x: -5 },
      { x: 5, clearProps: 'x', repeat: 20 }
    );
    // addClass(resultArea,'shake');
    // setTimeout(() => {
    //   removeClass(resultArea,'shake');
    // }, 1000);

    return;
  }

  if (isNumericString(name)) {
    console.log('제대로된 이름을 입력해주세요.');
    gsap.fromTo(
      resultArea,
      0.01,
      { x: -5 },
      { x: 5, clearProps: 'x', repeat: 20 }
    );
    showAlert('.alert-error', '정확한 이름을 입력해주세요!', 2000);
    return;
  }

  clearContents(resultArea);
  insertLast(resultArea, pick);
}

function clickCopyHandler() {
  let text = resultArea.textContent;
  // navigator.clipboard.writeText(text);
  copy(text).then(() => {
    showAlert('.alert-success', '클립보드 복사가 완료됐습니다.', 2000);
  });

  // 약속구문

  // 약속
  // 다음 해야 할 일
}

submit.addEventListener('click', clickSubmitHandler);
resultArea.addEventListener('click', clickCopyHandler);
