const button1 = document.querySelector(".btn");
const input1 = document.getElementById("input");
const copyText = document.querySelector(".fa-copy");
const alertBox = document.querySelector(".alert-text");

button1.addEventListener("click", () => {
  createPassword();
});

copyText.addEventListener("click", () => {
  copyPassword();
  if (input1.value) {
    alertBox.classList.remove("active");
    setTimeout(() => {
      alertBox.classList.add("active");
    }, 2000);
  }
});

function createPassword() {
  const code =
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passcodeLength = 14;
  let password = "";
  for (let index = 0; index < passcodeLength; index++) {
    const randomPasscode = Math.floor(Math.random() * code.length);
    password += code.substring(randomPasscode, randomPasscode + 1);
  }
  input1.value = password;
  alertBox.innerText = password + " copied!";
}

function copyPassword() {
  input1.select();
  input1.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input1.value);
}
