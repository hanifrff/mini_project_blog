import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Myblogs from "./pages/Myblogs";
import Verify from "./pages/Verify";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./pages/Singlepost";
import "./style.scss";
import Verification from "./pages/Verification";
import Profile from "./pages/Profile";
import { createContext, useEffect, useState } from "react";
import Changepassword from "./pages/Changepassword";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export const LoginContext = createContext({
  token: "",
  setToken: () => {},
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "/post/:id",
      //   element: <Single />,
      // },
      {
        path: "/Write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/changepassword",
        element: <Changepassword />,
      },
      {
        path: "/myblogs",
        element: <Myblogs />,
      },
      {
        path: "/:id",
        element: <Single />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/verification/:token",
    element: <Verification />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/myblogs",
    element: <Myblogs />,
  },
]);

function App() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const tokenStg = localStorage.getItem("token");
    if (tokenStg) {
      setToken(tokenStg);
    }
  }, []);

  return (
    <div className="app">
      <div className="container">
        <LoginContext.Provider value={{ token, setToken }}>
          <RouterProvider router={router} />
        </LoginContext.Provider>
      </div>
    </div>
  );
}

export default App;
