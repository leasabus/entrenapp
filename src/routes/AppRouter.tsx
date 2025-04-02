import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/Dashboard";
import { Layout } from "../components/Layout";
import Clients from "../components/clients/Clients";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientes" element={<Clients />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
