import React from "react";
import { StyleSheet, Text, View, TextInput, Image, Button } from "react-native";
import { FlatList } from "react-native";

// Dữ liệu mẫu  
const data = [
    { id: "1", avatarSource: require("./images/avt1.jpg"), name: "John Doe" },
    { id: "2", avatarSource: require("./images/Derp_Nahida.png"), name: "Jane Doe" },
    // Thêm các mục khác vào đây  
];

const ListItem = ({ avatarSource, name, onCallPress }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
            <Image
                source={avatarSource}
                style={{ width: 50, height: 50, borderRadius: 25 }}
            />
            <Text style={{ flex: 1, marginLeft: 10, color: "red" }}>{name}</Text>
            <Button title="Call" onPress={onCallPress} />
        </View>
    );
};

const Lab4 = () => {
    const handleCallPress = () => {
        // Xử lý việc gọi khi nút "Call" được nhấn  
    };

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <ListItem
                    avatarSource={item.avatarSource}
                    name={item.name}
                    onCallPress={handleCallPress}
                />
            )}
        />
    );
};

export default Lab4;