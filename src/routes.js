import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Mynetwork from "./pages/Mynetwork";
import Messaging from "./pages/Messaging";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";

let routes=[
    {path:'/',element:<Home/>},
    {path:'/mynetwork',element:<Mynetwork />},
    {path:'/jobs',element:<Jobs />},
    {path:'/messaging',element:<Messaging />},
    {path:'/notifications',element:<Notifications />},
    {path:'/profile',element:<Profile />},

]


export default routes