//1. 인풋 밸류값 가져오기
//2. 이벤트 핸들러 연결하기
//3. 이벤트 기본동작 차단하기
//4. 두 수의 합을 더해주기
//5. 화면에 출력하기

/* 
// 내코드
let firstNumber = getNode('#firstNumber');
let secondNumber = getNode('#secondNumber');
let done = getNode('#done');
let result = getNode('.result');

let calculator = (e) => {
  let num1 = Number(firstNumber.value);
  let num2 = Number(secondNumber.value);
  let num3 = num1 + num2;
  e.preventDefault();
  result.textContent = num3;
};

done.addEventListener('click', calculator); */

// 범쌤코드
const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');
const result = getNode('.result');

function getInputValue(node) {
  if (typeof node === 'string') node = getNode(node);
  if (node.tagName !== 'INPUT')
    refError('getInputValue 함수는 INPUT ELEMENT만 허용합니다.');
  return node.value;
}

// const sum = (valueA,valueB) => valueA + valueB;

function sum(valueA, valueB) {
  return valueA + valueB;
}

function clearContents(node) {
  if (typeof node === 'string') node = getNode(node);
  node.textContent = '';
}

function handler(e) {
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);

  insertLast(result, total);
}

function inputHandler() {
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue);

  clearContents(result);

  insertLast(result, total);
}

done.addEventListener('click', handler);

firstInput.addEventListener('change', inputHandler);
secondInput.addEventListener('change', inputHandler);
