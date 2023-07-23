const questionForm = document.getElementById("questionForm");
const resultDiv = document.getElementById("result");
const nameInput = document.getElementById("name");
const passportSelect = document.getElementById("passport");
const passportNumberInput = document.getElementById("passportNumberInput");
const passportNumberField = document.getElementById("passportNumber");
const visaInput = document.getElementById("visaInput");
const visaSelect = document.getElementById("visa");

questionForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const hasPassport = passportSelect.value;
  let resultMessage = `Hi ${name}.`;

  if (hasPassport === "yes") {
    const passportNumber = passportNumberField.value.trim();
    resultMessage += ` Your passport number is ${passportNumber}.`;
  } else {
    resultMessage += " Please apply for a passport very soon.";
  }

  if (hasPassport === "yes") {
    const hasValidVisa = visaSelect.value;
    if (hasValidVisa === "yes") {
      resultMessage += " You have a valid visa.";
    } else {
      resultMessage += " You need to apply for a visa as well.";
    }
  }

  resultDiv.textContent = resultMessage;
  questionForm.style.display = "none";
  resultDiv.style.display = "block";
});

passportSelect.addEventListener("change", function() {
  if (passportSelect.value === "yes") {
    passportNumberInput.style.display = "block";
    passportNumberField.required = true;
    visaInput.style.display = "block";
    visaSelect.required = true;
  } else {
    passportNumberInput.style.display = "none";
    passportNumberField.required = false;
    visaInput.style.display = "none";
    visaSelect.required = false;
  }
});
