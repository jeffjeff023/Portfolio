const form = document.forms["contactForm"];
const name = document.forms["contactForm"]["fullName"];
const email = document.forms["contactForm"]["emailAddress"];

const message = document.forms["contactForm"]["messageMe"];

name.addEventListener("input", () => {
  if (name.value != "") {
    name.style.border = "1px solid rgb(118, 118, 118)";
  }
});

email.addEventListener("input", () => {
  if (emailRegex.test(email.value)) {
    email.style.border = "1px solid rgb(118, 118, 118)";
  }
});

message.addEventListener("change", () => {
  if (message.value != "") {
    message.style.border = "1px solid rgb(118, 118, 118)";
  }
});

const nameRegex = /\S/;
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const messageRegex = /\S/;

const validateForm = (event) => {
  event.preventDefault();

  if (!nameRegex.test(name.value) || !emailRegex.test(email.value) || !messageRegex.test(message.value)) {
    name.style.border = "2px solid red";
    email.style.border = "2px solid red";
    message.style.border = "2px solid red";
    return false;
  }


  form.innerHTML = "";
  const messageSent = document.createElement("div");
  messageSent.className = "afterMessage"
  messageSent.style.display = "flex"
  messageSent.style.alignItems = "center"
  messageSent.style.flexDirection = "column"

  const messageMessage = document.createElement("p");
  messageMessage.className = "messageMessage";
  messageMessage.textContent = "Your message has been sent!";


  localStorage.setItem("fullName", name.value);
  localStorage.setItem("emailAddress", email.value);

  name.value = localStorage.getItem("fullName");
  email.value = localStorage.getItem("emailAddress");

  const messageAgain = document.createElement("a");
  messageAgain.setAttribute("href", "contact.html");
  messageAgain.className = "button";
  messageAgain.textContent = "Send Again";

  const formBody = document.getElementById("contactForm");
  formBody.appendChild(messageSent);
  messageSent.appendChild(messageMessage);
  messageSent.appendChild(messageAgain);
};
