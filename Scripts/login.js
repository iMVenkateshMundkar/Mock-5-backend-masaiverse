
const login_button = document.querySelector("#l_button");
login_button.addEventListener("click", () => {
    adminLogin();
})

const adminLogin = async () => {
    try {
        let email = document.querySelector("#l_email").value;
        let password = document.querySelector("#l_password").value;
        if (email && password) {
            let res = await fetch("https://reqres.in/api/login", {
                method: "POST",
                body: JSON.stringify({
                    email,
                    password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            let data = await res.json();
            if (data.token) {
                alert("'Logged In Successfully'")
                window.location.href = "./data.html";
            }
            else {
                alert("'Invalid Credentials'")
            }
        }
        else {
            alert("'All fields are required'");
        }
    } catch (error) {
        console.log(error);
    }
}