import MainLayout from "Layouts/MainLayout";
import About from "pages/About";
import Footer from "pages/Footer";
import Home from "pages/Home";
import Profile from "pages/Profile";
import Signin from "pages/signin";
import Signup from "pages/signup";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([

    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: "/profile",
                element: <Profile></Profile>
            },
            {
                path: "/footer",
                element: <Footer></Footer>
            },
            {
                path: "/signin",
                element: <Signin></Signin>
            },
            {
                path: "/signup",
                element: <Signup></Signup>
            },






        ]
    }

])

export default router;