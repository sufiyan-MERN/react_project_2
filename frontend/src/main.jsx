import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import "./css/index.css";
import { movieProvider as MovieProvider } from "./contexts/movieContext.jsx";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

createRoot(document.getElementById("root")).render(
  <MovieProvider>
    <RouterProvider router={appRouter} />
  </MovieProvider>,
);
