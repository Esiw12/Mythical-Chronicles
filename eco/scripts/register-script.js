let registerButton = document.getElementsByClassName("auth-container__button-register")[0];

let passwordVal = document.getElementById("auth-container__input-password").value;
let loginVal = document.getElementById("auth-container__input-login").value;
let nameVal = document.getElementById("auth-container__input-name").value;
registerButton.addEventListener('click',(e)=>{
    axios.post('http://localhost:8080/hotel/register', {
        email: loginVal,
        password: passwordVal,
        name:nameVal
      })
      .then(function (response) {
        localStorage.setItem("name",response.data.name);
        localStorage.setItem("userId",response.data.user_id);
      })
      .catch(function (error) {
        console.log(error);
      });
});
