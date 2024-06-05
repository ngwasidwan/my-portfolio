import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import AboutMe from "./pages/Projects";
import AppLayout from "./components/AppLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },

    {
      element: <AppLayout />,
      errorElement: <p>no routes match</p>,
      children: [
        {
          element: <Home />,
          path: "/home",
        },
        {
          element: <Skills />,
          path: "/skills",
        },
        {
          element: <AboutMe />,
          path: "/projects",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
