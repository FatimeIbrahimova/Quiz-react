import MainRoot from "../components/MainRoot"
import Features from "../pages/Features"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Pricing from "../pages/Pricing"
import Resources from "../pages/Resources"
import SignUp from "../pages/SignUp"

const ROUTES = [
    {
        path: '/',
        element: <MainRoot/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "features",
                element: <Features/>
            },
            {
                path:"pricing",
                element: <Pricing/>
            },
            {
                path:"resources",
                element: <Resources/>
            },
            {
                path:"sign",
                element: <SignUp/>
            },
            {
                path:"/login",
                element: <Login/>
            }
        ]
    }
]

export default ROUTES