/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

let number = prompt('숫자를 입력해 주세요',0);


let message = 
(number > 0) ? '1' : 
(number < 0) ? '-1': 
'아무것도 아닙니다.';

console.log(message);



/* 
if(number > 0){
  
}else if(number < 0){
  
}else{
  
}
 */







// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = 'yes';

// 영화 볼거니?
let goingToWatchMovie = 'no';



if(didWatchMovie.includes('yes')){ // if 문(statement)
  console.log('그거 재밌더라..?');

}else if(goingToWatchMovie === 'yes'){ // else if 복수 조건 처리
  console.log('너무 설렌다~~');

}else{ // else 절(caluse)
  console.log('음...난 별루');
}




let movieMessage = 
(didWatchMovie.includes('yes')) ? '그거 재밌더라' :
(goingToWatchMovie === 'yes') ? '너무 설렌다~~' : '난 별루...'





// 조건부 연산자

// 멀티 조건부 연산자 식














