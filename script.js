// input-ების სიგრძის შემოწმება 

    document.getElementById("Name").addEventListener("input", checkInputLength);
    document.getElementById("LastName").addEventListener("input", checkInputLength);
    function checkInputLength(event) {
  const maxLength = 50;
  const input = event.target;
  
  if (input.value.length > maxLength) {
    alert("Maximum length of the input should be " + maxLength + "!");
    input.value = input.value.slice(0, maxLength); 
  }
}

// password-ების შემოწმება

    function checkPasswords() {
        var password1 = document.getElementById("pass1").value;
        var password2 = document.getElementById("pass2").value;

        if (password1 !== password2) {
        alert("Passwords don't match!");
        }
    }

// email-ის ვალიდაცია

    function validateEmail() {
        var email = document.getElementById("email").value;

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var isValid = emailRegex.test(email);

        if (!isValid) {
        alert("Email is not valid!");
        }
    }

// console-ში გამოტანა

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('Name').value;
  const lastName = document.getElementById('LastName').value;
  const age = document.querySelector('input[type="number"]').value;
  const email = document.getElementById('email').value;
  const employmentStatus = document.querySelector('input[name="employment status"]:checked').value;
  const password1 = document.getElementById('pass1').value;
  const password2 = document.getElementById('pass2').value;

  console.log('Name:', name);
  console.log('Last Name:', lastName);
  console.log('Age:', age);
  console.log('Email:', email);
  console.log('Employment Status:', employmentStatus);
  console.log('Password 1:', password1);
  console.log('Password 2:', password2);
});
