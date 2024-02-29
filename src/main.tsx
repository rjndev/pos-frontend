import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import RootPage from "./pages/root";
import ManageItemsPage from "./pages/manage-items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <main className="p-10 flex gap-4 bg-neutral-100 h-max">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ManageItemsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
