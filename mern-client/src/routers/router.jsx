import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from '../App';
  import Home from '../home/Home';
  import Shop from '../shop/Predict';
  import About from '../components/About'
  import Blog from '../components/Blog'
  import SingleBook from '../shop/SingleBook'
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LogOut from "../components/LogOut";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/Predict',
            element:<Shop/>
        },
        {
            path:'/about',
            element:<About/>
        },
        {
            path:'/blog',
            element:<Blog/>
        },
        {
          path: "/book/:_id",
          element: <SingleBook/>,
          loader: ({ params }) => fetch(`http://localhost:3000/book/${params._id}`)
      }
      
      ]
    },
    {
      path:"/admin/dashboard",
      element:<DashboardLayout/>,
      children:[
        {
          path:"/admin/dashboard",
          element:<PrivateRoute><Dashboard/></PrivateRoute>,
        },
        {
          path:"/admin/dashboard/upload",
          element:<UploadBook/>,
        },
        {
          path:"/admin/dashboard/manage",
          element:<ManageBooks/>,
        },
        {
          path:"/admin/dashboard/edit-books/:_id",
          element:<EditBooks/>,
          loader:({params})=> fetch(`http://localhost:3000/book/${params._id}`)
        
        },
      ]
    },
    {
      path:"sign-up",
      element:<Signup/>
    },
    {
      path:"login",
      element:<Login/>
    },
    {
      path:"logout",
      element:<LogOut/>
    }
  ]);

export default router