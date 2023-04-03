import './App.css'
// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contact'

// import Root from './components/Root'

// import {
//     createHashRouter,
//     RouterProvider
// } from 'react-router-dom'

import {useState} from 'react'
import SomeComponent from './components/SomeComponent'
import SomeContext from './components/SomeContext'

// import Router from './components/Router'

// function Root() {
//     return (
//         <>
//             <nav>
//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/about">About</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact">Contact</Link>
//                     </li>
//                 </ul>
//             </nav>
//             <Outlet />
//         </>
//     )
// }

function App() {
    const [someValue, setSomeValue] = useState(1)
    return (
        <SomeContext.Provider value={{someValue, setSomeValue}}>
            <SomeComponent />
        </SomeContext.Provider>
    )
    // const router = createHashRouter([
    //     {
    //         children: [
    //             { element: <Home />, path: '/' },
    //             { element: <About />, path: '/about/:userName' },
    //             { element: <Contact />, path: '/contact' }
    //         ],
    //         element: <Root />
    //     }
    // ])
    // return <RouterProvider router={router} />

}

export default App
