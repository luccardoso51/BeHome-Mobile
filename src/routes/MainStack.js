import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";
import Feed from "../screens/Feed";

const Stack = createStackNavigator(
  {
    Login,
    Feed,
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
    mode: "modal"
  }
);

const MainStack = createAppContainer(Stack);

export default MainStack;
