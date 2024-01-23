import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/home'
import Login from './pages/LogIn'
import SignUp from './pages/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import Auth from './pages/auth/auth'
// import Authentication from './pages/signIn_Up.jsx/index.jsx'




const router = createBrowserRouter([
    {
        path:"/",
        elemnet:<Outlet />,
        errorElement:<NotFound />,
        children:[
            { path:"/home", element:<ProtectedRoute><Home /></ProtectedRoute>,},
            { index:true ,element:<Auth />},
        ],
    },   
],
{
    basename:"/Userauth/"
}
)

const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes