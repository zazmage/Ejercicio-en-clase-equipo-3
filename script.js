const button = document.querySelector(".button");
const message = document.querySelector(".message");

const usuarios = [
  ["maria", "123"],
  ["katherine", "2021"],
  ["daniel", "dani09"],
];

button.addEventListener("click", () => {
  const user = document.querySelector(".user").value;
  const pass = document.querySelector(".pass").value;
  console.log(user, pass);

  if (user === "" || pass === "") {
    message.innerHTML = "Please enter user-name and password";
  } else {
    let check = false;
    usuarios.forEach((i) => {
      if (user === i[0] && pass === i[1]) check = true;
    });
    if (check) {
      message.innerHTML = `Welcome ${user}`;
      localStorage.setItem("User", user);
      localStorage.setItem("Pass", pass);
    } else {
      message.innerHTML = "Go back! you are not a zombie";
      localStorage.setItem("User", user);
      localStorage.setItem("Pass", pass);
    }
  }
});
