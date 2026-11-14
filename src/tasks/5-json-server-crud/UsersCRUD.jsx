import { useState, useEffect } from "react";

function UsersCRUD() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [editId, setEditId] = useState(null);
    const deleteUser = (id) => {
        fetch(`http://localhost:3000/users/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setUsers((prevUsers) => 
            prevUsers.filter((user) => user.id !== id)
        );
        });
    };
    const updateUser = () => {
       fetch(`http://localhost:3000/users/${editId}`, {
        method: "PATCH",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            name:name,
            email:email
        })
       })
       .then((response) => response.json())
       .then((updatedUser) => {
        setUsers((prevUsers) => 
            prevUsers.map((user) =>
                user.id === editId ? updatedUser: user
        ));

        setEditId(null);
        setName("");
        setEmail("");
       });
    };
    const addUser = () => {
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name:name,
                email: email
            })
        })

        .then((response) => response.json())
        .then((newUser) => {
            setUsers((prevUsers) => [...prevUsers, newUser]);

            setName("");
            setEmail("");
        });
    };

    useEffect(() => {
        fetch("http://localhost:3000/users")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data);
        })
    },[]);

    return (
        <div>
            <h1>JSON Server - Users</h1>

            {users.map((user) => (
    <div key={user.id}>
        <p>
            {user.name} - {user.email}
        </p>

        <button onClick={() => {
            setEditId(user.id);
            setName(user.name);
            setEmail(user.email);
        }}>
            Edit
        </button>

        <button onClick = {() => deleteUser(user.id)}>
            Delete
        </button>
    </div>
 ))}
            <input 
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />

            <button onClick={addUser}>
                Add User
            </button>

            {editId !== null && (
                <button onClick={updateUser}>
                    Update User
                </button>
            )}
        </div>
    );
}

export default UsersCRUD;
