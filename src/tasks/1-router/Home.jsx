import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();
    return (
        <div>
            <h1>Home Page</h1>
            <p>Welcome to my react learning website!</p>

            <button onClick={() => navigate("/about")}>
                Go To About
            </button>
        </div>
    );
}

export default Home;

