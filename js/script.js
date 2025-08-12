document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var infoContainer = document.getElementById("infoContainer");

  if (email === "" || !email.includes("@")) {
    alert("Email không hợp lệ. Vui lòng nhập lại!");
  } else {
    this.classList.add("hide");
    infoContainer.classList.remove("hide");
  }
});

var skills = document.getElementsByClassName("mom");

for (var i = 0; i < skills.length; i++) {
  var button = skills[i].querySelector(".btn");
  button.style.display = "none";

  skills[i].addEventListener("mouseover", function () {
    var button = this.querySelector(".btn");
    button.style.display = "inline";
  });

  skills[i].addEventListener("mouseout", function () {
    var content = this.querySelector(".job-info-content");
    var button = this.querySelector(".btn");
    if (content.style.display === "none") {
      button.style.display = "none";
    }
  });

  skills[i].addEventListener("click", function () {
    var content = this.querySelector(".job-info-content");
    var button = this.querySelector(".btn");
    if (content.style.display === "none") {
      content.style.display = "block";
      button.textContent = "VIEW LESS";
    } else {
      content.style.display = "none";
      button.textContent = "VIEW MORE";
    }
  });
}
