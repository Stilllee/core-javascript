function earth() {
  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio', 'appleWatch'],
  };
  let o2 = 9999;

  /* 
  function tiger(){
    console.log( water, o2);
  }
  return tiger

   */

  return function () {
    console.log(water, o2);
  };
}

const ufo = earth();

function handler() {
  let isClicked = false;

  return function () {
    if (isClicked === true) {
      this.style.background = 'transparent';
    } else {
      this.style.background = 'red';
    }
    isClicked = !isClicked;
  };
}

document.querySelector('.first').addEventListener('click', handler());

// isClicked
