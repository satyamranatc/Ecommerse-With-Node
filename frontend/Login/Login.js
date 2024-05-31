let LoginForm = document.getElementById('loginForm');

LoginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    let UserData = {
        username: e.target[0].value,
        password: e.target[1].value,
    }

    let Response = await axios.post("http://localhost:3200/api/Login",UserData);
    console.log(Response.data)

    if(Response.data.status == true)
    {
        window.open("../Admin/Admin.html")
    }
    else
    {
        alert("User not found")
    }

    
});