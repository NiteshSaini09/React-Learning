import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import User from "./components/User/User";
import Github, { gitInfoLoader } from "./components/Github/Github";
import Dashboard from "./AdminRoutes/Pages/Dashboard";
import Orders from "./AdminRoutes/Pages/Orders";
import Nav from "./AdminRoutes/Pages/Nav";
import AdminFooter from "./AdminRoutes/Pages/Foot";

// const myAppRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Schema />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

export const myAppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <Schema
          header={
            window.location.pathname.startsWith("/admin") ? <Nav /> : <Header />
          }
          footer={
            window.location.pathname.startsWith("/admin") ? (
              <AdminFooter />
            ) : (
              <Footer />
            )
          }
        />
      }
    >
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="location" element={<Contact />} />
      <Route path="user/:name" element={<User />} />
      <Route path="admin" element={<Dashboard />} />
      <Route path="admin/orders" element={<Orders />} />
      <Route path="admin/dashboard" element={<Dashboard />} />
      
      <Route loader={gitInfoLoader} path="github" element={<Github />} />
    </Route>,
  ),
);
function Schema({ header = <Header />, footer = <Footer /> }) {
  return (
    <>
      {header}
      <><h1>Hello this is our service</h1></>
      <Outlet />
      {footer}
    </>
  );
}
function Routing() {
  return (
    <>
      <RouterProvider router={myAppRouter} />
    </>
  );
}

export default Routing;
