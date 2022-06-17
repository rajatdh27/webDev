const signupButton = document.getElementById("signUp");
const signinButton = document.getElementById("signIn");
const container = document.getElementById("container");

console.log(signupButton);

signupButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signinButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
