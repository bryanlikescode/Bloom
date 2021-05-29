import React from 'react';
import {Goal,ToggleGoal} from './types';

interface GoalItemProps {
    goal: {
        text: string;
        completed: boolean;
      //  toggleGoal: ToggleGoal;
    }
}

export const GoalItem: React.FC<GoalItemProps> = ({goal}) => {
    return(
    <li>
        <label>
            <input type = "checkbox" checked = {goal.completed}/>
            <text>{goal.text}</text>
        </label>
    </li>

    ) 
}