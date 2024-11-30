document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#loginForm");

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            window.location.href = "/dashboard.html";
        } else {
            alert("Login failed. Check your credentials.");
        }
    });
});
