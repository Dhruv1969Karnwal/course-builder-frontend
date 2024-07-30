import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full">
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
        {/* <h1>dhruv</h1> */}
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
