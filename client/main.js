import { xhrData, insertLast, xhrPromise, tiger, delayP } from './lib/index.js';

async function render() {
  await delayP(2000);
  let response = await tiger.get(
    'https://jsonplaceholder.typicode.com/users/1'
  );

  console.log(response.data);
}

render();
