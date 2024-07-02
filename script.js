// modal window
const closeButton = document.getElementById("close-alert");
const alertDiv = document.getElementById("responsiveness-alert");

closeButton.addEventListener("click", function() {
  alertDiv.style.display = "none";
});

// Sticky navigation bar
const nav = document.querySelector("nav");
window.addEventListener("scroll", function() {
  if (window.scrollY > 20) {
    nav.classList.add("sticky");
  } 
  else {
    nav.classList.remove("sticky");
  }
});

function updateNavigation() {
  // get position of each section and store in an array
  const positions = [];
  document.querySelectorAll('.linksNavig a').forEach(function(link) {
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    positions.push(targetElement.offsetTop);
  });

  const scrollPosition = window.scrollY+100;

  positions.forEach(function(positions, index) {
    const link = document.querySelectorAll('.linksNavig a')[index];
    if (scrollPosition >= positions) {
      document.querySelectorAll('.linksNavig a').forEach(function(link) {
        link.classList.remove('selected');
      });
      link.classList.add('selected');
    }
  });
}

// scroll to target section
document.querySelectorAll('.linksNavig a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  });
});


window.addEventListener('scroll', function() {
  updateNavigation();
});
