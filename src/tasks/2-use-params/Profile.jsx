import { useParams } from "react-router-dom";

function Profile() {
    const params = useParams();

    const users = {
        101: "Pooja",
        102: "Rahul",
        103: "Priya",

    };

    const userName= users[params.id];

    return (
        <div>
            <h1>Profile Page</h1>
            <p>User ID: {params.id}</p>
            <p>UserName: {userName}</p>

        </div>
    )
}

export default Profile;