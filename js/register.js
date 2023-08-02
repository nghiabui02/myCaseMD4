function loadRegisterForm(){
    document.getElementById('display').innerHTML = `
<div class="wrapper">
<div class="image-holder">
<img src="../public/images/registration-form-8.jpg" alt="">
</div>
<div class="form-inner">
<form action="">
<div class="form-header">
<h3>Sign up</h3>
<img src="../public/images/sign-up.png" alt="" class="sign-up-icon">
</div>

<div class="form-group">
<label for="">Username:</label>
<input type="text" class="form-control" data-validation="length alphanumeric" data-validation-length="3-12" id="username">
</div>

<div class="form-group" >
<label for="">Password:</label>
<input type="password" class="form-control" data-validation="length" data-validation-length="min8" id="password">
</div>
<button onclick="saveRegister()">create my account</button>
<div class="socials">
<p>Sign up with social platforms</p>
<a href="" class="socials-icon"><i class="zmdi zmdi-facebook"></i></a>
<a href="" class="socials-icon"><i class="zmdi zmdi-instagram"></i></a>
<a href="" class="socials-icon"><i class="zmdi zmdi-twitter"></i></a>
<a href="" class="socials-icon"><i class="zmdi zmdi-tumblr"></i></a>
</div>\</form>
</div></div>`
}


function saveRegister(){
    let data = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    }
    axios.post('').then((res)=>{
        loadLoginForm();
    })
}

