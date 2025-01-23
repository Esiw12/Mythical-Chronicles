let loginButton = document.getElementsByClassName("auth-container__button-login")[0];

let passwordVal = document.getElementById("auth-container__input-password").value;
let loginVal = document.getElementById("auth-container__input-login").value;
loginButton.addEventListener('click',(e)=>{
    axios.post('http://localhost:8080/hotel/login', {
        email: loginVal,
        password: passwordVal
      })
      .then(function (response) {
        localStorage.setItem("name",response.data.name);
        localStorage.setItem("userId",response.data.user_id);
      })
      .catch(function (error) {
        console.log(error);
      });
});
