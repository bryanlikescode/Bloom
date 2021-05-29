import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

// The main function of the file, returns the Community screen
// The function builds an interface using the ListItem component
export default function CommunityScreen() {
    /* Example data */
    const list = [
        {
            name: "Amy Farha",
            avatar_url: "../assets/images/plant01.png",
            score: 1400,
        },
        {
            name: "Chris Jackson",
            avatar_url: "../assets/images/plant02.png",
            score: 900,
        },
        {
            name: "Guinevere Adams",
            avatar_url: "../assets/images/plant03.png",
            score: 310,
        },
        {
            name: "Sally Walters",
            avatar_url: "../assets/images/plant07.png",
            score: 140,
        },
        {
            name: "Alex Ferguson",
            avatar_url: "../assets/images/plant08.png",
            score: 60,
        },
        {
            name: "Jamie Scott",
            avatar_url: "../assets/images/plant06.png",
            score: 20,
        },
    ];
    return (
        <ScrollView>
            {/* Maps the list into list items */}
            {list.map((l, i) => (
                <ListItem
                    key={i}
                    bottomDivider
                    containerStyle={styles.listContainer}
                >
                    <Avatar rounded source={{ uri: l.avatar_url }} />
                    <ListItem.Content>
                        <ListItem.Title style={styles.listTitle}>
                            {l.name}
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Subtitle style={styles.scoretext}>
                        {l.score + " BP"}
                    </ListItem.Subtitle>
                </ListItem>
            ))}
        </ScrollView>
    );
}

// Styles the newly created list
const styles = StyleSheet.create({
    listTitle: {
        color: "#fff",
        fontFamily: "roboto",
    },
    listContainer: {
        color: "white",
        backgroundColor: "#000",
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: "roboto",
    },
    scoretext: {
        alignContent: "flex-end",
        color: "white",
        fontFamily: "roboto",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
