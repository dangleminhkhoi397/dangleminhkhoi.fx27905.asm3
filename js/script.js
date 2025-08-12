// mail box function

const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var infoContainer = document.getElementById("infoContainer");

  if (email === "" || !regex.test(email)) {
    alert("Email không hợp lệ. Vui lòng nhập lại!");
  } else {
    this.classList.add("hide");
    infoContainer.classList.remove("hide");
  }
});

//info function

var skills = document.getElementsByClassName("mom");

for (let skill of skills) {
  const button = skill.querySelector(".btn");
  const content = skill.querySelector(".job-info-content");
  button.style.display = "none";

  skill.addEventListener("mouseover", () => {
    button.style.display = "inline";
  });

  skill.addEventListener("mouseout", () => {
    if (content.style.display !== "block") {
      button.style.display = "none";
    }
  });

  skill.addEventListener("click", () => {
    if (content.style.display === "none" || !content.style.display) {
      content.style.display = "block";
      button.textContent = "VIEW LESS";
    } else {
      content.style.display = "none";
      button.textContent = "VIEW MORE";
    }
  });
}
