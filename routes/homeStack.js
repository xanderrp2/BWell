import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import homeScreen from '../screens/homeScreen';
import taskScreen from '../screens/taskScreen';
import journalScreen from '../screens/journalScreen';
import questionnaireScreen from '../screens/questionnaireScreen';


const screens = {
    Home: {
        screen: homeScreen
    },
    Task: {
        screen: taskScreen
    },
    Journal: {
        screen: journalScreen
    },
    Question: {
        screen: questionnaireScreen
    }
}

const HomeStack = createStackNavigator(screens)

export default createAppContainer(HomeStack);
