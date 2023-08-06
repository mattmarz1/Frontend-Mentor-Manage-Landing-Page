const emailInput = document.querySelector(".container-5 input");
const emailInputSubmitBtn = document.querySelector(".container-5 button");
const emailContainer = document.querySelector(".email-container");
const mobileNavBtn = document.querySelector(".mobile-nav-icon");
const mobileNav = document.querySelector(".mobile-nav");
const overlay = document.querySelector(".overlay");
const mobileNavCloseBtn = document.querySelector(".mobile-nav-close-icon");

const container1 = document.querySelector(".container-1");

mobileNavBtn.classList.add("hidden");
mobileNavCloseBtn.classList.add("hidden");
mobileNav.classList.add("hidden");
overlay.classList.add("hidden");

function handleWindowResize() {
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  if (windowWidth > 992) {
    mobileNavBtn.classList.add("hidden");
    mobileNavCloseBtn.classList.add("hidden");
    mobileNav.classList.add("hidden");
    overlay.classList.add("hidden");
  } else {
    mobileNavBtn.classList.remove("hidden");
  }
}

// Handle window resize event
window.addEventListener("resize", handleWindowResize);

// Initial handling based on window size when the page loads
handleWindowResize();

container1.addEventListener("click", function (e) {
  if (e.target !== mobileNavBtn && e.target !== mobileNavCloseBtn) return;

  if (e.target === mobileNavBtn) {
    mobileNav.classList.remove("hidden");
    overlay.classList.remove("hidden");
    mobileNavBtn.classList.add("hidden");
    mobileNavCloseBtn.classList.remove("hidden");
  } else {
    mobileNavBtn.classList.remove("hidden");
    mobileNavCloseBtn.classList.add("hidden");
    mobileNav.classList.add("hidden");
    overlay.classList.add("hidden");
  }
});


emailInputSubmitBtn.addEventListener("click", function () {
  const invalidMsg = "<p>Please enter a valid email</p>";
  const element = emailContainer.querySelector("p");

  if (!emailInput.value.includes("@") && !element) {
    emailContainer.insertAdjacentHTML("beforeend", invalidMsg);
  } else if (emailInput.value.includes("@") && element) {
    element.remove();
  }

  emailInput.value = "";
});
