function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
// Open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}
/*
***** login functionality begin
*/
function checkLogin() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("passw").value;
    var userArray = JSON.parse(localStorage.getItem("aUserArray"));
    if (user !== null && user !== "") {
        if (password !== null && password !== "") {
            var canLogin = checkLoginInfo(user, password, userArray);
            if (canLogin === true) {
                //need a method to get the role and send it into createSessionUser below
                var role = getUserRole(user, password, userArray)
                createSessionUser(user, password, role)
                //window.location.href = "http://localhost:5000/dashboardadmin";
                window.location.href = "https://manganeso.herokuapp.com/dashboardadmin";
                if (role == "admin") {
                    //window.location.href = "http://localhost:5000/dashboardadmin";
                    window.location.href = "https://manganeso.herokuapp.com/dashboardadmin";
                } else {
                    window.location.href = "https://manganeso.herokuapp.com/dashboardclient";
                }
            } else {
                alert("password must not be empty");
            }
        } else {
            alert("user must not be empty");
        }
    }
    function checkLoginInfo(user, password, userArray) {
        if (userArray !== null && userArray.length > 0) {
            for (var i = 0; i < userArray.length; i++) {
                if (userArray[i].user === user && userArray[i].password === password) {
                    return true;
                }
            }
        }
        return false;
    }
}