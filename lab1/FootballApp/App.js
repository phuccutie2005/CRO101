import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const App = () => {
  const players = [
    { name: "Messi", goals: 30 },
    undefined,
    { name: "Ronaldo", goals: 28 },
    { name: "Neymar", goals: 22 },
    { goals: 2 },
    { name: "Mbappé", goals: 25 },
    { name: "Pele", goals: null },
  ];

  // Lọc các cầu thủ hợp lệ (đảm bảo rằng cả tên và số bàn thắng đều hợp lệ)
  const filteredPlayers = players.filter(
    (player) => player && player.name && typeof player.goals === "number"
  );

  // Tìm cầu thủ ghi nhiều bàn thắng nhất
  const playerWithMaxGoals = filteredPlayers.reduce((maxPlayer, player) => {
    return player.goals > (maxPlayer?.goals || 0) ? player : maxPlayer;
  }, null);

  // Lấy tên cầu thủ ghi nhiều bàn thắng nhất
  const playerNameWithMaxGoals = playerWithMaxGoals?.name || "Không có cầu thủ hợp lệ";

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Danh Sách Cầu Thủ:</Text>
      <FlatList
        data={filteredPlayers}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text style={styles.player}>
            {item.name}: {item.goals} bàn
          </Text>
        )}
      />
      <Text style={styles.header}>
        Cầu thủ ghi nhiều bàn thắng nhất:{" "}
        <Text style={styles.highlight}>{playerNameWithMaxGoals}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  player: {
    fontSize: 16,
    marginVertical: 5,
  },
  highlight: {
    color: "blue",
  },
});

export default App;
