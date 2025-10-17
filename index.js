const generateBtn = document.getElementById('generateBtn');
const display = document.getElementById('display');

const quotes = ['The loudest thunder often follows the quietest storm',
                'Dreams do not expire, but sometimes they need a new direction',
                'Courage is not the absence of fear, but the refusal to be ruled by it',
                'Even shadows need light to exist',
                'Success whispers to the patient and shouts at the persistent',
                'Kindness is the only currency that never loses value',
                'You can not rewrite the past, but you can edit the future',
                'The stars do not compete—they simply shine',
                'Growth begins where comfort ends',
                'A single spark can light a thousand minds'
             ];

const randomIndex = Math.floor(Math.random() * quotes.length);

let randomQuote = quotes[randomIndex];

generateBtn.onclick = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  let randomQuote = quotes[randomIndex];
  
  display.textContent = randomQuote
}

console.log(quotes[randomIndex]);