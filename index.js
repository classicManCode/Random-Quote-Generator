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
                'A single spark can light a thousand minds',
                'Life is what happens when you are busy making other plans',
                'Do not go where the path may lead, go instead where there is no path and leave a trail',
                'In the middle of every difficulty lies opportunity',
                'Success is not final, failure is not fatal: It is the courage to continue that counts',
                'Be yourself; everyone else is already taken',
                'The only way to do great work is to love what you do',
                'Believe you can and you are halfway there',
                'Dream big and dare to fail'
             ];




function randomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    let randomQuote = quotes[randomIndex];
    
    display.style.display = 'block'
    display.textContent = randomQuote + '...'
}

generateBtn.onclick = () => {
  randomQuote();
}

console.log(quotes[randomIndex]);