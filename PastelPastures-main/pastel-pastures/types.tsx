export type RootStackParamList = {
    Root: undefined;
    NotFound: undefined;
};

export type BottomTabParamList = {
    Profile: undefined;
    AddGoals: undefined;
    Home: undefined;
    History: undefined;
    Community: undefined;
};


export type ManageGoalsParamList = {
    ManageGoalsScreen: undefined;
};
export type HomeScreenParamList = {
    HomeScreen: undefined;
    ManageGoalsScreen: undefined;
};

export type HistoryTabParamList = {
  HistoryScreen: undefined;
};

export type CommunityTabParamList = {
  CommunityScreen: undefined;
};
export type ProfileParamList = {
    Profile: undefined;
};

export type Goal = {
    text: string;
    completed: boolean;
};

export type ToggleGoal = (selectedGoal: Goal) => void;