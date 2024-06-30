import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import "./App.css";
import { ROUTES } from "./config/routes";
import NewJob from "./pages/NewJob";
import EditJob from "./pages/EditJob";
import Jobs from "./pages/Jobs";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <Routes>
          <Route path={ROUTES.HOME} element={<Jobs />} />
          <Route path={ROUTES.JOBS} element={<Jobs />} />
          <Route path={ROUTES.UPDATE_JOB} element={<EditJob />} />
          <Route path={ROUTES.NEW_JOB} element={<NewJob />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
