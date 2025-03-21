import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { VulnerabilityView } from "./components/VulnerabilityView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="/dashboard/vulnerabilities/:vulnerabilityId"
          element={<VulnerabilityView />}
        />
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
