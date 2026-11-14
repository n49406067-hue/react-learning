import { useState } from "react";
import UserContext from "./tasks/6-context-api/UserContext";
import Dashboard from "./tasks/6-context-api/Dashboard";

function App() {
  const [username, setUsername] = useState("Pooja");
  const [theme, setTheme] = useState("light");

  const contextValue = {
    username,
    setUsername,
    theme,
    setTheme,
  };

  return (
    <UserContext.Provider value={contextValue}>
      <h1>Context API Learning</h1>

      <Dashboard />

      <button onClick={() => setUsername("Nagarajan")}>
        Change Username
      </button>
    </UserContext.Provider>
  );
}

export default App;