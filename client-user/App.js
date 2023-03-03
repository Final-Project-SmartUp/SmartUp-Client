import Register from "./Screens/RegisterScreen"
import Login from "./Screens/LoginScreen"
import LandingPage from "./Screens/LandingScreen"
import MenuPage from "./Screens/MenuScreen"
import ProfilePage from "./Screens/ProfileScreen"
import Menu from "./Screens/MenuBanget"
import MatchHistory from "./Screens/MatchHistory"
// import Gamescreen from "./Screens/GameScreen";
import CategoryDetail from "./Screens/CategoryDetailScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { Provider } from "react-redux"
import store from "./stores"
import ResultScreen from "./Screens/ResultScreen"
// import ChatScreen from "./Screens/ChatScreen"

export default function App() {
    return (
        <Provider store={store} >

            {/* <LandingPage /> */}
            {/* <Register /> */}
            {/* <Login /> */}
            {/* <Gamescreen/> */}
            {/* <CategoryDetail/> */}
            <ResultScreen/>
            {/* <MenuPage /> */}
            {/* <ProfilePage /> */}
            {/* <Menu /> */}
            {/* <MatchHistory /> */}
             {/* <ChatScreen/> */}
  
        </Provider>
    )
}
