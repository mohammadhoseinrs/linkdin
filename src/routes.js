import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Mynetwork from "./pages/Mynetwork";
import Messaging from "./pages/Messaging";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

let routes=[
    {path:'/home',element:<Home/>},
    {path:'/', element:<Login/>},
    {path:'/signup',element:<Signup />},
    {path:'/signup',element:<Signup />},
    {path:'/mynetwork',element:<Mynetwork />},
    {path:'/jobs',element:<Jobs />},
    {path:'/messaging',element:<Messaging />},
    {path:'/notifications',element:<Notifications />},
    {path:'/profile',element:<Profile />},

]




export  {routes}