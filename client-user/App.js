import Register from "./Screens/RegisterScreen";
import Login from "./Screens/LoginScreen";
import LandingPage from "./Screens/LandingScreen";
import MenuPage from "./Screens/MenuScreen";
import ProfilePage from "./Screens/ProfileScreen";
import Menu from "./Screens/MenuBanget";
import MatchHistory from "./Screens/MatchHistory";
import Gamescreen from "./Screens/GameScreen";
import CategoryDetail from "./Screens/CategoryDetailScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Provider } from "react-redux";
import Ionicons from "@expo/vector-icons/Ionicons";
import store from "./stores";
import ResultScreen from "./Screens/ResultScreen";
import LoginPage from "./Screens/LoginScreen";
import PostDetail from "./Screens/PostDetailScreen";
import FoundOpponentScreen from "./Screens/FoundOpponentScreen";


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ShowTab = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "HomePage") {
                        iconName = focused ? "ios-information-circle" : "ios-information-circle-outline";
                    } else if (route.name === "MENU") {
                        iconName = focused ? "restaurant" : "restaurant-outline";
                    } else if (route.name === "Countries") {
                        iconName = focused ? "map" : "map-outline";
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "tomato",
                tabBarInactiveTintColor: "gray",
                headerShown: false,
            })}
        >
            <Tab.Screen name="CategoryDetail" component={CategoryDetail} />
            <Tab.Screen name="Gamescreen" component={Gamescreen} />
            <Tab.Screen name="ResultScreen" component={ResultScreen} />
        </Tab.Navigator>
    );
};

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="LandingPage" component={LandingPage} options={{ headerShown: false }} />
                    <Stack.Screen name="Register" component={Register} options={{ headerTitle: "" }} />
                    <Stack.Screen name="Login" component={LoginPage} />
                    <Stack.Screen name="Home" component={ShowTab} options={{ headerShown: false }} />
                </Stack.Navigator>
                
            </NavigationContainer>

        </Provider>
    );
}
