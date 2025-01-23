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