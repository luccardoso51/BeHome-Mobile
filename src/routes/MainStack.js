import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "../screens/Login";
import Register from "../screens/Register";

import Feed from "../screens/Feed";
import MyPosts from "../screens/MyPosts";
import CreatePost from "../screens/CreatePost";

const Stack = createStackNavigator(
  {
    Login,
    Feed,
    Register,
    MyPosts,
    CreatePost
  },
  {
    initialRouteName: "Login",
    headerMode: "none",
    mode: "modal"
  }
);

const MainStack = createAppContainer(Stack);

export default MainStack;
