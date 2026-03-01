function login(username, password) {
    return $.ajax({
        url: "https://localhost:7138/Auth/login",
        type: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            Name: username,
            Password: password
        })
    });
}
function checkAuth() {
    const token = localStorage.getItem("token");

    if (!token) {
        window.location.href = "login.html";
        return null;
    }

    return token;
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}