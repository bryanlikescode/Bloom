import { preventAutoHide } from "expo-splash-screen";
import * as React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ListItem, Avatar, colors } from "react-native-elements";
import { Icon } from "react-native-elements";

const list = [
    {
        timeframe: "Monday",
        completion: "75%",
        goal1: "walk your dog",
        goal2: "eat a cracker",
        goal3: "sleep",
        goal4: "shower",
    },
    {
        timeframe: "Tuesday",
        completion: "75%",
        goal1: "walk your dog",
        goal2: "eat a cracker",
        goal3: "sleep",
        goal4: "shower",
    },
    {
        timeframe: "Wednesday",
        completion: "50%",
        goal1: "walk your dog",
        goal2: "eat a cracker",
        goal3: "sleep",
        goal4: "shower",
    },
    {
        timeframe: "Thursday",
        completion: "50%",
        goal1: "walk your dog",
        goal2: "eat a cracker",
        goal3: "sleep",
        goal4: "shower",
    },
    {
        timeframe: "Friday",
        completion: "75%",
        goal1: "walk your dog",
        goal2: "eat a cracker",
        goal3: "sleep",
        goal4: "shower",
    },
    {
        timeframe: "Saturday",
        completion: "100%",
        goal1: "walk your dog",
        goal2: "eat a cracker",
        goal3: "sleep",
        goal4: "shower",
    },
    {
        timeframe: "Sunday",
        completion: "50%",
        goal1: "walk your dog",
        goal2: "eat a cracker",
        goal3: "sleep",
        goal4: "shower",
    },
];
// Main function of the file, returns the History screen
// The function builds an interface using the ListItem component
export default function HistoryScreen() {
    return (
        <ScrollView>
            {/* Maps the list into list items */}
            {list.map((l, i) => (
                <React.Fragment key={i}>
                    <ListItem
                        containerStyle={styles.timeContainer}
                        bottomDivider
                    >
                        <ListItem.Content>
                            <ListItem.Title style={styles.title}>
                                {l.timeframe}
                            </ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Subtitle style={styles.subtext}>
                            {l.completion}
                        </ListItem.Subtitle>
                    </ListItem>
                    <ListItem
                        key={i + list.length}
                        containerStyle={styles.listItem}
                        bottomDivider
                    >
                        <ListItem.Content>
                            <ListItem.Title style={styles.goaltext}>
                                <Icon
                                    name="check-circle-o"
                                    type="font-awesome"
                                />{" "}
                                {l.goal1}
                            </ListItem.Title>

                            <ListItem.Title
                                key={l.goal2}
                                style={styles.goaltext}
                            >
                                <Icon
                                    name="times-circle-o"
                                    type="font-awesome"
                                />{" "}
                                {l.goal2}
                            </ListItem.Title>

                            <ListItem.Title
                                key={l.goal3}
                                style={styles.goaltext}
                            >
                                <Icon
                                    name="check-circle-o"
                                    type="font-awesome"
                                />{" "}
                                {l.goal3}
                            </ListItem.Title>

                            <ListItem.Title
                                key={l.goal4}
                                style={styles.goaltext}
                            >
                                <Icon
                                    name="times-circle-o"
                                    type="font-awesome"
                                />{" "}
                                {l.goal4}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </React.Fragment>
            ))}
        </ScrollView>
    );
}
// Styling for the built list
const styles = StyleSheet.create({
    timeContainer: {
        backgroundColor: "#609433",
    },
    container: {
        flex: 1,
        alignItems: "flex-start",
    },
    title: {
        fontSize: 20,
        color: "white",
        fontFamily: "roboto",
    },
    goaltext: {
        fontSize: 16,
        color: "white",
        fontFamily: "roboto",
    },
    subtext: {
        alignItems: "flex-end",
        fontSize: 16,
        color: "#c4c4c4",
        fontFamily: "roboto",
    },
    listItem: {
        backgroundColor: "#000",
    },
    separator: {
        marginVertical: 3,
        height: 1,
        width: "80%",
    },
});
