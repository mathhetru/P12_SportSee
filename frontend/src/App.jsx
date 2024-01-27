import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import HorizontalNav from "./components/HorizontalNav";
import VerticalNav from "./components/VerticalNav";
import HomeView from "./pages/HomeView";
import ErrorView from "./pages/ErrorView";
import "./styles/style.scss";

function App() {
  return (
    <Router>
      <Loader />
      <HorizontalNav />
      <VerticalNav />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </Router>
  );
}

export default App;
