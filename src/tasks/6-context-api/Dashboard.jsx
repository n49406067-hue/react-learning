import { useContext } from "react";
import UserContext from "./UserContext";
import Navbar from "./Navbar";

function Dashboard() {
  const { theme } = useContext(UserContext);

  return (
    <div
    style = {{
        minHeight:"100vh",
        padding: "20px",
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
      
      }}
    >
      <h2>Dashboard</h2>
      <Navbar />
    </div>
  );
}

export default Dashboard;