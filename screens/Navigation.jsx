import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { FullPostScreen } from "./FullPost";
import { HomeScreen } from "./Home";
const Stack = createNativeStackNavigator();


//<Routes>....</Routes> => Stack.Navigator
export const Navigation =()=>{

    return (

      <NavigationContainer>

    <Stack.Navigator>

    <Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{title:"Список Аниме"}}
    />


    <Stack.Screen
    name="FullPost"
    component={FullPostScreen}
    options={{title:"Информация"}}
    />
    </Stack.Navigator>

    </NavigationContainer>


    );

}