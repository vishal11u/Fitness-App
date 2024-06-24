import React, { useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Video } from "expo-av";
import { FitnessItems } from "../../Context";
import FitnessCards from "../components/Fitness_Cards";
import WorkOutVideo from '../assets/workout.mp4';

const HomeScreen = () => {
    const { minutes, calories, workout } = useContext(FitnessItems);

    const truncateToTwoChars = (value) => {
        const stringValue = value.toString();
        return stringValue.length <= 2 ? stringValue : stringValue.slice(0, 2);
    };

    return (
        <ScrollView style={{ flex: 1 }}>
            <View>
                <View style={styles.videoContainer}>
                    <Video
                        source={WorkOutVideo}
                        style={styles.backgroundVideo}
                        resizeMode="cover"
                        shouldPlay
                        isLooping
                        useNativeControls={false}
                    />
                    <View style={styles.contentOverlay}>
                        {/* <Text style={styles.sectionTitle}>
                            HOME WORKOUT
                        </Text> */}
                        <View style={styles.statsContainer}>
                            <View>
                                <Text style={styles.statValue}>
                                    {truncateToTwoChars(workout)}
                                </Text>
                                <Text style={styles.statLabel}>
                                    WORKOUTS
                                </Text>
                            </View>
                            <View>
                                <Text style={styles.statValue}>
                                    {truncateToTwoChars(calories)}
                                </Text>
                                <Text style={styles.statLabel}>
                                    KCAL
                                </Text>
                            </View>
                            <View className="bg-[#ffffffb7]">
                                <Text style={styles.statValue}>
                                    {truncateToTwoChars(minutes)}
                                </Text>
                                <Text style={styles.statLabel}>
                                    MINS
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Other content after the video section */}
                <FitnessCards />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    videoContainer: {
        position: 'relative',
        height: 350,
        marginBottom: -42,
        borderRadius: 0,
        marginTop: -42,
        overflow: 'hidden',
    },
    backgroundVideo: {
        ...StyleSheet.absoluteFillObject,
    },
    contentOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 0,
        paddingVertical: 0,
        // zIndex:-5
    },
    sectionTitle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        marginTop: 221,
        paddingHorizontal: 15,
        backgroundColor: "#F7931B",
        paddingVertical: 7,
        borderRadius: 15,
        position: 'relative'
    },
    statValue: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    statLabel: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 0,
        marginBottom: 5

    },
});

export default HomeScreen;
