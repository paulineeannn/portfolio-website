console.log("tester")

let nav = document.querySelector("nav");
window.addEventListener("scroll", function() {
    console.log("tester2")
  if (window.scrollY > 20) {
    nav.classList.add("sticky");
    console.log("tester3")
  } else {
    nav.classList.remove("sticky");
  }
});

