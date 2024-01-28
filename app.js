const navLinks = document.querySelector(".nav-link");
function onToggleMenu(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navLinks.classList.toggle("right-[0]");
}

let videoPlayer = document.getElementById("videoPlayer");
let myVideo = document.getElementById("myVideo");

function stopVideo() {
  videoPlayer.style.display = "none";
  myVideo.pause();
}

function playVideo(file) {
  myVideo.src = file;
  videoPlayer.style.display = "block";
}

const form = document.querySelector("form");
const namee = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail(){

  const bodyMessage = `Name: ${namee.value}<br> Email: ${email.value}<br>
            Message: ${message.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "markchristiannaval07@gmail.com",
    Password : "1CC4457E802629C5541074D268AB388CFC79",
    To : 'markchristiannaval07@gmail.com',
    From : 'markchristiannaval07@gmail.com',
    Subject : subject.value,
    Body : bodyMessage
  }).then(
    message => alert("Message Sent Succesfully!")
  );
}



form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  sendEmail();
});