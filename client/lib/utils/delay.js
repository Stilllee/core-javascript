import { getNode } from '../dom/getNode.js';

const first = getNode('.first');

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

// first.style.top = '-100px';
// first.style.transform = 'rotate(360deg)';
// first.style.top = '0px';

delay(() => {
  first.style.top = '-100px';
  delay(() => {
    delay(() => {
      first.style.top = '0px';
    });
    first.style.transform = 'rotate(360deg)';
  });
});
