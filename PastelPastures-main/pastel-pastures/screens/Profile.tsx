import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import { Icon } from "react-native-elements";
import { ProgressBar } from "react-native-paper";
import { Text, View } from "../components/Themed";

const background = require("../assets/images/background.jpg");

const badges = [
    { name: "beach-access", color: "#00aced" },
    { name: "star", color: "#f3a613" },
    { name: "healing", color: "#ba53d1" },
    { name: "games", color: "#d00" },
];
// The main function of the file, returns the Profile screen
export default function Profile() {
    return (
        <View style={styles.container}>
            {/* Set the background, profile picture and name */}
            <View style={styles.header}>
                <ImageBackground
                    source={background}
                    blurRadius={10}
                    style={{ width: "100%", height: "100%" }}
                >
                    <Image
                        style={styles.avatar}
                        source={require("../assets/images/profile.png")}
                    />
                    <Text style={styles.name}>Thomas Felton</Text>
                    <View style={styles.locationContainer}>
                        <Icon
                            name="place"
                            underlayColor="transparent"
                            iconStyle={styles.placeIcon}
                        />

                        <View style={styles.locationRow}>
                            <Text style={styles.location}>Springfield, MO</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            {/* Set the badges */}
            <View style={styles.badgesContainer}>
                <Text style={styles.title}>Badges</Text>
                <View style={styles.badges}>
                    {badges.map((b, i) => {
                        return (
                            <View
                                key={i}
                                style={{ backgroundColor: "transparent" }}
                            >
                                <Icon
                                    name={b.name}
                                    color={b.color}
                                    reverse
                                    underlayColor="transparent"
                                />
                            </View>
                        );
                    })}
                </View>
            </View>

            <View style={styles.badgesContainer}>
                <Text style={styles.title}>Level:</Text>
                <View style={styles.progressContainer}>
                    <ProgressBar progress={0.7} color={"#33AA33"} />
                    <Text
                        style={{
                            alignSelf: "flex-end",
                            fontFamily: "roboto",
                        }}
                    >
                        70/100 BP
                    </Text>
                </View>
            </View>
        </View>
    );
}

// Used to style the Profile page
const styles = StyleSheet.create({
    progressContainer: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        paddingLeft: 10,
        fontFamily: "roboto",
    },
    badgesContainer: {
        margin: 16,
    },
    badges: {
        flexDirection: "row",
        backgroundColor: "transparent",
    },
    placeIcon: {
        color: "white",
        fontSize: 26,
    },
    locationContainer: {
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "transparent",
    },
    locationRow: {
        backgroundColor: "transparent",
    },
    location: {
        color: "#A5A5A5",
        fontSize: 15,
        fontWeight: "600",
        textAlign: "center",
        fontFamily: "roboto",
    },
    header: {
        backgroundColor: "#033500",
        height: 300,
        alignItems: "center",
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "white",
        marginBottom: 20,
        marginTop: 50,
        alignSelf: "center",
    },
    container: {
        flex: 1,
    },
    name: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold",
        paddingBottom: 8,
        textAlign: "center",
        fontFamily: "roboto",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
