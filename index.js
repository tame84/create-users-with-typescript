"use strict";
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["USER"] = 1] = "USER";
    Roles[Roles["GUEST"] = 2] = "GUEST";
})(Roles || (Roles = {}));
class User {
    constructor(name, age, skills) {
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
}
const user1 = new User("User1", "47", [2, "Typescript, Scss"]);
const user2 = new User("User2", "24", [2, "React, Javascript"]);
const users = [user1, user2];
const form = document.getElementById("form");
const loadUsers = () => {
    const usersContainer = document.getElementById("usersContainer");
    usersContainer.innerHTML = ``;
    for (const user of users) {
        const div = document.createElement("div");
        const name = document.createElement("h2");
        name.textContent = user.name;
        const age = document.createElement("p");
        age.textContent = `${user.age} years`;
        const skillsCount = document.createElement("span");
        skillsCount.textContent = `${user.skills[0].toString()} skills : `;
        const skills = document.createElement("span");
        skills.textContent = user.skills[1].toString();
        div.appendChild(name);
        div.appendChild(age);
        div.appendChild(skillsCount);
        div.appendChild(skills);
        usersContainer === null || usersContainer === void 0 ? void 0 : usersContainer.appendChild(div);
    }
};
const addUser = () => {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const skillsCount = document.getElementById("skillsCount").value;
    if (name !== "" && age !== "" && skillsCount !== "") {
        Number(skillsCount);
        const user = new User(name, age, [skillsCount, ""]);
        users.push(user);
        loadUsers();
    }
    else {
        const error = document.createElement("p");
        error.textContent =
            "Please write someting for you name / age / skills count";
        form.appendChild(error);
        setTimeout(() => {
            form.removeChild(error);
        }, 3000);
    }
};
window.addEventListener("DOMContentLoaded", () => {
    loadUsers();
});
form.addEventListener("submit", (e) => {
    e.preventDefault();
    addUser();
});
