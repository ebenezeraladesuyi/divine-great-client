/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import HomeLayout from "../layout/HomeLayout";
// import HomeComp from "../pages/HomePage/HomeComp";


const HomeComp = lazy(() => import("../pages/HomePage/HomeComp"))


export const element = createBrowserRouter([
    {
        path:"/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    }
])

