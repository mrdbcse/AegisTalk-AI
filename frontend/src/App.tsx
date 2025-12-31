import { Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/others/Dashboard";

import Admin from "./pages/admin/Admin";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Agents from "./pages/others/Agents";
import Analytics from "./pages/others/Analytics";
import Billing from "./pages/others/Billing";
import Chat from "./pages/others/Chat";
import Integrations from "./pages/others/Integrations";
import KnowledgeBase from "./pages/others/KnowledgeBase";
import Settings from "./pages/others/Settings";

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/knowledge-base" element={<KnowledgeBase />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default App;
