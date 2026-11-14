import useFetch from "./useFetch";

function CustomUsers() {
    const { data , loading } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    return( 
        <div>
            <h1> custom Hook Users</h1>

            {loading && <p>Loading...</p>}

            {data.map((user) => (
                <p key={user.id}>{user.name}</p>

            ))}
        </div>
    );
}

export default CustomUsers;