import ToasterProvider from "@/components/providers/toaster-provider";
import Navbar from "../components/NavBar/navbar";
import Sidebar from "./sidebar";

// eslint-disable-next-line react/prop-types
const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <main className="md:pl-56 pt-[80px] h-full">
        <ToasterProvider />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
