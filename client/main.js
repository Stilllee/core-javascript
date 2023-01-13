


/* eslint no-undef:'warn' */
/* eslint no-unused-vars: 'off' */







// 1. 인풋 벨류값 가져오기
// 2. 이벤트 핸들러 연결하기
// 3. 이벤트 기본동작 차단하기
// 4. 두 수의 합을 더해주기 
// 5. 화면에 출력하기


import { 
  getNode,
  sum,
  getInputValue,
  clearContents,
  insertLast,
 } from "./lib/index.js";



 



const firstInput = getNode('#firstNumber');
const secondInput = getNode('#secondNumber');
const done = getNode('#done');
const result = getNode('.result');




function handler(e){
  e.preventDefault();

  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue)


  
  clearContents(result);

  insertLast(result,total);
  
}



function inputHandler(){
  let firstValue = +getInputValue(firstInput);
  let secondValue = +getInputValue(secondInput);
  let total = sum(firstValue, secondValue)


  
  clearContents(result);

  insertLast(result,total);
}



done.addEventListener('click',handler)

firstInput.addEventListener('change',inputHandler)
secondInput.addEventListener('change',inputHandler)




















