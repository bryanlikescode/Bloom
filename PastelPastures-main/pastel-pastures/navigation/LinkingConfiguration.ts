import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
          Profile: {
            screens: {
              Profile: 'profile',
            },
          },
          HistoryTab: {
            screens: {
              HistoryScreen: 'history',
            },
          },
          CommunityTab: {
            screens: {
              CommunityScreen: 'community',
          },
        },
          ManageGoals:{
            screens:{
              ManageGoalsScreen: 'manage',
          },
        },
      },
    },
      NotFound: '*',
    },
  },
};
