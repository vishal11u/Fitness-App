import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import React from "react";
import fitness from "../services/FitnessData";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
    const FitnessData = fitness;
    const navigation = useNavigation();
    
    return (
        <View>
            {FitnessData.map((item, key) => (
                <Pressable
                    onPress={() => navigation.navigate("Workout", {
                        image: item.image,
                        excersises: item.excersises,
                        id: item.id,
                    })}
                    style={styles.pressable}
                    key={key}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: item.image }}
                    />
                    <Text style={styles.text}>
                        {item.name}
                    </Text>
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name="lightning-bolt"
                        size={24}
                        color="black"
                    />
                </Pressable>
            ))}
        </View>
    );
};

export default FitnessCards;

const styles = StyleSheet.create({
    pressable: {
        alignItems: "center",
        justifyContent: "center",
        margin: 10,
    },
    image: {
        width: "95%",
        height: 140,
        borderRadius: 7,
    },
    text: {
        position: "absolute",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        left: 20,
        top: 20,
    },
    icon: {
        position: "absolute",
        color: "white",
        bottom: 15,
        left: 20,
    },
});
