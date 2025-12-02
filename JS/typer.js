const words = ['Web Designer', 'Web Devolpers', 'Programmers'];
let index = 0;
const changingText = document.querySelector('#changing-text');

function typeText() {
  const word = words[index];
  let i = 0;
  const intervalId = setInterval(() => {
    changingText.textContent += word[i];
    i++;
    if (i === word.length) {
      clearInterval(intervalId);
      setTimeout(eraseText, 1000);
    }
  }, 100);
}

function eraseText() {
  let i = changingText.textContent.length - 1;
  const intervalId = setInterval(() => {
    changingText.textContent = changingText.textContent.slice(0, i);
    i--;
    if (i === -1) {
      clearInterval(intervalId);
      index++;
      if (index === words.length) {
        index = 0;
      }
      setTimeout(typeText, 500);
    }
  }, 100);
}

typeText();