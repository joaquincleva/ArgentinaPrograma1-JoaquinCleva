//Fetch a la página random user para traer los datos del usuario
fetch('https://randomuser.me/api/')
.then((response) => response.json())
.then((json) => {
    let persona = {
        username: json.results[0].name.first,
        lastname: json.results[0].name.last,
        cell: json.results[0].cell,
        city: json.results[0].location.city,
        mail: json.results[0].email,
        age: json.results[0].registered.age
    }
    console.log(persona)
    document.getElementById('name').innerHTML = persona.username + " " + persona.lastname
    document.getElementById('mail').innerHTML = persona.mail
    document.getElementById('cell').innerHTML = persona.cell
    document.getElementById('age').innerHTML = persona.age
    document.getElementById('city').innerHTML = persona.city
})

//Funcionalidad para Ocultar información entre páginas del sitio
const experienceDiv = document.getElementById("experience");
const personalDiv = document.getElementById("personal");
personalDiv.style.display = "none";
const experience_btn = document.getElementById("experience-btn");
const personal_btn = document.getElementById("personal-btn");
personal_btn.onclick = function () {
    experienceDiv.style.display = "none";
    personalDiv.style.display = "block";
};
experience_btn.onclick = function () {
    personalDiv.style.display = "none";
    experienceDiv.style.display = "block";
};