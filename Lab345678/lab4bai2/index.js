import React from "react";
import { Text, ScrollView, StatusBar, RefreshControl } from "react-native";
import { styles } from "./styles";

const Lab42 = () => {
  const STYLES = ["default", "dark-content", "light-content"];
  const [statusBarStyle, setStatusBarStyle] = React.useState(STYLES[1]); // Thay đổi mặc định thành 'dark-content'  
  const [refreshing, setRefreshing] = React.useState(false);

  const changeStatusBarStyle = () => {
    const nextStyleIndex = (STYLES.indexOf(statusBarStyle) + 1) % STYLES.length;
    setStatusBarStyle(STYLES[nextStyleIndex]);
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      changeStatusBarStyle(); // Đổi màu StatusBar sau khi làm mới  
    }, 2000);
  }, [statusBarStyle]);

  return (
    <ScrollView
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <StatusBar
        barStyle={statusBarStyle}
        translucent
        backgroundColor="transparent"
      />
      <Text style={[styles.text, { textAlign: 'center', fontWeight: 'bold' }]}>
        Kéo xuống để đổi màu Status bar
      </Text>
    </ScrollView>
  );
};

export default Lab42;