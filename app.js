const tg = window.Telegram.WebApp;
tg.expand(); // Раскрываем на весь экран

const factElement = document.getElementById('fact');
const newFactBtn = document.getElementById('new-fact-btn');

// Массив с фактами
const facts = [
    "Пчелы могут распознавать человеческие лица",
    "Осьминоги имеют три сердца",
    "Венера - единственная планета, вращающаяся против часовой стрелки"
];

// Показ случайного факта
function showRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    factElement.innerText = facts[randomIndex];
}

// Инициализация
showRandomFact();

// Обработчик кнопки
newFactBtn.addEventListener('click', showRandomFact);
