let yes = true;

function getTruthOrLie(answer) {
  if (answer) {
    return;
  }
  alert("거짓말쟁이!"); // (*)
  // ...
}

getTruthOrLie(yes);
