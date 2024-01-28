document.addEventListener("DOMContentLoaded", function() {
    var Account = {
        email: "Datvilla@gmail.com",
        password: "12345678"
    };

    document.getElementById("login-button").addEventListener("click", function() {
        var email = document.getElementById("email").value;
        var password = document.getElementById("pass").value;

        if (email === Account.email && password === Account.password) {
            alert("Đăng nhập thành công!");
            window.location.href = '../index.html';

        } else {
            document.getElementById("error-message").innerText = "Email hoặc mật khẩu không chính xác.";
            document.getElementById("error-message").classList.add("show");
        }
    });
});