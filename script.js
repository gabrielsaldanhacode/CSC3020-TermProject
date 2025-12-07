let stats = JSON.parse(localStorage.getItem('teamStats')) || [];

function calculatePerGame(goals, assists, games) {
    if (games === 0) return 0;
    return ((goals + assists) / games).toFixed(2);
}

function saveToStorage() {
    localStorage.setItem('teamStats', JSON.stringify(stats));
}

function renderTable() {
    const tableBody = document.getElementById('statTableBody');
    tableBody.innerHTML = ''; 

    stats.forEach((stat, index) => {
        const row = tableBody.insertRow();
        const perGame = calculatePerGame(stat.goals, stat.assists, stat.gamesPlayed);

        row.insertCell().textContent = stat.shirtNumber;
        row.insertCell().textContent = stat.player;
        row.insertCell().textContent = stat.gamesPlayed;
        row.insertCell().textContent = stat.goals;
        row.insertCell().textContent = stat.assists;
        row.insertCell().textContent = perGame;

        const actionCell = row.insertCell();
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'btn btn-danger btn-sm';
        deleteBtn.onclick = function() {
            stats.splice(index, 1);
            saveToStorage();
            renderTable();
        };
        actionCell.appendChild(deleteBtn);
    });
}

document.getElementById('statForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const player = document.getElementById('playerName').value;
    const shirtNumber = document.getElementById('shirtNumber').value;
    const gamesPlayed = parseInt(document.getElementById('gamesPlayed').value) || 0;
    const goals = parseInt(document.getElementById('goals').value) || 0;
    const assists = parseInt(document.getElementById('assists').value) || 0;

    const newStat = {
        player: player,
        shirtNumber: shirtNumber,
        gamesPlayed: gamesPlayed,
        goals: goals,
        assists: assists
    };

    stats.push(newStat);
    saveToStorage();
    renderTable();
    event.target.reset();
});

renderTable();