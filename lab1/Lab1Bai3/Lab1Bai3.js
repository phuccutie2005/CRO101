const players = [
    { name: "Messi", goals: 30 },
    undefined,
    { name: "Ronaldo", goals: 28 },
    { name: "Neymar", goals: 22 },
    { goals: 2 },
    { name: "Mbappé", goals: 25 },
    { name: "Pele", goals: null },
];

// Lọc các cầu thủ hợp lệ
const filteredPlayers = players.filter(function (player) {
    return player && player.name && player.goals;
});

console.log("Danh sách cầu thủ hợp lệ:", filteredPlayers);

// Tìm cầu thủ ghi nhiều bàn thắng nhất
const playerWithMaxGoals = filteredPlayers.reduce(function (maxPlayer, player) {
    return player.goals > (maxPlayer?.goals || 0) ? player : maxPlayer;
}, null);

// Lấy tên cầu thủ ghi nhiều bàn thắng nhất
const playerNameWithMaxGoals = playerWithMaxGoals?.name;

console.log("Cầu thủ có số bàn thắng cao nhất:", playerNameWithMaxGoals);
