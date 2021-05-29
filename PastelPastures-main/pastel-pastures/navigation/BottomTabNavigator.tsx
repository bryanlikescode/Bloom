import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import CommunityScreen from "../screens/CommunityScreen";
import HistoryScreen from "../screens/HistoryScreen";
import Profile from "../screens/Profile";
import ManageGoalsScreen from "../screens/ManageGoalsScreen";
import HomeScreen from "../screens/HomeScreen";
import {
    BottomTabParamList,
    HomeScreenParamList,
    ManageGoalsParamList,
    ProfileParamList,
    HistoryTabParamList,
    CommunityTabParamList,
} from "../types";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Home"
            tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
        >
            <BottomTab.Screen
                name="Home"
                component={HomeScreenNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-home" color={color} />
                    ),
                }}
            />
            {/* <BottomTab.Screen
                name="AddGoals"
                component={ManageGoalsNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-add" color={color} />
                    ),
                }}
            ></BottomTab.Screen> */}

            <BottomTab.Screen
                name="Profile"
                component={ProfileNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-contact" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="History"
                component={HistoryTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-list" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="Community"
                component={CommunityTabNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="ios-people" color={color} />
                    ),
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen
                name="Profile"
                component={Profile}
                options={{ headerTitle: "Profile" }}
            />
        </ProfileStack.Navigator>
    );
}

const ManageGoalsStack = createStackNavigator<ManageGoalsParamList>();

function ManageGoalsNavigator() {
    return (
        <ManageGoalsStack.Navigator>
            <ManageGoalsStack.Screen
                name="ManageGoalsScreen"
                component={ManageGoalsScreen}
                options={{ headerTitle: "Manage Goals" }}
            />
        </ManageGoalsStack.Navigator>
    );
}

const HomeScreenStack = createStackNavigator<HomeScreenParamList>();

function HomeScreenNavigator() {
    return (
        <HomeScreenStack.Navigator>
            <HomeScreenStack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{ headerTitle: "Dashboard" }}
            />
            <HomeScreenStack.Screen
                name="ManageGoalsScreen"
                component={ManageGoalsScreen}
                options={{ headerTitle: "Add Goals" }}
            />
        </HomeScreenStack.Navigator>
    );
}

const HistoryTabStack = createStackNavigator<HistoryTabParamList>();

function HistoryTabNavigator() {
    return (
        <HistoryTabStack.Navigator>
            <HistoryTabStack.Screen
                name="HistoryScreen"
                component={HistoryScreen}
                options={{ headerTitle: "History" }}
            />
        </HistoryTabStack.Navigator>
    );
}

const CommunityTabStack = createStackNavigator<CommunityTabParamList>();

function CommunityTabNavigator() {
    return (
        <CommunityTabStack.Navigator>
            <CommunityTabStack.Screen
                name="CommunityScreen"
                component={CommunityScreen}
                options={{ headerTitle: "Community" }}
            />
        </CommunityTabStack.Navigator>
    );
}
