// Function to fetch token from the URL and store it in localStorage
const storeTokenFromURL = () => {
    if (typeof window !== "undefined") {
        // Get the URL params
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');  // Extract the token from the URL

        if (token) {
            // Store token in localStorage
            localStorage.setItem('user_token', token);
            console.log("Token stored in localStorage:", token);  // Log for verification
        }
    }
};

// Function to fetch token from localStorage
export const getTokenFromLocalStorage = () => {
    if (typeof window !== "undefined") {
        const token = localStorage.getItem('user_token');  // Fetch the 'user_token' from localStorage

        if (token) {
            console.log("Token fetched from localStorage:", token);  // Log the token for verification
            return token;
        } else {
            console.log("No token found in localStorage.");
            return null;
        }
    }
    return null;
};

// Call the function to store the token
storeTokenFromURL();

// Call the function to fetch the token and store it in a variable
const token = getTokenFromLocalStorage();
console.log("The fetched token is:", token);  // Print the token to the console for verification

// Remove token from localStorage when the browser tab or window is closed
window.addEventListener('beforeunload', () => {
    localStorage.removeItem('user_token');
    console.log("Token removed from localStorage.");
});
