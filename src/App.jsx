import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

// Additional routes (Services, Gallery, Contact as standalone pages, etc.)
// can be added here as the multipage site grows. For now the single
// Home page contains anchored sections for Services / Wellbeing / Visit Us / Contact.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
