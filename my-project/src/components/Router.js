import { createHashRouter, RouterProvider } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Root from "./Root"
function Router(){
    const router = createHashRouter([
        {
            children: [
                { element: <Home />, path: '/' },
                { element: <About />, path: '/about' },
                { element: <Contact />, path: '/contact' }
            ],
            element: <Root />
        }
    ])
    return <RouterProvider router={router} />
}

export default Router
