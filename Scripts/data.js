let editId;
const getUserData = async () => {
    try {
        let res = await fetch("http://localhost:8080/users");
        let data = await res.json();
        bindUserData(data);
    } catch (error) {
        console.log(error);
    }
}

const editModel = document.querySelector("#editUserModel");
const editSubmitButton = document.querySelector("#newEditButton");
editSubmitButton.addEventListener("click", () => {
    editModel.style.display = "block";
    editUser(editId);
})

getUserData();

const bindUserData = (allUsers) => {
    let dataMain = document.querySelector("#dataMain");
    dataMain.innerHTML = null;
    allUsers.map(user => {
        let div = document.createElement("div");
        let nameDiv = document.createElement("div");
        let nameLabel = document.createElement("p");
        nameLabel.innerText = "Name : ";
        let name = document.createElement("p");
        nameDiv.append(nameLabel, name);
        name.innerText = user.name;

        let ageDiv = document.createElement("div");
        let ageLabel = document.createElement("p");
        ageLabel.innerText = "Age : ";
        let age = document.createElement("p");
        ageDiv.append(ageLabel, age);
        age.innerText = user.age;

        let placeDiv = document.createElement("div");
        let placeLabel = document.createElement("p");
        placeLabel.innerText = "Place : ";
        let place = document.createElement("p");
        placeDiv.append(placeLabel, place);
        place.innerText = user.place;

        let batchDiv = document.createElement("div");
        let batchLabel = document.createElement("p");
        batchLabel.innerText = "Batch : ";
        let batch = document.createElement("p");
        batchDiv.append(batchLabel, batch);
        batch.innerText = user.batch_name;
        
        let professionDiv = document.createElement("div");
        let professionLabel = document.createElement("p");
        professionLabel.innerText = "Profession : ";
        let profession = document.createElement("p");
        professionDiv.append(professionLabel, profession);
        profession.innerText = user.profession;

        let deleteUpdateDiv = document.createElement("div");
        let deleteImg = document.createElement("img");
        deleteImg.setAttribute("id", "deleteUser");
        deleteImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJcCEMkiQOpILcqwDcuyQzE8Hr0Q8SPtmW92lhltPuQ3GjqKG5IlUL7Sv8je_P5-Ogfk&usqp=CAU";
        deleteImg.addEventListener("click", () => {
            deleteUser(user.id);
        })
        let editImg = document.createElement("img");
        editImg.setAttribute("id", "editUser");
        editImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ21lgiY-wb61g5VYMi5Dz_gAyJzClREp2rQ&usqp=CAU";
        editImg.addEventListener("click", () => {
            editModel.style.display = "block";
            editId = user.id;
        })
        deleteUpdateDiv.append(deleteImg, editImg);

        div.append(nameDiv, ageDiv, placeDiv, batchDiv, professionDiv, deleteUpdateDiv);
        dataMain.append(div);
    })
}

const deleteUser = async (id) => {
    try {
        await fetch(`http://localhost:8080/users/${id}`, {
            method: "delete"
        });
        getUserData();
    } catch (error) {
       console.log(error); 
    }
}

const editUser = async (id) => {
    try {
        let newProfession = document.querySelector("#newProfession").value;
        // console.log(id, newProfession);
        await fetch(`http://localhost:8080/users/${id}`, {
            method: "patch",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                profession: newProfession
            })
        })
        getUserData();
    } catch (error) {
        console.log(error);
    }
}