import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import RootPage from "./pages/root";
import ManageItemsPage from "./pages/manage-items";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import CategoriesPage from "./pages/categories";
import MobileBar from "./components/MobileBar";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Analytics />
      <main className="p-10 flex gap-4 bg-neutral-100 h-max">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ManageItemsPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
        <MobileBar />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);
