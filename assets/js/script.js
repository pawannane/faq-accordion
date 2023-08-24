const dropdowns = document.querySelectorAll(".dropdown");
const faqs = document.querySelectorAll(".faq");

const removeActive = () => {
  const active = document.querySelector(".active");

  if(active != null)
    active.classList.remove("active");
}

const handleDropdown = idx => {
  if(faqs[idx].classList.contains("active"))
    faqs[idx].classList.remove("active");
  else{
    removeActive();
    faqs[idx].classList.add("active");
  }
}

window.addEventListener("click", (e) => {
  const active = document.querySelector(".active");

  if(e.target == active)
    removeActive();
})

dropdowns.forEach((dropdown, idx) => {
  dropdown.addEventListener("click", () => handleDropdown(idx));
});
