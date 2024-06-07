import { Suspense, lazy } from "react";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Spinner from "./components/Spinner";

// import Home from "./pages/Home";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import PageNotFound from "./pages/PageNotFound";
const Home = lazy(() => import("./pages/Home"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/home" />,
    },

    {
      element: (
        <Suspense fallback={<Spinner />}>
          <AppLayout />
        </Suspense>
      ),

      errorElement: <PageNotFound />,
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
          element: <Projects />,
          path: "/projects",
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
