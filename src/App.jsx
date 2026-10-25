import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import EmployeeForm from "./pages/EmployeeForm";

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="container py-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employee" element={<EmployeeForm />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>

      <footer className="text-center py-4 text-secondary">
        Employee Dashboard • Assignment 2
      </footer>
    </div>
  );
}

export default App;