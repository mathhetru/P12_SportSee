import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import HomeView from "./pages/HomeView";
import ErrorView from "./pages/ErrorView";
import "./styles/style.scss";

function App() {
  return (
    <Router>
      <Loader />
      <Routes>
        <Route path="/:id" element={<HomeView />} />
        <Route path="*" element={<ErrorView />} />
      </Routes>
    </Router>
  );
}

export default App;
