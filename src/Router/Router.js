import Main from "../LayOut/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Orders from "../Pages/Orders/Orders";
import SignUP from "../Pages/SignUp/SignUP";
import PrivateRouter from "../Shared/PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");

const router= createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path: '/signup',
                element: <SignUP></SignUP>
            },
            {
                path:'/checkout/:id',
                element: <PrivateRouter><CheckOut></CheckOut></PrivateRouter>, 
                loader: ({params})=> fetch(`https://genius-server-tau.vercel.app/services/${params.id}`)
            
            },
            {
                path:'/orders',
                element: <PrivateRouter><Orders></Orders></PrivateRouter>
            }
        ]
        
      }
])



export default router;