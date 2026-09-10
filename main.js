// Time & Date
function updateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    const date = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

// Update time every second
updateTime();
setInterval(updateTime, 1000);

// Search
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');

function doSearch() {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') doSearch();
});

// Todo List
const todoInput = document.getElementById('todo-text');
const addTodoBtn = document.getElementById('add-todo');
const todoList = document.getElementById('todo-list');

function addTodo() {
    const text = todoInput.value.trim();
    if (!text) return;

    const li = document.createElement('li');
    li.innerHTML = `
        <input type="checkbox">
        <span>${text}</span>
        <button><i class="fas fa-trash"></i></button>
    `;

    li.querySelector('input').addEventListener('change', () => {
        li.classList.toggle('completed', li.querySelector('input').checked);
    });

    li.querySelector('button').addEventListener('click', () => {
        li.remove();
    });

    todoList.appendChild(li);
    todoInput.value = '';
    todoInput.focus();
}

addTodoBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

// Weather (Simple demo)
function updateWeather() {
    const weatherData = [
        { temp: 22, desc: 'Sunny' },
        { temp: 18, desc: 'Cloudy' },
        { temp: 15, desc: 'Rainy' },
        { temp: 25, desc: 'Clear' }
    ];

    const random = weatherData[Math.floor(Math.random() * weatherData.length)];
    document.getElementById('weather-temp').textContent = `${random.temp}°C`;
    document.getElementById('weather-desc').textContent = random.desc;
}

updateWeather();
setInterval(updateWeather, 5 * 60 * 1000);
