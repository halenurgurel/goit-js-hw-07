const loginForm = document.querySelector("login-form"); // login-form elementini JS'de seçtik

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); //sayfanın yenilenmesini engeller

  const formElements = event.currentTarget.elements; //olayı dinlediğimiz eleman yani formun ta kendisi
  // .elements -> form içindeki inputlara isimleri ile ulaşmamızı sağlıyor.
  const emailInput = formElements.email;
  const passwordInput = formElements.password;

  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return; //fonksiyonu burada durduruyoruz
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);

  loginForm.reset();
});
