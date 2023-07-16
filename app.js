document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    registerForm?.addEventListener("submit", function (event) {
        // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
        event.preventDefault();

        // Lấy giá trị của các input
        const registerUsername = document.getElementById("registerUsername").value;
        const registerPassword = document.getElementById("registerPassword").value;
        const registerRepeatPassword = document.getElementById("registerRepeatPassword").value;

        // Kiểm tra password và confirm password có giống nhau hay không
        if (registerPassword == 0 || registerUsername == 0 ){
            alert ("TK và MK không được để trống")
            return;
        }
        if (registerPassword !== registerRepeatPassword) {
            alert("Mật khẩu nhập lại không khớp");
            return;
        } else {
            alert("Đăng kí thành công !")
        }

        // Lưu thông tin đăng ký vào Local Storage
        localStorage.setItem("registerUsername", registerUsername);
        localStorage.setItem("registerPassword", registerPassword);
        
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm?.addEventListener("submit", function (event) {
        // Ngăn hành động submit mặc định của form (reload hoặc chuyển trang tùy theo `action` của form)
        event.preventDefault();

        // Lấy giá trị của các input
        const loginName = document.getElementById("loginName").value;
        const loginPassword = document.getElementById("loginPassword").value;

        // Lấy thông tin đăng ký từ Local Storage
        const registeredUsername = localStorage.getItem("registerUsername");
        const registeredPassword = localStorage.getItem("registerPassword");

        // Kiểm tra username và password có khớp với thông tin đăng ký hay không
        if (loginName !== registeredUsername || loginPassword !== registeredPassword) {
            alert("Thông tin đăng nhập không chính xác");
            return;
        }

        // Thông báo đăng nhập thành công và lưu thông tin đăng nhập vào Local Storage
        localStorage.setItem("isLogin", true);
        alert("Đăng nhập thành công");
        location.href = "home.html"
    });
});