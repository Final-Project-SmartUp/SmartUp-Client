import Register from "./Screens/RegisterScreen";
import Login from "./Screens/LoginScreen";
import LandingPage from "./Screens/LandingScreen";
import ProfilePage from "./Screens/ProfileScreen";
import MatchHistory from "./Screens/MatchHistory";
import { SafeAreaView } from "react-native-safe-area-context";
import Gamescreen from "./Screens/GameScreen";
import CategoryDetail from "./Screens/CategoryDetailScreen";
export default function App() {
  return (
  <SafeAreaView>
     {/* <LandingPage/> */}
     <Gamescreen/>
       {/* <Login/>    */}
       {/* <CategoryDetail/> */}
      {/* // <ProfilePage/>  */}
     {/* <Register/> */}
      {/* // <MatchHistory/>  */}
  </SafeAreaView>
   
  );
}

