import React, { useState } from "react";
// import UserCreate from "./Registration"; // Component for User Creation
// import UserTable from "./UserTable"; // Component for Assigning Tasks
// import DisplayData from "./Display"; // Component for Displaying Tasks
// import ViewAssignedTasks from "./ViewTask";
import "../css/admin.css"
import { Outlet } from "react-router-dom";
import InsertProduct from "./InsertProduct";
import CustomerDetails from "./CtomerDetails";

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null); // State to track active content

  
  const renderContent = () => {
    switch (activeComponent) {
      case "insertproduct":
        return <InsertProduct />;
      case "customerdetails":
        return <CustomerDetails />;
      case "displayTasks":
        return <DisplayData />;
        case "viewdata":
        return <ViewAssignedTasks />;
      default:
        return <h3>Welcome! Please select an option from the sidebar.</h3>;
    }
  };

  return (
    <>
      {/* <h1 id="adminh1" >Welcome to My Admin Panel</h1> */}
      <div style={{ display: "flex" }}>
        {/* Sidebar Section */}
        <div id="sidebar" style={{ width: "20%", borderRight: "1px solid #ccc", padding: "10px" }}>
          <h3>SIDEBAR</h3>
          <h4 onClick={() => setActiveComponent("insertproduct")} style={{ cursor: "pointer" }}>
           Insert Products Page
          </h4>
          <h4 onClick={() => setActiveComponent("customerdetails")} style={{ cursor: "pointer" }}>
           User Details Page
          </h4>
          {/* <h4 onClick={() => setActiveComponent("displayTasks")} style={{ cursor: "pointer" }}>
            Display Tasks
          </h4>
          <h4 onClick={() => setActiveComponent("viewdata")} style={{ cursor: "pointer" }}>
            View Assigned Task 
          </h4> */}
        </div>

        {/* Main Content Section */}
        <div id="ShowData" style={{ flex: 1, padding: "20px" }}>
          {renderContent()}
          <Outlet/>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
