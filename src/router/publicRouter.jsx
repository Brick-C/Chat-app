import Activation from "../pages/auth/Activation";
import AuthHome from "../pages/auth/AuthHome";
import Forgot from "../pages/auth/Forgot";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

// create public router
const publicRouter = [
  {
    path: "/auth",
    element: <AuthHome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
  },
  {
    path: "/activation",
    element: <Activation />,
  },
  {
    path: "/activation/:tokenURL",
    element: <Activation />,
  },
];

// export router
export default publicRouter;
