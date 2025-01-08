import React from 'react';
import { Image, StyleSheet, Platform, Text, View, FlatList } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Danh sách cầu thủ  
const players = [
  { name: 'Messi', goals: 30 },
  undefined,  // undefined không hợp lệ
  { name: 'Ronaldo', goals: 28 },
  { name: 'Neymar', goals: 22 },
  { goals: 2 },  // Không có tên
  { name: 'Mbappé', goals: 25 },
  { name: 'Pele', goals: null },  // goals là null
];

// Hàm kiểm tra cầu thủ hợp lệ  
function isValidPlayer(player) {
  return player && typeof player.name === 'string' && typeof player.goals === 'number';
}

export default function App() {
  // Lọc danh sách cầu thủ hợp lệ  
  const validPlayers = players.filter(isValidPlayer);

  // Tìm cầu thủ ghi bàn thắng nhiều nhất  
  const topScorer = validPlayers.reduce((max, player) => {
    return (player.goals > (max?.goals || 0)) ? player : max;
  }, null);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Chào mừng Trần Văn Phúc</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bước 1: Thử nghiệm</ThemedText>
        <ThemedText>
          Chỉnh sửa <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> để xem thay đổi.
          Nhấn{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          để mở công cụ dành cho nhà phát triển.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bước 2: Khám phá</ThemedText>
        <ThemedText>
          Nhấn vào tab "Explore" để tìm hiểu thêm về những gì có trong ứng dụng khởi đầu này.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Bước 3: Bắt đầu mới</ThemedText>
        <ThemedText>
          Khi bạn đã sẵn sàng, chạy{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> để làm mới thư mục{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText>. Thao tác này sẽ chuyển thư mục hiện tại{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> thành{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>

      {/* Phần thống kê cầu thủ */}
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Thống kê cầu thủ bóng đá</ThemedText>
        <View style={styles.container}>
          <Text style={styles.subtitle}>Danh sách cầu thủ hợp lệ:</Text>
          {/* Kiểm tra nếu không có cầu thủ hợp lệ */}
          {validPlayers.length === 0 ? (
            <Text style={styles.message}>Không có cầu thủ hợp lệ</Text>
          ) : (
            <FlatList
              data={validPlayers}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={styles.playerItem}>{item.name} - {item.goals} bàn thắng</Text>
              )}
            />
          )}

          {/* Hiển thị cầu thủ ghi nhiều bàn thắng nhất */}
          {topScorer ? (
            <Text style={styles.topScorer}>
              Cầu thủ ghi nhiều bàn thắng nhất: {topScorer.name} với {topScorer.goals} bàn thắng
            </Text>
          ) : (
            <Text style={styles.topScorer}>Không có cầu thủ nào ghi bàn hợp lệ.</Text>
          )}
        </View>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  playerItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  topScorer: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: 'red',
  },
});
