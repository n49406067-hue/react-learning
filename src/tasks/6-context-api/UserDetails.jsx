import { useContext } from "react";
import UserContext from "./UserContext";

function UserDetails() {
  const {username, theme, setTheme  }= useContext(UserContext) ;
  
  

  return (
    <div>
        <h2>Welcome, {username}!</h2>

        <h2>Current Theme: {theme}</h2>

        <button onClick={() => setTheme( theme === "light" ? "dark" : "light") }>
            Switch Theme
        </button>

    </div>
  );
  
}

export default UserDetails;