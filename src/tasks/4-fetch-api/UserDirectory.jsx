
import { useState, useEffect } from "react";

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }

        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()));

  const SortedUsers = [...filteredUsers].sort((a,b) => {
    return sortOrder === "asc"
    ? a.name.localeCompare(b.name)
    : b.name.localeCompare(a.name);
  });
  return (
    <div>
      <h1>User Directory</h1>

      <input

       type="text"
       placeholder="Search users..."
       value={search}
       onChange={(e) => setSearch(e.target.value)}
      />

      <select 
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="asc">A to Z</option>
        <option value="desc">Z to A</option>
      </select>

      {loading && <p>Loading users...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && SortedUsers.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default UserDirectory;
