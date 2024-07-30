import DashboardLayout from "@/components/utils/Dashboard/dashboardLayout"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      {/* <div>
      <DashboardLayout />
    </div> */}
    <Routes>
      <Route path="/" element={<DashboardLayout />} />
    </Routes>
    </>
  )
}

export default App
