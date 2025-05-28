const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-message");
const signupSection = document.getElementById("signup-section");
const successSection = document.getElementById("success-section");
const userEmailSpan = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();
  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!isValid) {
    errorMsg.classList.remove("hidden");
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
  } else {
    errorMsg.classList.add("hidden");
    signupSection.classList.add("hidden");
    successSection.classList.remove("hidden");
    userEmailSpan.textContent = email;
  }
});

dismissBtn.addEventListener("click", function () {
  successSection.classList.add("hidden");
  signupSection.classList.remove("hidden");
  form.reset();
  emailInput.style.borderColor = "#ccc";
});
