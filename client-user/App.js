import Register from "./Screens/RegisterScreen"
import Login from "./Screens/LoginScreen"
import LandingPage from "./Screens/LandingScreen"
import MenuPage from "./Screens/MenuScreen"
import ProfilePage from "./Screens/ProfileScreen"
import Menu from "./Screens/MenuBanget"
import MatchHistory from "./Screens/MatchHistory"

import { Provider } from "react-redux"
import store from "./stores"
export default function App() {
    return (
        <Provider store={store} >
            {/* <LandingPage /> */}
            <Login />
            {/* <MenuPage /> */}
            {/* <ProfilePage /> */}
            {/* <Register /> */}
            {/* <Menu /> */}
            {/* <MatchHistory /> */}
        </Provider>
    )
}
