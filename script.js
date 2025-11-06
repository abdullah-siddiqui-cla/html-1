const submitBtn = document.getElementById('submit-button');
const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault();

  const emailInput = document.getElementById("email-input");
  const phoneInput = document.getElementById("phone-number-input");
  const timeInput = document.getElementById("time-input");

  const pTag = timeInput.parentElement.getElementsByTagName('p')[0];
  pTag.classList.add("hidden");

  const phonePTag = phoneInput.parentElement.getElementsByTagName('p')[0];
  phonePTag.classList.add("hidden");

  const emailPTag = emailInput.parentElement.getElementsByTagName('p')[0];
  emailPTag.classList.add("hidden");

  console.log(timeInput.value);

  const timeRegex = /^\d{2}:\d{2}\s?(AM|PM)$/;
  const phoneRegex = /^\+92\s?\d{3}\s?\d{7}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (timeRegex.test(timeInput.value)) {
    console.log("Time input validated");
  } else {
    pTag.classList.remove("hidden");
  }

  if (phoneRegex.test(phoneInput.value)) {
    console.log("Phone number valided");
  } else {
    phonePTag.classList.remove("hidden");
  }

  if (emailRegex.test(emailInput.value)) {
    console.log("Email valided");
  } else {
    emailPTag.classList.remove("hidden");
  }

  // The form has been validated.

  // event.target.submit();
});

const array = [1, 6, 3, 6, 9];

array.forEach((element) => {
  console.log(element);
});

const newArray = array.map((element) => {
  return `${element} - MAP`;
});

console.log(newArray);

const newArray2 = array.filter((element) => {
  return element > 5;
});

console.log(newArray2);

const singleElement = array.find((element) => {
  return element > 50;
});

console.log(singleElement);

