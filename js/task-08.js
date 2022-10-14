const formRef = document.querySelector(".login-form");

formRef.addEventListener("submit", checkFormFn);

function checkFormFn(event) {
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Warning !!! All data field required");
  } else {
    const dataRef = {
      email: email.value,
      password: password.value,
    };
    console.dir(dataRef);
  }
  event.preventDefault();
  event.currentTarget.reset();
}
