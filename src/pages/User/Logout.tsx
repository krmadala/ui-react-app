import { logout } from "../api/userService";

default export function Logout() {  
    const handleLogout = () => {
        // Perform logout logic here (e.g., clear session, redirect to login page)
        logout()
            .then((response) => {
                console.log('Logout successful:', response);
                // Redirect to login page or perform any other action
                window.location.href = '/login'; // Redirect to login page
            })
            .catch((error) => {

                console.error('Logout failed:', error);
                // Handle logout failure (e.g., show an error message)
            }
        );
        console.log('User logged out');
        window.location.href = '/login'; // Redirect to login page
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <button
                onClick={handleLogout}
                className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
                Logout
            </button>
        </div>
    );
}