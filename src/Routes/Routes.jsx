import { Navigate, useRoutes } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import Home from "../View/Pages/Home";
import Errorpage from '../View/Pages/Errorpage';
import About from "../View/Pages/About/About";
import Services from "../View/Pages/Services/Services";

const Routes =()=>{
    const element = useRoutes([
        {
            path:'/',
            element: <Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                }, 
                {
                    path:'/about',
                    element:<About/>
                }, 
                {
                    path:'/services',
                    element:<Services/>
                },    
            ]
        },
        {
          path:'/404',
          element:<Errorpage/>
        },
        {
          path: "*",
          element: <Navigate to="/404"/>,
        }
    ])
    return element;
}

export default Routes;