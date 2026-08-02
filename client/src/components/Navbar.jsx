import "./Navbar.css";

const Navbar = () => {

    const token = localStorage.getItem("token");

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    };

    return (
        <nav className="navbar">

            <div className="logo">
                UploadImgO
            </div>

            <div className="nav-links">

                <a href="/">Home</a>

                {!token ? (
                    <>
                        <a href="/login">Login</a>
                        <a href="/signup">Signup</a>
                    </>
                ) : (
                    <button
                        className="logout-btn"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                )}

            </div>

        </nav>
    );
};

export default Navbar;