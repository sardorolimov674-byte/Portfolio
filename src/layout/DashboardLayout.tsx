import { Outlet } from "react-router";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
    return (
      <div className="h-screen bg-[#0b0b0b] text-gray-300 flex flex-col">
        <Header />
  
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
  
          <main className="flex-1 oulet-bg p-8 overflow-y-auto">
            <Outlet  />
          </main>
        </div>
      </div>
    );
  }
  