enum Roles {
    ADMIN,
    USER,
    GUEST,
}

class User {
    name: string;
    age: string;
    skills: (number | string)[];

    constructor(name: string, age: string, skills: (number | string)[]) {
        this.name = name;
        this.age = age;
        this.skills = skills;
    }
}

const user1 = new User("User1", "47", [2, "Typescript, Scss"]);
const user2 = new User("User2", "24", [2, "React, Javascript"]);
const users = [user1, user2];

const form = document.getElementById("form") as HTMLFormElement;

const loadUsers = () => {
    const usersContainer = document.getElementById(
        "usersContainer"
    ) as HTMLDivElement;

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

        usersContainer?.appendChild(div);
    }
};

const addUser = () => {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const age = (document.getElementById("age") as HTMLInputElement).value;
    const skillsCount = (
        document.getElementById("skillsCount") as HTMLInputElement
    ).value;

    if (name !== "" && age !== "" && skillsCount !== "") {
        Number(skillsCount);

        const user = new User(name, age, [skillsCount, ""]);
        users.push(user);

        loadUsers();
    } else {
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
