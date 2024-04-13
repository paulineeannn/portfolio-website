let nav = document.querySelector("nav");
window.addEventListener("scroll", function() {
  if (window.scrollY > 20) {
    nav.classList.add("sticky");
    console.log("tester3")
  } else {
    nav.classList.remove("sticky");
  }
});


let navLinks = document.querySelectorAll('.linksNavig a');

function getOffsets() {
  let offsets = [];
  navLinks.forEach(function(link) {
    let targetId = link.getAttribute('href').substring(1);
    let targetElement = document.getElementById(targetId);
    let offset = targetElement.offsetTop;
    offsets.push(offset);
  });
  return offsets;
}

function updateNavigation() {
  let offsets = getOffsets();
  let scrollPosition = window.scrollY;

  offsets.forEach(function(offset, index) {
    if (scrollPosition >= offset) {
      navLinks.forEach(function(link) {
        link.classList.remove('selected');
      });
      navLinks[index].classList.add('selected');
    }
  });
}

window.addEventListener('scroll', function() {
  updateNavigation();
});


updateNavigation();
