import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import LayOut from "./components/LayOut/LayOut.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";

function App() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <LayOut />,
      children: [
        { index: "true", element: <Home />},
        { path: "about", element: <About />},
        { path: "portfolio", element: <Portfolio />},
        { path: "contact", element: <Contact />},
        {path: "*", element: <NotFound />}
      ],
    },
  ]);

  return <RouterProvider router={routes}></RouterProvider>;
}

export default App;
