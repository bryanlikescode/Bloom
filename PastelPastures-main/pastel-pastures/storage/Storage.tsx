import * as React from 'react';
import {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { ThemeProvider } from '@react-navigation/native';

AsyncStorage.clear();

class Storage extends Component{
    state = {
        name: '',
        BP: null,
        Goals: [],
    }

    componentDidMount = () => {
        (async() => {
            try{await AsyncStorage.getItem('name').then((val) => {
            if (val != '' || val != null){
                this.setState({'name':val})
            }
            else{
                this.setName("Thomas Felton")
            }
        })}catch(error){console.log(error)};
            try{await AsyncStorage.getItem('BP').then((val) =>{
                if(val != null){
                    this.setState({'BP':val});
                }
                else{
                    this.setBP(0);
                }
            })}catch(error){console.log(error)};
            try{await AsyncStorage.getItem('Goals').then((val) => {
                if(val == null || val.length == 0){
                    this.addGoal({name:"Appointments", completed:false, BP: 10, added: false});
                    this.addGoal({name:"Trips", completed:false, BP: 10, added: false});
                }
                else{
                    this.setState({'Goals': val})
                }
            })}catch(error){console.log(error)};
        })();
    }

    setName(name: string){
        (async() => { try {
            await AsyncStorage.setItem('name', name);
        }catch(error){
            console.log(error);
        }
        this.setState({'name': name});
        })();
    }

    setBP(BP: any){
        (async () => {
            try{
                await AsyncStorage.setItem('BP', BP)
                this.setState({'BP': BP});
            } catch(error){console.log(error)};
        })();
    }

    addGoal(goal: any){
        (async() => {
            try{
            const goals = await AsyncStorage.getItem('Goals');
            if (goals !== null){
                const goalsArray = goals ? JSON.parse(goals): [];
                goalsArray.push(goal)
                AsyncStorage.setItem('Goals', JSON.stringify(goalsArray))
                this.setState('Goals', goalsArray)
            }
            } catch(error){}
        })();
    }
}
export default Storage