import * as React from "react";
import { useState } from "react";
import {
    StyleSheet,
    FlatList,
    Button,
    SafeAreaView,
    Alert,
    CheckBox,
} from "react-native";
import { Overlay, ListItem, Icon, Header } from "react-native-elements";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { GoalItem } from "../GoalItem";
import { Goal, ToggleGoal } from "../types";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { coolDownAsync } from "expo-web-browser";
import AsyncStorage from "@react-native-community/async-storage";
import UserGoals from "../UserGoals.json";

interface Props {
    navigation: any
  }
  
  

class HomeScreen extends React.Component<Props>{
    state = {goals: Array<{name: string, bp: number, completed: boolean}>()};
    constructor(props:any){
        super(props);
        this.SetDefaultGoals();
        this.RetrieveGoals();
        this.getTotalBP();
    }

    CheckGoalStorage() {
        (async() => {
            try {
                let userData = await AsyncStorage.getItem('userGoals');
                return userData;
            } catch (error) {
                console.log(error);
            }
        })
    }

    SetDefaultGoals(){
        if(this.CheckGoalStorage() == null){
            AsyncStorage.clear();
        }
        (async() =>{
            console.log("started user async");
            try {

                await AsyncStorage.setItem('userGoals',JSON.stringify(
                    UserGoals.userGoals
                ))        
            } catch (error) {
                    console.log(error);
                }
        })();
    }

    RetrieveGoals(){
        let userGoals:Array<object> = [];
        (async() => {
            try{
                var userGoalsString = await AsyncStorage.getItem('userGoals');
                if(userGoalsString !== null){
                    console.log(userGoalsString);
                    userGoals = JSON.parse(userGoalsString);
                    console.log(userGoals);
                    this.setState({goals: userGoals});

                }

            } catch(error){
                console.log(error);
            }
        })();
        console.log(userGoals);
    }

    getTotalBP(){
        try{
        let totalBP = 0;
        for(let i = 0; i < this.state.goals.length; i++){
        if(this.state.goals[i].completed){
            totalBP += this.state.goals[i].bp;
        }
        }
    
        return totalBP;
        } catch (error){
        console.log(error);
        }
    
    }

    render(){
        return (
            <View style={styles.container}>
                <Header
                    containerStyle={styles.header}
                    centerComponent={{
                        text: "Time to Bloom",
                        style: { color: "#fff", fontSize: 25, fontFamily: "serif"},
                    }}
                ></Header>
                <Text style={styles.title}>{this.getTotalBP()} BP</Text>
                <View style = {styles.separator} lightColor = "#eee" darkColor = "rgba(255,255,255,0.1)"/>
    
                <View style={styles.list}>
                    {this.state.goals.map((l, i) => (
                        <ListItem
                            key={i}
                            bottomDivider
                            containerStyle={
                                l.completed
                                    ? { backgroundColor: "#609433" }
                                    : { backgroundColor: "#000" }
                            }
                            onPress={() => {
                                Alert.alert(
                                    "I'm proud of you",
                                    !l.completed
                                        ? "Great job! You just earned " +
                                              l.bp +
                                              " Bloom Points"
                                        : "You're doing a great job"
                                );
                                l.completed = !l.completed;
                                this.setState({goals: this.state.goals});
                            }}
                        >
      
                            <ListItem.Content>
                                
                                <ListItem.Title style={{ color: "white", fontFamily: "serif" }}>
                                    
                                    {l.name}
                                </ListItem.Title>
                            </ListItem.Content>
                            <ListItem.Chevron
                                style={styles.rightIcon}
                                iconProps={
                                    l.completed
                                        ? { name: "check", size: 21 }
                                        : { name: "remove", size: 21 }
                                }
                            />
                        </ListItem>
                    ))}
                </View>
                <View style={styles.list}>

                    <ListItem
                        containerStyle={styles.listItem}
                        onPress={() => {
                            this.props.navigation.navigate("ManageGoalsScreen");
                        }}
                    >
                        {<Icon name="plus" type="font-awesome" color="#3b7a31" />}
                        <ListItem.Content>

                            <ListItem.Title style={{ color: "#fff", fontFamily: "serif" }}>
                                {"Add a New Goal"}
                            </ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                </View>

            </View>
        );
    }
}

export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
    },
    title: {
        fontSize: 20,
        textAlign: "center",
        fontFamily: "roboto",
        padding: 15,
    },
    separator: {
        marginVertical: 0,
        height: 2,
        width: "100%",
    },
    centerComponent: {
        fontSize: 20,
    },
    list: {
        backgroundColor: "#609433",
    },
    rightIcon: {
        alignSelf: "flex-end",
    },
    header: {
        color: "#033500",
        backgroundColor: "#609433",
        fontSize: 20,
    },
    listTitle1: {
        padding: 13,
        fontSize: 12,
        alignSelf: "center",
    },
    listItem: {
        backgroundColor: "#000",
    },
});
