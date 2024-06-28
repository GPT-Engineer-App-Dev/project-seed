import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes className="flex-grow">
          <Route exact path="/" element={<Index />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
