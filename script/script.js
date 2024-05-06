// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

function sendEmail() {
  // Get the user's email client
  var emailClient = 'mailto:bindu.velivela0202@gmail.com';

  // Optionally, you can add a subject line and body text
  var subject = encodeURIComponent('Subject: Hello from your website');
  var body = encodeURIComponent('This is the body of the email.');

  // Construct the mailto: URL
  var mailtoUrl = emailClient + '?subject=' + subject + '&body=' + body;

  // Open the user's email client with the constructed URL
  window.open(mailtoUrl);
}
