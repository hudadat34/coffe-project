const form = document.getElementById("contactForm");
const messageBox = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    messageBox.style.color = "red";
    messageBox.textContent = "Lütfen tüm alanları doldurun.";
    return;
  }

  if (!email.includes("@")) {
    messageBox.style.color = "red";
    messageBox.textContent = "Geçerli bir e-posta giriniz.";
    return;
  }

  messageBox.style.color = "green";
  messageBox.textContent = "Mesajınız başarıyla gönderildi!";

  form.reset();
});


