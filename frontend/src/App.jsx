import "./css/App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { movieProvider } from "./contexts/movieContext";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <NavBar />
        <Home />
      <Favorites />
      </>
  );
}

export default App;
