const backgroundColors = ['yellow', 'red', 'green', 'blue', 'black', 'orange', 'pink'];
const buttonChanger = document.querySelector('.backgroundAndQuote');
const body = document.querySelector('body');
const citat = document.querySelector('.quote');
const autor = document.querySelector('.author');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const curentValue = document.querySelector('.value');

const quotes = [
  { author: 'Lao Tzu', quote: 'The journey of a thousand miles begins with one step.' },
  { author: 'Friedrich Nietzsche', quote: 'That which does not kill us makes us stronger.' },
  { author: 'John Lennon', quote: 'Life is what happens when you’re busy making other plans.' },
  { author: 'Joe Kennedy', quote: 'When the going gets tough, the tough get going.' },
  { author: 'Mahatma Gandhi', quote: 'You must be the change you wish to see in the world.' },
  { author: 'Mae West', quote: 'You only live once, but if you do it right, once is enough.' },
  { author: 'Robert H. Schuller', quote: 'Tough times never last but tough people do.' },
  { author: 'Stephen King', quote: 'Get busy living or get busy dying.' },
];

buttonChanger.addEventListener('click', changeBackgroundAndQuote);
plus.addEventListener('click', increment);
minus.addEventListener('click', decrement);

function changeBackgroundAndQuote() {
  let randColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
  body.style.backgroundColor = randColor;

  if (randColor === 'black') {
    citat.style.color = 'white';
    autor.style.color = 'white';
    curentValue.style.color = 'white';
  } else {
    citat.style.color = 'black';
    autor.style.color = 'black';
    curentValue.style.color = 'black';
  }
  let randomQuote = Math.floor(Math.random() * quotes.length);
  citat.innerHTML = quotes[randomQuote].quote;
  autor.innerHTML = `-${quotes[randomQuote].author}`;
}

function increment() {
  let valueOfParagraph = parseInt(curentValue.innerHTML);
  curentValue.innerHTML = `${valueOfParagraph + 1}`;
}

function decrement() {
  let valueOfParagraph = parseInt(curentValue.innerHTML);

  if (valueOfParagraph > 0) {
    curentValue.innerHTML = `${valueOfParagraph - 1}`;
  }
}
