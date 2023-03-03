import Register from "./Screens/RegisterScreen";
import Login from "./Screens/LoginScreen";
import LandingPage from "./Screens/LandingScreen";
import MenuPage from "./Screens/MenuScreen";
import ProfilePage from "./Screens/ProfileScreen";
import Menu from "./Screens/MenuBanget";
import MatchHistory from "./Screens/MatchHistory";
import { SafeAreaView } from "react-native-safe-area-context";
export default function App() {
  return (
  <SafeAreaView>
    {/* // <LandingPage/>
      // <Login/>   
      // <MenuPage/>
      // <ProfilePage/> */}
     <Register/>
      {/* // <MenuPage/>
      // <MatchHistory/> */}
  </SafeAreaView>
   
  );
}

