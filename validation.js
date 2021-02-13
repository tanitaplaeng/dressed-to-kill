// LOGIN AND PASSWORD VALIDATION

function validate(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (email == "thegloryholeclub@dragmail.net" && password == "dameelizabethtaylor") { 
        alert("Login successful!");
        window.location = "inbox.html"; // redirectiong to email
        return false;
    }
        else { 
            alert ("Wrong password. Try again!");
        }
}

// FOR POPOVER ON FORGOT PASSWORD 

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popover = new bootstrap.Popover(document.querySelector('.popover-dismiss'), {
  trigger: 'focus'
})

const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("email");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}
