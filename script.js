document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const arrLinks = document.querySelectorAll(".bottom-link");

  arrLinks.forEach((link) => {
    link.addEventListener("click", function () {
      arrLinks.forEach((item) => item.classList.remove("active"));

      this.classList.add("active");
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  popup.style.display = "none";
  const openPopupButton = document.getElementById("open-popup");
  const closePopupButton = document.getElementById("close-popup");

  openPopupButton.addEventListener("click", () => {
    popup.classList.add("show");
    popup.style.display = "flex";
  });

  closePopupButton.addEventListener("click", () => {
    popup.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-button");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const openAnotherPopup = document.getElementById("open-another-button");
  const popup = document.getElementById("popup");
  menuButton.addEventListener("click", () => {
    sidebar.style.display = "flex";
    overlay.style.display = "block";
    openPopupButton.style.display = "flex";
  });

  closeButton.addEventListener("click", () => {
    sidebar.style.display = "none";

    overlay.style.display = "none";
  });
  openAnotherPopup.addEventListener("click", () => {
    popup.classList.add("show");
    popup.style.display = "flex";
  });
});
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  popup.style.display = "none";
});
