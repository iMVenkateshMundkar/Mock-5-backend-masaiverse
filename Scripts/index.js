
const adminButton = document.querySelector("#admin");
const userButton = document.querySelector("#user");

let buttonOption = document.querySelector("#buttonOptions");

adminButton.addEventListener("click", () => {
    adminSection();
})

userButton.addEventListener("click", () => {
    userSection();
})

const adminSection = () => {
    let homeMainDiv = document.querySelector("#homeMain");
    buttonOption.innerHTML = null;
    homeMainDiv.innerHTML = null;
    let loginButton = document.createElement("button");
    loginButton.innerHTML = "Login";
    loginButton.addEventListener("click", () => {
        window.location.href = "./login.html";
    })
    buttonOption.append(loginButton);

    let dataButton = document.createElement("button");
    dataButton.innerHTML = "Data";
    dataButton.addEventListener("click", () => {
        window.location.href = "./data.html";
    })
    buttonOption.append(dataButton);

    let reportButton = document.createElement("button");
    reportButton.innerHTML = "Report";
    reportButton.addEventListener("click", () => {
        window.location.href = "./reports.html";
    })
    buttonOption.append(reportButton);
}

const userSection = () => {
    let homeMainDiv = document.querySelector("#homeMain");
    let userDiv = document.createElement("div");
    userDiv.setAttribute("id", "userDiv");
    let h2 = document.createElement("h2");
    h2.innerText = "User Register"

    let userForm = document.createElement("form");
    userForm.setAttribute("id", "userForm");
    userForm.setAttribute("action", "#");

    let nameDiv = document.createElement("div");
    let nameLabel = document.createElement("label");
    nameLabel.innerText = "Name";
    let nameInput = document.createElement("input");
    nameInput.setAttribute("id", "userName");
    nameDiv.append(nameLabel, nameInput);
    userForm.append(nameDiv);

    let ageDiv = document.createElement("div");
    let ageLabel = document.createElement("label");
    ageLabel.innerText = "Age";
    let ageInput = document.createElement("input");
    ageInput.setAttribute("id", "userAge");
    ageInput.type = "number";
    ageDiv.append(ageLabel, ageInput);
    userForm.append(ageDiv);

    let placeDiv = document.createElement("div");
    let placeLabel = document.createElement("label");
    placeLabel.innerText = "Place";
    let placeInput = document.createElement("input");
    placeInput.setAttribute("id", "userPlace");
    placeDiv.append(placeLabel, placeInput);
    userForm.append(placeDiv);

    let batchDiv = document.createElement("div");
    let batchLabel = document.createElement("label");
    batchLabel.innerText = "Batch";
    let batchInput = document.createElement("select");
    batchInput.setAttribute("id", "userBatch");
    let batchOp1 = document.createElement("option");
    batchInput.append(batchOp1);
    batchOp1.innerText = "Batch"
    let batchOp2 = document.createElement("option");
    batchOp2.innerText = "WEB-13";
    batchInput.append(batchOp2);
    let batchOp3 = document.createElement("option");
    batchOp3.innerText = "WEB-14";
    batchInput.append(batchOp3);
    let batchOp4 = document.createElement("option");
    batchOp4.innerText = "WEB-15";
    batchInput.append(batchOp4);
    let batchOp5 = document.createElement("option");
    batchOp5.innerText = "WEB-16";
    batchInput.append(batchOp5);
    let batchOp6 = document.createElement("option");
    batchOp6.innerText = "WEB-17";
    batchInput.append(batchOp6);
    batchDiv.append(batchLabel, batchInput);
    userForm.append(batchDiv);

    let professionDiv = document.createElement("div");
    let professionLabel = document.createElement("label");
    professionLabel.innerText = "Profession";
    let professionInput = document.createElement("select");
    professionInput.setAttribute("id", "userProfession");
    let professionOp1 = document.createElement("option");
    professionInput.append(professionOp1);
    professionOp1.innerText = "profession"
    let professionOp2 = document.createElement("option");
    professionOp2.innerText = "FSD";
    professionInput.append(professionOp2);
    let professionOp3 = document.createElement("option");
    professionOp3.innerText = "Frontend";
    professionInput.append(professionOp3);
    let professionOp4 = document.createElement("option");
    professionOp4.innerText = "Backend";
    professionInput.append(professionOp4);
    let professionOp5 = document.createElement("option");
    professionOp5.innerText = "Student";
    professionInput.append(professionOp5);
    professionDiv.append(professionLabel, professionInput);
    userForm.append(professionDiv);

    let submitButton = document.createElement("button");
    submitButton.setAttribute("id", "u_button");
    submitButton.innerText = "Register";
    submitButton.addEventListener("click", () => {
        userRegister();
    })
    userForm.append(submitButton);

    userDiv.append(h2, userForm);
    homeMainDiv.append(userDiv);
}

const userRegister = async () => {
    try {
        let name = document.querySelector("#userName").value;
        let age = document.querySelector("#userAge").value;
        let place = document.querySelector("#userPlace").value;
        let batch = document.querySelector("#userBatch").value;
        let profession = document.querySelector("#userProfession").value;
        if (name && age && place && batch && profession) {
            let data = await fetch("http://localhost:8080/users", {
                method: "post",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name, age, place, batch_name: batch, profession
                })
            })
            alert("'Successfully Registered'")
        }
        else {
            alert("'All fields are required'")
        }
    } catch (error) {
        console.log(error);
    }
}