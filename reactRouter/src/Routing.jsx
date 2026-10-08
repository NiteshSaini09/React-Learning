import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const myAppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Schema />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

function Schema() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
    <>
      <RouterProvider router={myAppRouter} />
    </>
  );
}

export default App;
